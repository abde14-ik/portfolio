"use client";

import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";
import { useLanguage } from "@/context/language-context";

const sectionVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: { opacity: 1, y: 0 },
};

export function EducationSection() {
    const { content } = useLanguage();
    const items = content.education.items;

    return (
        <motion.section
            id="education"
            className="scroll-mt-24 space-y-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={sectionVariants}
            transition={{ duration: 0.6, ease: "easeOut" }}
        >
            <header className="mb-12 space-y-3">
                <h2 className="font-serif text-3xl md:text-5xl font-bold tracking-tight text-slate-100">
                    {content.education.heading}
                </h2>
                <p className="text-sm text-slate-400 sm:text-base">
                    {content.education.subheading}
                </p>
            </header>

            <div className="relative mt-2">
                <div className="pointer-events-none absolute left-[0.4rem] top-0 bottom-0 hidden w-[2px] bg-gradient-to-b from-violet-600 via-royal to-indigo-900 sm:block" />
                <ol className="space-y-6 pl-0 sm:pl-6">
                    {items.map((item, index) => (
                        <motion.li
                            key={`${item.institution}-${item.degree}-${index}`}
                            initial={{ opacity: 0, x: 40 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, amount: 0.3 }}
                            transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
                            className="relative"
                        >
                            <div className="absolute -left-[0.6rem] top-3 hidden h-3 w-3 items-center justify-center rounded-full border-2 border-gold bg-midnight sm:flex" />
                            <div className="rounded-2xl border border-violet-500/20 bg-indigo-950/30 p-4 shadow-sm shadow-slate-950/40 backdrop-blur md:p-6">
                                <div className="flex items-start justify-between gap-3">
                                    <div>
                                        <p className="text-xs font-medium uppercase tracking-[0.16em] text-violet-300">
                                            {item.period}
                                        </p>
                                        <h3 className="mt-1 text-sm font-semibold text-slate-50 sm:text-base">
                                            <span className="font-semibold">{item.degree}</span>
                                        </h3>
                                        <p className="mt-1 text-sm italic text-slate-300">
                                            {item.institution}
                                        </p>
                                        {item.location && (
                                            <p className="mt-1 text-xs text-slate-400">{item.location}</p>
                                        )}
                                    </div>
                                    <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-violet-500/15 text-violet-300">
                                        <GraduationCap className="h-4 w-4" />
                                    </span>
                                </div>
                            </div>
                        </motion.li>
                    ))}
                </ol>
            </div>
        </motion.section>
    );
}
