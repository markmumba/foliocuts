"use client";

import { useState, useEffect } from "react";

export default function StickyCTA() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            // Show after scrolling 300px
            setIsVisible(window.scrollY > 300);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    if (!isVisible) return null;

    return (
        <div className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-50 animate-in slide-in-from-bottom-4">
            <div className="bg-background border-2 border-secondary/30 rounded-full px-6 py-3 shadow-2xl flex items-center gap-4 backdrop-blur-sm">
                <a
                    href="https://foliocuts-frontend-df8m.vercel.app"
                    target="_blank"
                    className="px-6 py-2.5 bg-secondary text-primary font-semibold rounded-full hover:bg-secondary-light transition-colors whitespace-nowrap flex items-center gap-2"
                >
                    <span>Start Free Trial</span>
                    <span>→</span>
                </a>
                <button
                    onClick={() => setIsVisible(false)}
                    className="text-foreground-muted hover:text-primary transition-colors p-1"
                    aria-label="Close"
                >
                    <svg
                        className="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M6 18L18 6M6 6l12 12"
                        />
                    </svg>
                </button>
            </div>
        </div>
    );
}

