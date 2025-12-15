"use client";

import { motion } from "framer-motion";

export function QuoteSection() {
    const quote =
        "At last the horizon appears free to us again, even granted that it is not bright; at last our ships may venture out again, venture out to face any danger; all the daring of the lover of knowledge is permitted again; the sea, our sea, lies open again; perhaps there has never yet been such an ‘Open sea’.";

    return (
        <section className="scroll-mt-32 py-10 sm:py-12">
            <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.4 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="relative overflow-hidden rounded-3xl border border-zinc-800/60 bg-gradient-to-br from-zinc-950 via-black to-zinc-900 shadow-[0_24px_60px_rgba(0,0,0,0.6)]"
                >
                    <div className="pointer-events-none absolute inset-0 opacity-40">
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(197,160,89,0.12),transparent_35%)]" />
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_40%,rgba(255,255,255,0.05),transparent_40%)]" />
                        <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(255,255,255,0.06),transparent_45%)]" />
                    </div>

                    <div className="relative space-y-5 px-6 py-10 sm:px-10 sm:py-14">
                        <p className="text-sm font-mono uppercase tracking-[0.28em] text-amber-200/70">
                            Nietzsche — p. 448
                        </p>
                        <blockquote className="font-serif text-xl leading-relaxed text-amber-50 sm:text-2xl">
                            “{quote}”
                        </blockquote>
                        <div className="h-px w-16 bg-gradient-to-r from-amber-300/70 via-amber-200/60 to-transparent" />
                        <p className="text-sm uppercase tracking-[0.24em] text-amber-100/70">
                            Open Sea
                        </p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
