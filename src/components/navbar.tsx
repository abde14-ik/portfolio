"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Activity, Github, Linkedin, Menu, X } from "lucide-react";
import { motion } from "framer-motion";
import { profile } from "@/constants/data";
import { prefix } from "@/lib/utils";
import { AvatarModal } from "@/components/avatar-modal";
import { NavDropdown } from "@/components/nav-dropdown";
import { LanguageSwitcher } from "@/components/language-switcher";
import { useLanguage } from "@/context/language-context";

export function Navbar() {
    const [isAvatarOpen, setIsAvatarOpen] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);
    const { content } = useLanguage();

    const nav = content.nav;
    const navbar = content.navbar ?? {};

    const desktopLinks = (navbar.items as { id: string; label: string }[] | undefined) ?? [
        { id: "about", label: nav.about },
        { id: "skills", label: nav.skills },
        { id: "experience", label: nav.experience },
        { id: "projects", label: nav.projects },
    ];

    const communityLinks = [
        { id: "leadership", label: navbar.leadership ?? nav.leadership },
        { id: "bookshelf", label: navbar.bookshelf ?? "Bookshelf" },
        { id: "languages", label: navbar.languages ?? "Languages" },
        { id: "community", label: navbar.endorsements ?? "Endorsements" },
        { id: "guestbook", label: navbar.guestbook ?? "Guestbook" },
    ];

    const mobileLinks = [
        { id: "hero", label: nav.home },
        { id: "about", label: nav.about },
        { id: "education", label: nav.education },
        { id: "skills", label: nav.skills },
        { id: "experience", label: nav.experience },
        { id: "projects", label: nav.projects },
        { id: "leadership", label: navbar.leadership ?? nav.leadership },
        { id: "bookshelf", label: navbar.bookshelf ?? "Bookshelf" },
        { id: "languages", label: navbar.languages ?? "Languages" },
        { id: "community", label: navbar.endorsements ?? "Endorsements" },
        { id: "guestbook", label: navbar.guestbook ?? "Guestbook" },
        { id: "contact", label: navbar.contact ?? nav.contact },
    ];

    return (
        <>
            <div className="flex h-[4.5rem] items-center justify-between px-1 sm:px-2 lg:pl-12 lg:pr-4">
                <div className="flex items-center gap-3">
                    <button
                        type="button"
                        onClick={() => setIsAvatarOpen(true)}
                        className="relative h-10 w-10 overflow-hidden rounded-full border border-white/15 bg-zinc-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-300"
                        aria-label="Expand profile photo"
                    >
                        <motion.div layoutId="avatar-image" className="relative h-full w-full">
                            <Image
                                src={prefix(content.hero.avatar)}
                                alt={profile.name}
                                fill
                                className="object-cover"
                                sizes="36px"
                            />
                        </motion.div>
                    </button>
                    <span className="text-sm font-semibold tracking-tight text-zinc-100 sm:text-base">
                        {profile.name}
                    </span>
                </div>

                <nav className="hidden items-center gap-4 text-xs font-medium text-zinc-400 lg:flex xl:gap-5 xl:text-sm">
                    {desktopLinks.map((item) => {
                        if (item.id === "community") return null;

                        return (
                            <a
                                key={item.id}
                                href={`#${item.id}`}
                                className="rounded-sm py-2 transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-300"
                            >
                                {item.label}
                            </a>
                        );
                    })}

                    <NavDropdown label={navbar.community ?? "Community"}>
                        <div className="space-y-1">
                            {communityLinks.map((item) => (
                                <a
                                    key={item.id}
                                    href={`#${item.id}`}
                                    className="block rounded-md px-2 py-1 text-sm text-zinc-100 transition-colors hover:bg-zinc-800/80"
                                >
                                    {item.label}
                                </a>
                            ))}
                        </div>
                    </NavDropdown>
                </nav>

                <div className="flex items-center gap-2">
                    <div className="hidden items-center gap-1.5 lg:flex">
                        <Link
                            href={profile.github}
                            aria-label={content.nav.githubAria}
                            className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 text-zinc-400 transition-colors hover:border-white/20 hover:bg-white/[0.05] hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-300"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <Github className="h-4 w-4" />
                        </Link>
                        <Link
                            href={profile.linkedin}
                            aria-label={content.nav.linkedinAria}
                            className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 text-zinc-400 transition-colors hover:border-white/20 hover:bg-white/[0.05] hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-300"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <Linkedin className="h-4 w-4" />
                        </Link>
                        {profile.strava && (
                            <Link
                                href={profile.strava}
                                aria-label={content.nav.stravaAria}
                                className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 text-zinc-400 transition-colors hover:border-white/20 hover:bg-white/[0.05] hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-300"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <Activity className="h-4 w-4" />
                            </Link>
                        )}
                    </div>
                    <div className="hidden items-center gap-3 lg:flex">
                        <div className="whitespace-nowrap">
                            <LanguageSwitcher />
                        </div>
                        <Link
                            href="#contact"
                            className="inline-flex min-h-10 items-center rounded-lg bg-amber-400 px-4 py-2 text-sm font-semibold text-zinc-950 transition-colors hover:bg-amber-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-200 focus-visible:ring-offset-2 focus-visible:ring-offset-[#090b10] whitespace-nowrap"
                        >
                            {navbar.contact ?? nav.contact}
                        </Link>
                    </div>
                    <button
                        type="button"
                        onClick={() => setMobileOpen((prev) => !prev)}
                        className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 text-zinc-200 transition-colors hover:bg-white/[0.06] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-300 lg:hidden"
                        aria-label="Toggle navigation menu"
                        aria-expanded={mobileOpen}
                        aria-controls="mobile-navigation"
                    >
                        {mobileOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
                    </button>
                </div>
            </div>

            {mobileOpen && (
                <div id="mobile-navigation" className="fixed inset-x-0 top-[4.5rem] z-30 max-h-[calc(100dvh-4.5rem)] overflow-y-auto border-t border-white/10 bg-[#090b10] pb-5 pt-3 shadow-2xl shadow-black/40 lg:hidden">
                    <div className="mx-auto flex max-w-6xl flex-col gap-1 px-5">
                        {mobileLinks.map((item) => (
                            <a
                                key={item.id}
                                href={`#${item.id}`}
                                onClick={() => setMobileOpen(false)}
                                className="min-h-11 rounded-lg px-3 py-2.5 text-sm font-medium text-zinc-300 transition-colors hover:bg-white/[0.05] hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-300"
                            >
                                {item.label}
                            </a>
                        ))}
                        <div className="mt-3 border-t border-white/10 pt-4">
                            <LanguageSwitcher />
                        </div>
                    </div>
                </div>
            )}

            <AvatarModal
                isOpen={isAvatarOpen}
                onClose={() => setIsAvatarOpen(false)}
                src={prefix(content.hero.avatar)}
                alt={profile.name}
            />
        </>
    );
}
