"use client";

import { motion, useScroll } from "framer-motion";

export function ScrollProgress() {
    const { scrollYProgress } = useScroll();

    return (
        <motion.div
            aria-hidden="true"
            style={{ scaleX: scrollYProgress }}
            className="pointer-events-none fixed inset-x-0 top-0 z-50 h-0.5 origin-left bg-amber-400"
        />
    );
}
