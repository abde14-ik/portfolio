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
            className="scroll-mt-28 space-y-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={sectionVariants}
            transition={{ duration: 0.6, ease: "easeOut" }}
        >
            <header className="mb-8 max-w-2xl space-y-3">
                <h2 className="text-3xl font-semibold tracking-tight text-white md:text-4xl">
                    {content.skills.heading}
                </h2>
                <p className="text-sm leading-7 text-zinc-400 sm:text-base">
                    {content.skills.subheading}
                </p>
            </header>

            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                {categories.map((category, index) => (
                    <motion.div
                        key={category.id}
                        className="flex flex-col rounded-xl border border-white/[0.09] bg-white/[0.025] p-5 transition-colors hover:border-amber-300/25 hover:bg-white/[0.04]"
                        initial={{ opacity: 0, y: 16 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ duration: 0.4, delay: index * 0.05, ease: "easeOut" }}
                    >
                        <h3 className="text-sm font-semibold text-white">
                            {category.label}
                        </h3>

                        <div className="mt-3 flex flex-wrap gap-2">
                            {category.items.map((skill: string) => (
                                <span
                                    key={skill}
                                    className="inline-flex items-center rounded-md border border-white/[0.09] bg-black/20 px-2.5 py-1 text-xs font-medium text-zinc-300"
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
