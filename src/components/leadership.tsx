"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Maximize2 } from "lucide-react";
import Image from "next/image";
import { prefix } from "@/lib/utils";
import { useLanguage } from "@/context/language-context";
import { LeadershipModal, type LeadershipDetails } from "@/components/leadership-modal";

type LeadershipItem = {
    role: string;
    org: string;
    period?: string;
    logo?: string;
    image?: string;
    description: string;
    details?: LeadershipDetails;
};

type LeadershipContent = {
    heading: string;
    subheading: string;
    humanSideLabel: string;
    humanSideTitle?: string;
    items: LeadershipItem[];
};

const sectionVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: { opacity: 1, y: 0 },
};

const cardsContainerVariants = {
    hidden: { opacity: 0, y: 12 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { staggerChildren: 0.15, delayChildren: 0.1 },
    },
};

const cardVariants = {
    hidden: { opacity: 0, y: 24, scale: 0.96 },
    visible: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: { duration: 0.4 },
    },
};

export function LeadershipSection() {
    const { content } = useLanguage();
    const leadership = content.leadership as LeadershipContent;
    const volunteering = leadership.items;

    const [selectedItem, setSelectedItem] = useState<LeadershipItem | null>(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleCardClick = (item: LeadershipItem) => {
        if (!item?.details) return;
        setSelectedItem(item);
        setIsModalOpen(true);
    };

    return (
        <motion.section
            id="leadership"
            className="scroll-mt-24 space-y-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={sectionVariants}
            transition={{ duration: 0.6, ease: "easeOut" }}
        >
            <header className="mb-8 max-w-2xl space-y-3">
                <div className="flex items-center gap-3">
                    <p className="text-xs font-semibold uppercase tracking-[0.16em] text-amber-200">
                        {leadership.humanSideLabel}
                    </p>
                    <div className="h-px flex-1 bg-white/10" />
                </div>
                <h2 className="text-3xl font-semibold tracking-tight text-white md:text-4xl">
                    {leadership.humanSideTitle ?? leadership.heading}
                </h2>
                <p className="text-sm leading-7 text-zinc-400 sm:text-base">
                    {leadership.subheading}
                </p>
            </header>

            <div className="rounded-xl border border-white/[0.09] bg-white/[0.025] p-4 sm:p-5">
                <motion.div
                    className="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-3"
                    variants={cardsContainerVariants}
                >
                    {volunteering.map((item) => {
                        const teaserImage =
                            item.details?.featureImage ??
                            item.logo ??
                            item.details?.logo ??
                            item.details?.events?.[0]?.images?.[0];

                        return (
                            <motion.div
                                key={`${item.org}-${item.role}`}
                                onClick={() => handleCardClick(item)}
                                variants={cardVariants}
                                className={`group relative flex flex-col overflow-hidden rounded-lg border border-white/[0.09] bg-black/20 p-4 text-sm text-zinc-200 transition-colors duration-200 hover:border-amber-300/25 hover:bg-white/[0.03] ${item.details ? "cursor-pointer" : "cursor-default opacity-80"}`}
                            >
                                {teaserImage && (
                                    <div className="pointer-events-none absolute inset-0">
                                        <Image
                                            src={prefix(teaserImage)}
                                            alt={`${item.org} background`}
                                            fill
                                            className="object-cover opacity-0 transition-opacity duration-300 group-hover:opacity-20"
                                            sizes="(min-width: 768px) 400px, 100vw"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-midnight via-midnight/90 to-midnight/40" />
                                    </div>
                                )}

                                {item.details && (
                                    <div className="pointer-events-none absolute right-3 top-3 z-10 opacity-0 transition-opacity duration-200 group-hover:opacity-100">
                                        <span className="inline-flex h-7 w-7 items-center justify-center rounded-md border border-white/10 bg-black/70 text-zinc-300">
                                            <Maximize2 className="h-3 w-3" />
                                        </span>
                                    </div>
                                )}

                                <div className="relative z-10 flex h-full flex-col">
                                    {item.image && (
                                        <div className="mb-3 overflow-hidden rounded-xl">
                                            <div className="relative aspect-[16/9] w-full">
                                                <Image
                                                    src={prefix(item.image)}
                                                    alt={`${item.org} volunteering`}
                                                    fill
                                                    className="object-cover"
                                                />
                                            </div>
                                        </div>
                                    )}

                                    <div className="flex items-start gap-2">
                                        <div className="space-y-2">
                                            <p className="text-[0.68rem] font-medium uppercase tracking-wide text-zinc-500">
                                                {item.period} · {item.org}
                                            </p>
                                            <h3 className="text-lg font-semibold text-white md:text-xl">
                                                {item.role}
                                            </h3>
                                        </div>
                                    </div>

                                    <p className="mt-3 line-clamp-3 text-sm leading-6 text-zinc-400">{item.description}</p>

                                    {item.details && (
                                        <div className="mt-4">
                                            <div className="inline-flex min-h-10 items-center gap-2 rounded-lg border border-white/10 px-3 py-2 text-xs font-medium text-zinc-300 transition-colors group-hover:border-amber-300/30 group-hover:text-amber-100">
                                                <span>See impact</span>
                                                <ArrowRight className="h-3 w-3 transition-transform duration-200 group-hover/cta:translate-x-1" />
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </motion.div>
                        );
                    })}
                </motion.div>
                {selectedItem?.details && (
                    <LeadershipModal
                        isOpen={isModalOpen}
                        onClose={() => setIsModalOpen(false)}
                        org={selectedItem.org}
                        role={selectedItem.role}
                        period={selectedItem.period}
                        logo={selectedItem.logo}
                        details={selectedItem.details}
                    />
                )}
            </div>
        </motion.section>
    );
}
