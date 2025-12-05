"use client";

import { useEffect, useState } from "react";
import type { ReactNode } from "react";
import { useLanguage } from "@/context/language-context";
import { useKonami } from "@/hooks/use-konami";

type MatrixModeRootProps = {
    children: ReactNode;
};

export function MatrixModeRoot({ children }: MatrixModeRootProps) {
    const { isMatrixMode, toggleMatrixMode } = useLanguage();
    const [showToast, setShowToast] = useState(false);

    useKonami(() => {
        toggleMatrixMode();
        setShowToast(true);
        window.setTimeout(() => {
            setShowToast(false);
        }, 4000);
    });

    useEffect(() => {
        const root = document.documentElement;
        if (isMatrixMode) {
            root.classList.add("matrix-mode");
        } else {
            root.classList.remove("matrix-mode");
        }
    }, [isMatrixMode]);

    return (
        <>
            <div className={isMatrixMode ? "matrix-mode-active" : ""}>{children}</div>

            {isMatrixMode && (
                <div className="pointer-events-none fixed inset-0 z-[80] mix-blend-soft-light opacity-50">
                    <div className="h-full w-full bg-[radial-gradient(circle_at_top,_rgba(0,255,0,0.16),transparent_55%)]" />
                    <div className="h-full w-full bg-[repeating-linear-gradient(to_bottom,rgba(0,0,0,0.4)_0,rgba(0,0,0,0.4)_1px,transparent_1px,transparent_3px)]" />
                </div>
            )}

            {showToast && (
                <div className="pointer-events-none fixed inset-x-0 top-4 z-[90] flex justify-center px-4">
                    <div className="pointer-events-auto rounded-full border border-emerald-400/60 bg-black/90 px-4 py-2 text-xs font-mono text-emerald-300 shadow-lg shadow-black/70">
                        SYSTEM BREACH DETECTED. WELCOME TO THE REAL WORLD.
                    </div>
                </div>
            )}
        </>
    );
}
