"use client";

import { useState } from "react";
import { useLanguage } from "@/context/language-context";
import { ChallengeModal } from "@/components/challenge-modal";

export function CodeChallenge() {
    const { content } = useLanguage();
    const challenge = (content as any).challenge;
    const [isOpen, setIsOpen] = useState(false);

    if (!challenge) {
        return null;
    }

    return (
        <>
            <section id="challenge" className="scroll-mt-32 py-1 lg:py-1.5">
                <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
                    <div
                        className="group cursor-pointer rounded-3xl border border-violet-500/30 bg-midnight/80 px-6 pt-2 pb-6 sm:px-8 sm:pt-3 sm:pb-8 shadow-[0_0_40px_rgba(76,29,149,0.45)] backdrop-blur-xl transition hover:-translate-y-1 hover:border-violet-400/60 hover:shadow-[0_0_60px_rgba(76,29,149,0.6)]"
                        onClick={() => setIsOpen(true)}
                    >
                        <p className="mb-3 font-mono text-xs tracking-[0.25em] text-gold uppercase">
                            CHALLENGE 01
                        </p>
                        <h2 className="font-serif text-3xl font-bold text-slate-100 sm:text-4xl">
                            {challenge.heading}
                        </h2>
                        <p className="mt-2 text-sm text-zinc-400 sm:text-base">
                            {challenge.problemTitle}
                        </p>
                        <p className="mt-3 max-w-2xl text-sm text-slate-300/90 line-clamp-2 sm:text-[0.95rem]">
                            {challenge.description}
                        </p>

                        <div className="mt-5 flex items-center justify-between gap-3">
                            <div className="text-[0.7rem] font-mono uppercase tracking-[0.2em] text-violet-300/80">
                                Round Robin · Python · Load Balancing
                            </div>
                            <button
                                type="button"
                                className="inline-flex cursor-pointer items-center gap-2 rounded-full border border-gold/70 bg-gradient-to-r from-royal to-royalDark px-4 py-1.5 text-xs font-semibold text-slate-50 shadow-md shadow-gold/30 transition-transform hover:border-gold hover:from-royalDark hover:to-royal active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold/60 focus-visible:ring-offset-2 focus-visible:ring-offset-black"
                                onClick={(event) => {
                                    event.stopPropagation();
                                    setIsOpen(true);
                                }}
                            >
                                <span>Start Challenge</span>
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {isOpen && <ChallengeModal isOpen={isOpen} onClose={() => setIsOpen(false)} />}
        </>
    );
}
