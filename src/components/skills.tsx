"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/context/language-context";

const sectionVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: { opacity: 1, y: 0 },
};

export function SkillsSection() {
    const { content } = useLanguage();
    const categories = content.skills.categories;

    return (
        <motion.section
            id="skills"
            className="scroll-mt-24 space-y-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={sectionVariants}
            transition={{ duration: 0.6, ease: "easeOut" }}
        >
            <header className="mb-12 space-y-3">
                <h2 className="font-serif text-3xl md:text-5xl font-bold tracking-tight text-slate-100">
                    {content.skills.heading}
                </h2>
                <p className="text-sm text-slate-400 sm:text-base">
                    {content.skills.subheading}
                </p>
            </header>

            <div className="grid gap-4 md:grid-cols-2 md:gap-6 lg:grid-cols-3">
                {categories.map((category, index) => (
                    <motion.div
                        key={category.id}
                        className="flex flex-col rounded-2xl border border-violet-500/25 bg-indigo-950/40 p-4 shadow-sm shadow-slate-950/40 transition-all hover:border-gold hover:shadow-lg hover:shadow-gold/30"
                        initial={{ opacity: 0, y: 16 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ duration: 0.4, delay: index * 0.05, ease: "easeOut" }}
                    >
                        <h3 className="text-sm font-semibold text-slate-100">
                            {category.label}
                        </h3>

                        <div className="mt-3 flex flex-wrap gap-2">
                            {category.items.map((skill: string) => (
                                <span
                                    key={skill}
                                    className="inline-flex items-center rounded-full border border-violet-500/30 bg-indigo-900/40 px-3 py-1 text-xs font-medium font-mono text-violet-200 transition-colors hover:border-gold hover:text-gold"
                                >
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </motion.div>
                ))}
            </div>
        </motion.section>
    );
}
