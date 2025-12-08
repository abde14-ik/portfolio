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
                sans: ["var(--font-body)", "system-ui", "sans-serif"],
                serif: ["var(--font-heading)", "serif"],
                mono: ["var(--font-fira-code)", "monospace"],
            },
            colors: {
                espresso: "#231709",
                leather: "#3C2A20",
                parchment: "#D6C6B0",
                gold: "#C5A059",
                midnight: "#231709",
                royal: "#3C2A20",
                royalDark: "#261A11",
            },
        },
    },
    plugins: [],
};

export default config;
