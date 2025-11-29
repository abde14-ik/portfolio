import type { Config } from "tailwindcss";

const config: Config = {
    darkMode: "class",
    content: [
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                sans: ["var(--font-figtree)", "system-ui", "sans-serif"],
                mono: ["var(--font-fira-code)", "monospace"],
            },
            colors: {
                midnight: "#0b0c15", // deep blue background
                royal: "#7c3aed", // primary violet accent
                royalDark: "#4f46e5", // deeper indigo accent
                gold: "#fbbf24", // golden highlight (amber-400)
            },
        },
    },
    plugins: [],
};

export default config;
