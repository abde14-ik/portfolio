"use client";

import { useLanguage } from "@/context/language-context";

export function Footer() {
  const year = new Date().getFullYear();
  const { content } = useLanguage();

  return (
    <footer className="mt-10 border-t border-slate-800/80 pt-6 text-center text-xs text-slate-500">
      <p>
        © {year} {content.footer.owner}. {content.footer.rights}
      </p>
    </footer>
  );
}
