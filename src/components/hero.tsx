"use client";

import { motion } from "framer-motion";
import { ArrowDownRight, Download, MapPin } from "lucide-react";
import { profile } from "@/constants/data";
import { prefix } from "@/lib/utils";
import { useLanguage } from "@/context/language-context";

const heroVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: { opacity: 1, y: 0 },
};

export function HeroSection() {
    const { content } = useLanguage();
    const hero = content.hero;

    return (
        <motion.section
            id="hero"
            className="scroll-mt-32 py-8 sm:py-12 lg:py-16"
            initial="hidden"
            animate="visible"
            variants={heroVariants}
            transition={{ duration: 0.7, ease: "easeOut" }}
        >
            <div className="mx-auto max-w-4xl">
                <div className="relative z-10 space-y-7">
                    <p className="inline-flex items-center gap-2 rounded-full border border-amber-400/20 bg-amber-400/[0.06] px-3 py-1.5 text-xs font-medium text-amber-200">
                        <span className="inline-block h-2 w-2 rounded-full bg-amber-400" />
                        <span>{hero.statusDot}</span>
                    </p>

                    <div>
                        <h1 className="text-5xl font-bold tracking-tight text-white sm:text-6xl md:text-7xl">
                            <span>{profile.name}</span>
                        </h1>
                        <p className="mt-4 text-xl font-medium text-zinc-200 sm:text-2xl">
                            {hero.badge}
                        </p>
                        {hero.bio && hero.bio !== hero.badge && (
                            <p className="mt-5 max-w-2xl text-base leading-7 text-zinc-400 sm:text-lg sm:leading-8">
                                {hero.bio}
                            </p>
                        )}
                    </div>

                    <div className="flex flex-wrap items-center gap-3 pt-1">
                        <a
                            href="#projects"
                            className="inline-flex min-h-11 items-center gap-2 rounded-lg bg-amber-400 px-5 py-2.5 text-sm font-semibold text-zinc-950 transition-colors hover:bg-amber-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-300 focus-visible:ring-offset-2 focus-visible:ring-offset-[#090b10]"
                        >
                            <ArrowDownRight className="h-4 w-4" />
                            <span>{hero.ctaViewProjects}</span>
                        </a>
                        <a
                            href={prefix(hero.cloudResumeUrl)}
                            download
                            className="inline-flex min-h-11 items-center gap-2 rounded-lg border border-white/15 bg-white/[0.03] px-5 py-2.5 text-sm font-medium text-zinc-200 transition-colors hover:border-white/25 hover:bg-white/[0.07] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-300"
                        >
                            <Download className="h-4 w-4" />
                            <span>{hero.ctaCloudResume}</span>
                        </a>
                        <a
                            href={prefix(hero.backendResumeUrl)}
                            download
                            className="inline-flex min-h-11 items-center gap-2 rounded-lg border border-white/15 bg-white/[0.03] px-5 py-2.5 text-sm font-medium text-zinc-200 transition-colors hover:border-white/25 hover:bg-white/[0.07] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-300"
                        >
                            <Download className="h-4 w-4" />
                            <span>{hero.ctaBackendResume}</span>
                        </a>
                    </div>

                    <p className="flex items-center gap-2 text-sm text-zinc-400">
                        <MapPin className="h-4 w-4 text-zinc-500" aria-hidden="true" />
                        <span>{hero.locationMeta}</span>
                    </p>
                </div>

            </div>
        </motion.section>
    );
}
