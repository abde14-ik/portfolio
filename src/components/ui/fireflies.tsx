"use client";

import { useEffect, useState, type CSSProperties } from "react";

type Particle = {
    id: number;
    style: CSSProperties;
};

type FirefliesProps = {
    count?: number;
};

const DEFAULT_COUNT = 18;

export function Fireflies({ count = DEFAULT_COUNT }: FirefliesProps) {
    const [particles, setParticles] = useState<Particle[]>([]);

    useEffect(() => {
        const rand = (min: number, max: number) => Math.random() * (max - min) + min;

        const makeParticle = (id: number): Particle => {
            const x = `${rand(0, 100).toFixed(2)}vw`;
            const y = `${rand(0, 100).toFixed(2)}vh`;
            const duration = `${rand(10, 20).toFixed(1)}s`;
            const delay = `${rand(0, 8).toFixed(2)}s`;
            const scale = rand(0.5, 1.5).toFixed(2);
            const moveX = `${rand(-120, 120).toFixed(0)}px`;

            return {
                id,
                style: {
                    "--x": x,
                    "--y": y,
                    "--duration": duration,
                    "--delay": delay,
                    "--scale": scale,
                    "--move-x": moveX,
                } as CSSProperties,
            };
        };

        setParticles(Array.from({ length: count }, (_, index) => makeParticle(index)));
    }, [count]);

    return (
        <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
            {particles.map((particle) => (
                <span
                    key={particle.id}
                    className="firefly absolute h-1.5 w-1.5 rounded-full bg-[#C5A059] opacity-0 shadow-[0_0_10px_#C5A059]"
                    style={particle.style}
                />
            ))}
        </div>
    );
}
