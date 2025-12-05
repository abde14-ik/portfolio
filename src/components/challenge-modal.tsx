"use client";

import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { AnimatePresence, motion } from "framer-motion";
import dynamic from "next/dynamic";
import { CheckCircle2, X } from "lucide-react";
import { useLanguage } from "@/context/language-context";

const Editor = dynamic(() => import("@monaco-editor/react"), {
    ssr: false,
});

declare global {
    interface Window {
        loadPyodide?: (options: { indexURL: string }) => Promise<any>;
    }
}

type ChallengeModalProps = {
    isOpen: boolean;
    onClose: () => void;
};

type SolverEntry = {
    name: string;
    time: string;
    isUser: boolean;
};

export function ChallengeModal({ isOpen, onClose }: ChallengeModalProps) {
    const [mounted, setMounted] = useState(false);
    const { content } = useLanguage();
    const challenge = (content as any).challenge;

    const [code, setCode] = useState<string>(challenge?.defaultCode ?? "");
    const [output, setOutput] = useState<string>("");
    const [isPyodideLoading, setIsPyodideLoading] = useState<boolean>(false);
    const [isRunning, setIsRunning] = useState<boolean>(false);
    const [hasError, setHasError] = useState<boolean>(false);

    const [solvers, setSolvers] = useState<SolverEntry[]>([
        { name: "Abdelilah IKBI", time: "Owner", isUser: false },
    ]);
    const [showNameInput, setShowNameInput] = useState(false);
    const [userName, setUserName] = useState("");

    const pyodideRef = useRef<any | null>(null);

    useEffect(() => {
        setMounted(true);
    }, []);

    useEffect(() => {
        if (!mounted || !isOpen) return;

        let cancelled = false;

        async function loadPyodideRuntime() {
            if (pyodideRef.current) return;

            try {
                setIsPyodideLoading(true);

                if (!window.loadPyodide) {
                    await new Promise<void>((resolve, reject) => {
                        const script = document.createElement("script");
                        script.src = "https://cdn.jsdelivr.net/pyodide/v0.23.4/full/pyodide.js";
                        script.onload = () => resolve();
                        script.onerror = () => reject(new Error("Failed to load Pyodide"));
                        document.body.appendChild(script);
                    });
                }

                if (cancelled) return;

                const pyodide = await window.loadPyodide!({
                    indexURL: "https://cdn.jsdelivr.net/pyodide/v0.23.4/full/",
                });

                if (!cancelled) {
                    pyodideRef.current = pyodide;
                    setIsPyodideLoading(false);
                }
            } catch (error) {
                if (!cancelled) {
                    setIsPyodideLoading(false);
                    setHasError(true);
                    setOutput("Failed to initialize Python runtime. Please refresh and try again.");
                }
            }
        }

        loadPyodideRuntime();

        return () => {
            cancelled = true;
        };
    }, [mounted, isOpen]);

    const runCode = async () => {
        if (!pyodideRef.current) {
            setHasError(true);
            setOutput("Python runtime is still loading. Please wait a moment.");
            return;
        }

        const pyodide = pyodideRef.current;

        setIsRunning(true);
        setHasError(false);
        setShowNameInput(false);
        setOutput("Running tests...\n");

        let sawSuccess = false;

        pyodide.setStdout({
            batched: (msg: string) => {
                if (msg.includes("SUCCESS: You successfully recreated the K8s HPA logic")) {
                    sawSuccess = true;
                }
                setOutput((prev) => prev + msg + "\n");
            },
        });

        const userCode = code;
        const testHarness = `
import math

try:
    # Test Case 1: Scale Up
    # 10 pods, usage is 200 (target 100). Should scale to 20.
    assert calculate_replicas(10, 200, 100) == 20
    print("✅ Test 1 Passed: Scale Up")

    # Test Case 2: Scale Down
    # 10 pods, usage is 50 (target 100). Should scale to 5.
    assert calculate_replicas(10, 50, 100) == 5
    print("✅ Test 2 Passed: Scale Down")

    # Test Case 3: Ceiling (Round Up)
    # 2 pods, usage 90 (target 50). Ratio 1.8 -> Should scale to 4 (2 * 1.8 = 3.6 -> ceil -> 4)
    assert calculate_replicas(2, 90, 50) == 4
    print("✅ Test 3 Passed: Ceiling Logic")

    print("🎉 SUCCESS: You successfully recreated the K8s HPA logic!")

except AssertionError:
    print("❌ FAILED: The calculation didn't match the K8s formula.")
except Exception as e:
    print(f"⚠️ ERROR: {e}")
`;

        try {
            await pyodide.runPythonAsync(`${userCode}\n${testHarness}`);

            if (sawSuccess) {
                setShowNameInput(true);
            }
        } catch (error: any) {
            setHasError(true);
            setOutput((prev) => `${prev}\n⚠️ Runtime error: ${error?.message ?? String(error)}`);
        } finally {
            setIsRunning(false);
        }
    };

    if (!mounted) return null;

    return createPortal(
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    className="fixed inset-0 z-[100] flex items-center justify-center bg-black/85 backdrop-blur-xl"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onClick={onClose}
                >
                    <motion.div
                        className="relative mx-4 flex w-full max-w-6xl max-h-[90vh] flex-col overflow-hidden rounded-3xl border border-violet-500/40 bg-gradient-to-br from-slate-950 via-slate-950 to-midnight p-4 text-slate-100 shadow-2xl shadow-black/80 sm:p-6"
                        initial={{ scale: 0.96, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0.96, opacity: 0 }}
                        transition={{ duration: 0.2, ease: "easeOut" }}
                        onClick={(event) => event.stopPropagation()}
                    >
                        <button
                            type="button"
                            onClick={onClose}
                            className="absolute right-4 top-4 inline-flex h-9 w-9 items-center justify-center rounded-full bg-black/70 text-slate-100 shadow-md shadow-black/70 transition hover:bg-black/80"
                            aria-label="Close challenge"
                        >
                            <X className="h-4 w-4" />
                        </button>

                        <header className="pr-8">
                            <p className="mb-1 font-mono text-xs tracking-[0.25em] text-gold uppercase">
                                Challenge Arena
                            </p>
                            <h2 className="font-serif text-3xl font-bold text-slate-50 sm:text-4xl">
                                {challenge.heading}
                            </h2>
                            <p className="mt-1 text-sm text-zinc-400 sm:text-base">
                                {challenge.subheading}
                            </p>
                            <p className="mt-2 text-sm font-medium text-violet-200 sm:text-[0.95rem]">
                                {challenge.problemTitle}
                            </p>
                        </header>

                        <div className="mt-2 grid flex-1 gap-6 overflow-hidden lg:grid-cols-[minmax(0,1.05fr)_minmax(0,1.1fr)] lg:gap-8">
                            <div className="flex flex-col overflow-y-auto pr-2 text-sm text-slate-200 sm:text-[0.95rem]">
                                <div className="space-y-4">
                                    <h3 className="text-base font-semibold text-slate-100">
                                        Problem Statement
                                    </h3>
                                    <p className="leading-relaxed text-slate-300">
                                        {challenge.description}
                                    </p>

                                    <div className="mt-3 rounded-2xl border border-violet-500/40 bg-violet-500/10 p-4 text-xs text-slate-100 sm:text-[0.8rem]">
                                        <p className="mb-2 font-mono text-[0.7rem] uppercase tracking-[0.18em] text-violet-200">
                                            Example
                                        </p>
                                        <p>
                                            Input: <code>{challenge.exampleInput}</code>
                                        </p>
                                        <p className="mt-1">
                                            Expected: <code>{challenge.exampleOutput}</code>
                                        </p>
                                    </div>

                                    <div className="mt-3 space-y-1 text-xs text-slate-400 sm:text-[0.8rem]">
                                        <p className="font-semibold text-slate-200">Constraints &amp; Hints</p>
                                        <ul className="list-disc space-y-1 pl-4">
                                            <li>
                                                <code>current_pods</code> is the current number of replicas.
                                            </li>
                                            <li>
                                                <code>current_metrics</code> is the current CPU usage (e.g. in millicores or ms).
                                            </li>
                                            <li>
                                                <code>target_metrics</code> is the target CPU usage.
                                            </li>
                                            <li>
                                                Use the HPA-style formula:
                                                <code>desired = ceil(current_pods * current_metrics / target_metrics)</code>.
                                            </li>
                                        </ul>
                                    </div>
                                </div>

                                <div
                                    className={`mt-6 rounded-2xl border bg-gradient-to-br from-amber-500/15 via-slate-950/85 to-slate-950/95 p-4 text-xs shadow-[0_0_30px_rgba(250,204,21,0.18)] sm:text-[0.8rem] ${showNameInput ? "ring-2 ring-amber-300/70" : "ring-1 ring-amber-200/40"}`}
                                >
                                    <p className="mb-2 text-[0.7rem] font-mono uppercase tracking-[0.18em] text-amber-300">
                                        🏆 Recent Solvers
                                    </p>

                                    <div className="space-y-2">
                                        {solvers.map((solver, index) => (
                                            <motion.div
                                                key={`${solver.name}-${index}`}
                                                initial={solver.isUser ? { scale: 0.9, opacity: 0 } : false}
                                                animate={solver.isUser ? { scale: 1, opacity: 1 } : false}
                                                transition={
                                                    solver.isUser
                                                        ? { duration: 0.2, ease: "easeOut" }
                                                        : undefined
                                                }
                                                className="flex items-center justify-between text-[0.75rem] text-slate-200"
                                            >
                                                <div className="flex items-center gap-2">
                                                    <CheckCircle2
                                                        className={
                                                            solver.isUser
                                                                ? "h-3.5 w-3.5 text-amber-300"
                                                                : "h-3.5 w-3.5 text-emerald-400"
                                                        }
                                                    />
                                                    <span
                                                        className={
                                                            solver.isUser
                                                                ? "font-semibold text-slate-50"
                                                                : "text-slate-200"
                                                        }
                                                    >
                                                        {solver.name}
                                                    </span>
                                                </div>
                                                <span className="text-[0.7rem] text-slate-400">{solver.time}</span>
                                            </motion.div>
                                        ))}
                                    </div>

                                    {showNameInput && (
                                        <form
                                            className="mt-4 space-y-2 border-t border-white/10 pt-3"
                                            onSubmit={(event) => {
                                                event.preventDefault();
                                                const name = userName.trim();
                                                if (!name) return;

                                                setSolvers((previous) => [
                                                    { name, time: "Just now", isUser: true },
                                                    ...previous.map((solver) => ({
                                                        ...solver,
                                                        isUser: false,
                                                    })),
                                                ]);
                                                setShowNameInput(false);
                                                setUserName("");
                                            }}
                                        >
                                            <p className="text-[0.75rem] text-slate-300">
                                                Test Passed! Enter your name to join the leaderboard.
                                            </p>
                                            <div className="flex items-center gap-2">
                                                <input
                                                    type="text"
                                                    value={userName}
                                                    onChange={(event) => setUserName(event.target.value)}
                                                    placeholder="Your name"
                                                    className="flex-1 rounded-md border border-slate-700 bg-black/60 px-3 py-1.5 text-xs text-slate-100 placeholder:text-slate-500 focus:outline-none focus:ring-1 focus:ring-violet-400"
                                                />
                                                <button
                                                    type="submit"
                                                    className="inline-flex items-center gap-1 rounded-full border border-gold/70 bg-gradient-to-r from-royal to-royalDark px-3 py-1 text-[0.7rem] font-semibold text-slate-50 shadow-sm shadow-gold/30 transition-transform hover:border-gold hover:from-royalDark hover:to-royal active:scale-95"
                                                >
                                                    <span>Submit</span>
                                                </button>
                                            </div>
                                        </form>
                                    )}
                                </div>
                            </div>

                            <div className="flex flex-col overflow-hidden rounded-2xl border border-violet-500/40 bg-black/70 shadow-lg shadow-violet-500/30">
                                <div className="flex items-center justify-between border-b border-white/10 bg-black/70 px-4 py-2.5">
                                    <p className="text-xs font-mono uppercase tracking-[0.2em] text-slate-400">
                                        Python ·{" "}
                                        {isPyodideLoading
                                            ? "Loading runtime..."
                                            : pyodideRef.current
                                                ? "Ready"
                                                : "Idle"}
                                    </p>
                                    <button
                                        type="button"
                                        onClick={runCode}
                                        disabled={isPyodideLoading || isRunning}
                                        className="inline-flex cursor-pointer items-center gap-2 rounded-full border border-gold/60 bg-gradient-to-r from-royal to-royalDark px-4 py-1.5 text-xs font-semibold text-slate-50 shadow-md shadow-gold/30 transition-transform hover:border-gold hover:from-royalDark hover:to-royal active:scale-95 disabled:cursor-not-allowed disabled:opacity-60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold/60 focus-visible:ring-offset-2 focus-visible:ring-offset-black"
                                    >
                                        {isRunning && (
                                            <span className="h-3 w-3 animate-spin rounded-full border border-gold/60 border-t-transparent" />
                                        )}
                                        <span>{isRunning ? "Executing..." : challenge.runButton}</span>
                                    </button>
                                </div>

                                <div className="flex-1">
                                    <Editor
                                        value={code}
                                        language="python"
                                        theme="vs-dark"
                                        height="100%"
                                        options={{
                                            fontSize: 13,
                                            minimap: { enabled: false },
                                            scrollBeyondLastLine: false,
                                            wordWrap: "on",
                                        }}
                                        onChange={(value) => setCode(value ?? "")}
                                    />
                                </div>

                                <div className="bg-[#1e1e1e] border-t border-white/10 p-4 font-mono text-sm text-slate-200 max-h-40 sm:max-h-56 overflow-y-auto">
                                    <p className="mb-1 text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-slate-500">
                                        {challenge.outputLabel}
                                    </p>
                                    <div className="mt-1 whitespace-pre-wrap break-words">
                                        {output ||
                                            (isPyodideLoading
                                                ? "Booting Python environment..."
                                                : "Hit Run to execute your solution against hidden tests.")}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>,
        document.body,
    );
}
