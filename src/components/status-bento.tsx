"use client";

import { Activity, BookOpen, TerminalSquare } from "lucide-react";
import { motion } from "framer-motion";
import { useLanguage } from "@/context/language-context";

const floatTransition = {
    duration: 6,
    repeat: Infinity,
    repeatType: "reverse" as const,
    ease: "easeInOut" as const,
};

export function StatusBento() {
    const { content } = useLanguage();
    const hero = content.hero;

    return (
        <motion.div
            className="rounded-3xl border border-white/5 bg-[#121212] p-4 text-xs text-zinc-200 shadow-xl shadow-black/60 sm:p-5"
            animate={{ y: [0, -6, 0] }}
            transition={{ duration: 8, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
        >
            <div className="mb-3 flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.3em] text-zinc-400">
                <span className="h-1.5 w-1.5 rounded-full bg-amber-400 animate-pulse" />
                <span>{hero.statusTitle}</span>
            </div>

            <div className="grid grid-cols-2 gap-3 sm:gap-4">
                {/* Engineering Focus – large card spanning 2 columns */}
                <motion.div
                    className="col-span-2 flex items-center justify-between gap-3 rounded-2xl border border-white/5 bg-[#121212] px-3 py-3 shadow-sm shadow-black/40 transition-colors hover:bg-zinc-900"
                    animate={{ y: [0, -4, 0] }}
                    transition={{ ...floatTransition, delay: 0.2 }}
                >
                    <div className="flex items-center gap-3">
                        <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-zinc-900 text-zinc-200">
                            <TerminalSquare className="h-4 w-4" />
                        </span>
                        <div className="space-y-0.5">
                            <p className="text-[10px] font-medium uppercase tracking-[0.2em] text-zinc-400">
                                {hero.statusFocusLabel}
                            </p>
                            <p className="text-sm font-semibold text-white sm:text-[0.95rem]">
                                {hero.statusFocusValue}
                            </p>
                            <p className="text-[0.72rem] text-zinc-400">
                                {hero.status?.focusSub}
                            </p>
                        </div>
                    </div>
                    <span className="hidden text-[0.7rem] text-slate-400 md:inline">
                        {hero.status?.professionalLabel}
                    </span>
                </motion.div>

                {/* Reading card */}
                <motion.div
                    className="flex flex-col justify-between gap-2 rounded-2xl border border-white/5 bg-[#121212] px-3 py-3 shadow-sm shadow-black/40 transition-colors hover:bg-zinc-900"
                    animate={{ y: [0, -3, 0] }}
                    transition={{ ...floatTransition, delay: 0.6 }}
                >
                    <div className="flex items-center gap-2">
                        <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-zinc-900 text-zinc-200">
                            <BookOpen className="h-4 w-4" />
                        </span>
                        <p className="text-[10px] font-medium uppercase tracking-[0.2em] text-slate-400">
                            {hero.statusReadingLabel}
                        </p>
                    </div>
                    <div className="space-y-0.5">
                        <p className="text-sm font-semibold text-white">{hero.statusBookValue}</p>
                        <p className="text-[0.72rem] text-zinc-400">{hero.statusBookAuthor}</p>
                    </div>
                </motion.div>

                {/* Endurance / Training card */}
                <motion.div
                    className="flex flex-col justify-between gap-2 rounded-2xl border border-white/5 bg-[#121212] px-3 py-3 shadow-sm shadow-black/40 transition-colors hover:bg-zinc-900"
                    animate={{ y: [0, -3, 0] }}
                    transition={{ ...floatTransition, delay: 1 }}
                >
                    <div className="flex items-center gap-2">
                        <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-zinc-900 text-zinc-200">
                            <Activity className="h-4 w-4" />
                        </span>
                        <p className="text-[10px] font-medium uppercase tracking-[0.2em] text-zinc-400">
                            {hero.statusTrainingLabel}
                        </p>
                    </div>
                    <div className="space-y-0.5">
                        <p className="text-sm font-semibold text-white">{hero.statusRunValue}</p>
                        <p className="text-[0.72rem] text-zinc-400">{hero.status?.trainingSub}</p>
                    </div>
                </motion.div>
            </div>
        </motion.div>
    );
}
