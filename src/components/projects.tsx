"use client";

import { motion } from "framer-motion";
import { ExternalLink, Code2 } from "lucide-react";
import { useLanguage } from "@/context/language-context";

const sectionVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: { opacity: 1, y: 0 },
};

export function ProjectsSection() {
    const { content } = useLanguage();
    const projects = content.projects.items;

    return (
        <motion.section
            id="projects"
            className="scroll-mt-28 space-y-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={sectionVariants}
            transition={{ duration: 0.6, ease: "easeOut" }}
        >
            <header className="mb-8 max-w-2xl space-y-3">
                <h2 className="text-3xl font-semibold tracking-tight text-white md:text-4xl">
                    {content.projects.heading}
                </h2>
                <p className="text-sm leading-7 text-zinc-400 sm:text-base">
                    {content.projects.subheading}
                </p>
            </header>

            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-5">
                {projects.map((project) => {
                    const codeHref = project.githubUrl;

                    return (
                        <motion.article
                            key={project.name}
                            className="group flex h-full flex-col rounded-xl border border-white/[0.09] bg-white/[0.025] p-5 transition-colors hover:border-amber-300/30 hover:bg-white/[0.045] sm:p-6"
                        >
                            <div className="flex items-start justify-between gap-3">
                                <div>
                                    <h3 className="text-base font-semibold tracking-tight text-white sm:text-lg">
                                        {project.name}
                                    </h3>
                                    <p className="mt-3 text-sm leading-6 text-zinc-400">
                                        {project.desc}
                                    </p>
                                </div>
                                <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-white/10 bg-white/[0.04] text-amber-200">
                                    <Code2 className="h-4 w-4" />
                                </span>
                            </div>

                            <div className="mt-5 flex flex-wrap gap-2">
                                {project.tech.map((tool) => (
                                    <span
                                        key={tool}
                                        className="inline-flex items-center rounded-md border border-white/[0.09] bg-black/20 px-2.5 py-1 text-xs font-medium text-zinc-300"
                                    >
                                        {tool}
                                    </span>
                                ))}
                            </div>

                            <div className="mt-auto flex flex-wrap gap-2 pt-6">
                                {codeHref && (
                                    <a
                                        href={codeHref}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex min-h-10 items-center gap-2 rounded-lg border border-white/10 px-3 py-2 text-xs font-medium text-zinc-200 transition-colors hover:border-amber-300/30 hover:text-amber-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-300"
                                    >
                                        <Code2 className="h-3 w-3" />
                                        <span>{content.common.viewCode}</span>
                                    </a>
                                )}
                                {project.liveUrl && (
                                    <a
                                        href={project.liveUrl}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="inline-flex min-h-10 items-center gap-2 rounded-lg border border-white/10 px-3 py-2 text-xs font-medium text-zinc-200 transition-colors hover:border-amber-300/30 hover:text-amber-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-300"
                                    >
                                        <ExternalLink className="h-3 w-3" />
                                        <span>{content.common.liveDemo}</span>
                                    </a>
                                )}
                            </div>
                        </motion.article>
                    );
                })}
            </div>
        </motion.section>
    );
}
