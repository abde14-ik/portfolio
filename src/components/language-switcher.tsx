"use client";

import { useLanguage } from "@/context/language-context";

export function LanguageSwitcher() {
    const { language, toggleLanguage } = useLanguage();

    return (
        <button
            type="button"
            onClick={toggleLanguage}
            className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-[#121212] px-3 py-1 text-[0.7rem] font-medium text-zinc-300 shadow-sm shadow-black/40 transition-colors hover:border-amber-300 hover:text-amber-300"
            aria-label="Toggle language between English and French"
        >
            <span className={language === "en" ? "font-semibold text-amber-300" : "text-zinc-500"}>EN</span>
            <span className="text-zinc-600">/</span>
            <span className={language === "fr" ? "font-semibold text-amber-300" : "text-zinc-500"}>FR</span>
        </button>
    );
}
