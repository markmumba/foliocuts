"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const frontendUrlRegister: string = process.env.NEXT_PUBLIC_FRONTEND_URL || "https://foliocuts.blazor-movies.online/register";

interface ExitIntentPopupProps {
    onClose: () => void;
    isOpen: boolean;
}

export default function ExitIntentPopup({ onClose, isOpen }: ExitIntentPopupProps) {
    useEffect(() => {
        if (!isOpen) return;

        // Prevent body scroll when popup is open
        document.body.style.overflow = "hidden";
        return () => {
            document.body.style.overflow = "unset";
        };
    }, [isOpen]);

    useEffect(() => {
        if (!isOpen) return;

        const handleEscape = (e: KeyboardEvent) => {
            if (e.key === "Escape") {
                onClose();
            }
        };
        window.addEventListener("keydown", handleEscape);
        return () => window.removeEventListener("keydown", handleEscape);
    }, [isOpen, onClose]);

    if (!isOpen) return null;

    return (
        <div
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in-0"
            onClick={onClose}
        >
            <div
                className="relative w-full max-w-md bg-background rounded-2xl shadow-2xl overflow-hidden animate-in zoom-in-95"
                onClick={(e) => e.stopPropagation()}
            >
                {/* Close button */}
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 z-10 w-8 h-8 flex items-center justify-center rounded-full bg-neutral/50 hover:bg-neutral text-foreground-muted hover:text-primary transition-colors"
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

                {/* Content */}
                <div className="p-8">
                    <div className="text-center mb-6">
                        <div className="w-16 h-16 bg-gradient-to-br from-secondary to-accent rounded-full flex items-center justify-center mx-auto mb-4">
                            <span className="text-3xl">🎁</span>
                        </div>
                        <h3 className="font-headings text-2xl font-bold text-primary mb-2">
                            Wait! Don't Miss Out
                        </h3>
                        <p className="font-body text-foreground-muted">
                            Get <strong className="text-accent">20% off</strong> your first month when you start your free trial today
                        </p>
                    </div>

                    <div className="space-y-4 mb-6">
                        <div className="flex items-start gap-3">
                            <div className="w-5 h-5 bg-secondary/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                                <span className="text-secondary text-xs">✓</span>
                            </div>
                            <p className="font-body text-sm text-foreground-muted">
                                <strong className="text-primary">14-day free trial</strong> - No credit card required
                            </p>
                        </div>
                        <div className="flex items-start gap-3">
                            <div className="w-5 h-5 bg-accent/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                                <span className="text-accent text-xs">✓</span>
                            </div>
                            <p className="font-body text-sm text-foreground-muted">
                                <strong className="text-primary">3-minute setup</strong> - Get started immediately
                            </p>
                        </div>
                        <div className="flex items-start gap-3">
                            <div className="w-5 h-5 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                                <span className="text-primary text-xs">✓</span>
                            </div>
                            <p className="font-body text-sm text-foreground-muted">
                                <strong className="text-primary">Cancel anytime</strong> - No long-term contracts
                            </p>
                        </div>
                    </div>

                    <div className="space-y-3">
                        <Link
                            href={frontendUrlRegister}
                            onClick={onClose}
                            className="block w-full px-6 py-3 bg-secondary text-primary font-semibold rounded-lg hover:bg-secondary-light transition-colors text-center"
                        >
                            Claim 20% Off Now
                        </Link>
                        <button
                            onClick={onClose}
                            className="block w-full px-6 py-3 text-foreground-muted hover:text-primary transition-colors text-sm"
                        >
                            No thanks, I'll pass
                        </button>
                    </div>

                    <p className="text-xs text-center text-foreground-muted mt-4">
                        Limited time offer. Valid for new customers only.
                    </p>
                </div>
            </div>
        </div>
    );
}

