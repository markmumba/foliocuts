"use client";

import { useState, useEffect } from "react";

interface VideoModalProps {
    isOpen: boolean;
    onClose: () => void;
    videoUrl?: string; // YouTube, Vimeo, or direct video URL
}

export default function VideoModal({ isOpen, onClose, videoUrl }: VideoModalProps) {
    useEffect(() => {
        // Prevent body scroll when modal is open
        if (isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }
        return () => {
            document.body.style.overflow = "unset";
        };
    }, [isOpen]);

    if (!isOpen) return null;

    // Handle escape key
    useEffect(() => {
        const handleEscape = (e: KeyboardEvent) => {
            if (e.key === "Escape") {
                onClose();
            }
        };
        window.addEventListener("keydown", handleEscape);
        return () => window.removeEventListener("keydown", handleEscape);
    }, [onClose]);

    // Convert YouTube URL to embed format if needed
    const getEmbedUrl = (url?: string) => {
        if (!url) return null;

        // YouTube URL patterns
        if (url.includes("youtube.com/watch")) {
            const videoId = url.split("v=")[1]?.split("&")[0];
            return `https://www.youtube.com/embed/${videoId}`;
        }
        if (url.includes("youtu.be/")) {
            const videoId = url.split("youtu.be/")[1]?.split("?")[0];
            return `https://www.youtube.com/embed/${videoId}`;
        }
        if (url.includes("youtube.com/embed")) {
            return url;
        }

        // Vimeo URL patterns
        if (url.includes("vimeo.com/")) {
            const videoId = url.split("vimeo.com/")[1]?.split("?")[0];
            return `https://player.vimeo.com/video/${videoId}`;
        }

        // Direct video URL or other formats
        return url;
    };

    const embedUrl = getEmbedUrl(videoUrl);

    return (
        <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in-0"
            onClick={onClose}
        >
            <div
                className="relative w-full max-w-4xl bg-background rounded-2xl shadow-2xl overflow-hidden animate-in zoom-in-95"
                onClick={(e) => e.stopPropagation()}
            >
                {/* Close button */}
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 z-10 w-10 h-10 flex items-center justify-center rounded-full bg-black/50 hover:bg-black/70 text-white transition-colors"
                    aria-label="Close video"
                >
                    <svg
                        className="w-6 h-6"
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

                {/* Video content */}
                <div className="relative w-full" style={{ paddingBottom: "56.25%" }}>
                    {videoUrl && embedUrl ? (
                        <iframe
                            src={embedUrl}
                            className="absolute top-0 left-0 w-full h-full"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                            title="FolioCuts Demo Video"
                        />
                    ) : (
                        // Placeholder when no video URL is provided
                        <div className="absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-br from-primary/10 via-accent/10 to-secondary/10 p-8">
                            <div className="w-20 h-20 bg-primary/20 rounded-full flex items-center justify-center mb-6">
                                <svg
                                    className="w-12 h-12 text-primary"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
                                    />
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                                    />
                                </svg>
                            </div>
                            <h3 className="font-headings text-2xl font-bold text-primary mb-3">
                                Demo Video Coming Soon
                            </h3>
                            <p className="font-body text-foreground-muted text-center max-w-md mb-6">
                                We're putting the finishing touches on our demo video.
                                In the meantime, start your free trial to see FolioCuts in action!
                            </p>
                            <a
                                href="https://foliocuts-frontend-df8m.vercel.app"
                                target="_blank"
                                className="px-6 py-3 bg-secondary text-primary font-semibold rounded-lg hover:bg-secondary-light transition-colors"
                            >
                                Start Free Trial Instead
                            </a>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

