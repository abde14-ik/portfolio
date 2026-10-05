"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/context/language-context";
// import { Gallery } from "@/components/gallery";

const sectionVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: { opacity: 1, y: 0 },
};

export function AboutSection() {
    const { content } = useLanguage();
    const about = content.about;

    return (
        <motion.section
            id="about"
            className="scroll-mt-28 space-y-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={sectionVariants}
            transition={{ duration: 0.6, ease: "easeOut" }}
        >
            <header className="mb-8 max-w-2xl space-y-3">
                <h2 className="text-3xl font-semibold tracking-tight text-white md:text-4xl">
                    {about.heading}
                </h2>
                <p className="text-sm leading-7 text-zinc-400 sm:text-base">
                    {about.subheading}
                </p>
            </header>

            <div className="grid gap-4 md:grid-cols-2">
                <div className="rounded-xl border border-white/[0.09] bg-white/[0.025] p-5 sm:p-6">
                    <h3 className="text-sm font-semibold text-white sm:text-base">
                        {about.engineeringTitle}
                    </h3>
                    <div className="mt-4 space-y-3 text-sm leading-6 text-zinc-400 sm:text-[0.94rem]">
                        {about.profileItems.map((item: string) => (
                            <p key={item}>{item}</p>
                        ))}
                    </div>
                </div>

                <div className="rounded-xl border border-white/[0.09] bg-white/[0.025] p-5 sm:p-6">
                    <h3 className="text-sm font-semibold text-white sm:text-base">
                        {about.beyondCodeTitle}
                    </h3>
                    <div className="mt-4 space-y-3 text-sm leading-6 text-zinc-400 sm:text-[0.94rem]">
                        {about.beyondItems.map((item: string) => (
                            <p key={item}>{item}</p>
                        ))}
                    </div>
                </div>

                {/**
                 * Life Gallery (photos) placeholder.
                 * Uncomment the block below once you have added images under public/gallery/.
                 */}
                {/**
                <div className="md:col-span-2 rounded-2xl border border-slate-800/70 bg-slate-950/80 p-5 shadow-sm shadow-slate-950/40">
                    <Gallery />
                </div>
                */}
            </div>
        </motion.section>
    );
}
