"use client";

import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";
import { useLanguage } from "@/context/language-context";

const sectionVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: { opacity: 1, y: 0 },
};

export function ExperienceSection() {
    const { content } = useLanguage();
    const items = content.experience.items;

    return (
        <motion.section
            id="experience"
            className="scroll-mt-28 space-y-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={sectionVariants}
            transition={{ duration: 0.6, ease: "easeOut" }}
        >
            <header className="mb-8 max-w-2xl space-y-3">
                <h2 className="text-3xl font-semibold tracking-tight text-white md:text-4xl">
                    {content.experience.heading}
                </h2>
                <p className="text-sm leading-7 text-zinc-400 sm:text-base">
                    {content.experience.subheading}
                </p>
            </header>

            <div className="relative mt-2">
                <div className="pointer-events-none absolute bottom-0 left-[0.4rem] top-0 hidden w-px bg-white/10 sm:block" />
                <ol className="space-y-6 pl-0 sm:pl-6">
                    {items.map((item, index) => (
                        <motion.li
                            key={`${item.company}-${item.role}-${index}`}
                            initial={{ opacity: 0, y: 12 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.3 }}
                            transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
                            className="relative pl-0 sm:pl-1"
                        >
                            <div className="absolute -left-[0.1rem] top-6 hidden h-2 w-2 rounded-full border-2 border-amber-300 bg-[#090b10] sm:block" />
                            <div className="rounded-xl border border-white/[0.09] bg-white/[0.025] p-5 sm:ml-5 sm:p-6">
                                <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                                    <div className="min-w-0">
                                        <p className="text-xs font-medium tracking-wide text-amber-200">
                                            {item.period}
                                        </p>
                                        <h3 className="mt-1 text-lg font-semibold tracking-tight text-white sm:text-xl">
                                            {item.role}
                                        </h3>
                                        <p className="mt-1 text-sm text-zinc-300">{item.company}</p>
                                        {item.location && (
                                            <p className="mt-1 text-xs text-slate-400">{item.location}</p>
                                        )}
                                    </div>
                                    <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-white/10 bg-white/[0.04] text-amber-200">
                                        <Briefcase className="h-4 w-4" />
                                    </span>
                                </div>

                                <ul className="mt-5 space-y-2 text-sm leading-6 text-zinc-400 sm:text-[0.94rem]">
                                    {item.tasks.map((task: string) => (
                                        <li key={task} className="flex gap-2">
                                            <span className="mt-[0.65rem] h-1 w-1 shrink-0 rounded-full bg-amber-300" />
                                            <span>{task}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </motion.li>
                    ))}
                </ol>
            </div>
        </motion.section>
    );
}
