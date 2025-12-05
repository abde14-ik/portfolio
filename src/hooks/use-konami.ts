"use client";

import { useEffect, useRef } from "react";

const KONAMI_SEQUENCE: string[] = [
    "ArrowUp",
    "ArrowUp",
    "ArrowDown",
    "ArrowDown",
    "ArrowLeft",
    "ArrowRight",
    "ArrowLeft",
    "ArrowRight",
    "b",
    "a",
];

export function useKonami(onMatch: () => void) {
    const positionRef = useRef(0);

    useEffect(() => {
        const handleKeyDown = (event: KeyboardEvent) => {
            let key = event.key;

            // Normalize letter keys to lowercase so that 'B'/'b' both work
            if (key.length === 1) {
                key = key.toLowerCase();
            }

            const expected = KONAMI_SEQUENCE[positionRef.current];

            if (key === expected) {
                positionRef.current += 1;

                if (positionRef.current === KONAMI_SEQUENCE.length) {
                    positionRef.current = 0;
                    onMatch();
                }
            } else {
                // If mismatch, reset but allow immediate restart if key matches first element
                if (key === KONAMI_SEQUENCE[0]) {
                    positionRef.current = 1;
                } else {
                    positionRef.current = 0;
                }
            }
        };

        window.addEventListener("keydown", handleKeyDown);
        return () => {
            window.removeEventListener("keydown", handleKeyDown);
        };
    }, [onMatch]);
}
