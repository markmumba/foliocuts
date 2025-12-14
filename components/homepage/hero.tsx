"use client";

import { useState } from "react";
import VideoModal from "@/components/ui/VideoModal";

export default function Hero() {
    const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);

    // TODO: Replace with your actual video URL when ready
    // Supports YouTube, Vimeo, or direct video URLs
    const videoUrl = ""; // e.g., "https://www.youtube.com/watch?v=YOUR_VIDEO_ID"

    return (
        <section className="relative bg-background overflow-hidden">
            <VideoModal
                isOpen={isVideoModalOpen}
                onClose={() => setIsVideoModalOpen(false)}
                videoUrl={videoUrl}
            />

            {/* Clean, minimal hero with generous whitespace */}
            <div className="max-w-5xl mx-auto px-6 sm:px-8 lg:px-12 pt-32 pb-24">

                <div className="text-center space-y-12">

                    {/* Cleaner badge */}
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                        <div className="inline-flex items-center px-5 py-2 rounded-full bg-primary/10 border border-primary/20">
                            <span className="text-sm mr-2">🇰🇪</span>
                            <span className="text-primary text-sm font-medium">
                                Built for Kenyan Barbershops
                            </span>
                        </div>
                        <div className="inline-flex items-center px-5 py-2 rounded-full bg-accent/10 border border-accent/20 animate-pulse">
                            <span className="text-sm mr-2">⚡</span>
                            <span className="text-accent text-sm font-medium">
                                Limited Q1 2024 Onboarding Spots
                            </span>
                        </div>
                    </div>

                    {/* Bigger, cleaner headline */}
                    <div className="space-y-8 max-w-4xl mx-auto">
                        <h1 className="font-headings text-5xl md:text-7xl lg:text-8xl font-bold leading-[1.1] tracking-tight text-primary">
                            Your barbershop deserves better than paper ledgers
                        </h1>

                        <p className="font-body text-xl md:text-2xl text-foreground-muted leading-relaxed max-w-3xl mx-auto">
                            Intelligent commission tracking, M-Pesa payments, and automatic loyalty rewards.
                            <span className="text-secondary font-semibold"> No apps required.</span>
                        </p>
                    </div>

                    {/* Prominent CTA - Say Briefly style */}
                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
                        <a
                            href="https://foliocuts-frontend-df8m.vercel.app"
                            target="_blank"
                            className="group px-8 py-4 bg-secondary text-primary font-semibold text-base rounded-lg hover:bg-secondary-light transition-all duration-200 flex items-center space-x-2 shadow-lg hover:shadow-xl"
                        >
                            <span>Start free trial</span>
                            <span className="group-hover:translate-x-1 transition-transform">→</span>
                        </a>

                        <button
                            onClick={() => setIsVideoModalOpen(true)}
                            className="group px-8 py-4 border-2 border-primary/20 text-foreground-muted font-medium text-base hover:border-accent hover:text-accent transition-all duration-200 rounded-lg flex items-center space-x-2"
                        >
                            <span>Watch 2-min demo</span>
                            <span className="group-hover:scale-110 transition-transform">▶</span>
                        </button>
                    </div>

                    {/* Trust indicators - minimal */}
                    <div className="pt-8 text-sm text-foreground-muted">
                        <p>✓ Free 14-day trial &nbsp;&nbsp;•&nbsp;&nbsp; ✓ 3-minute setup &nbsp;&nbsp;•&nbsp;&nbsp; ✓ No credit card required</p>
                    </div>

                </div>

            </div>

            {/* Stats section with more breathing room */}
            <div className="bg-gradient-to-r from-secondary/10 via-accent/10 to-primary/10 py-20">
                <div className="max-w-5xl mx-auto px-6 sm:px-8 lg:px-12">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-12 md:gap-16">
                        <div className="text-center">
                            <div className="text-4xl md:text-5xl font-bold text-primary mb-2">50+</div>
                            <div className="text-sm text-foreground-muted">Active shops</div>
                        </div>
                        <div className="text-center">
                            <div className="text-4xl md:text-5xl font-bold text-secondary mb-2">10K+</div>
                            <div className="text-sm text-foreground-muted">Transactions</div>
                        </div>
                        <div className="text-center">
                            <div className="text-4xl md:text-5xl font-bold text-accent mb-2">98%</div>
                            <div className="text-sm text-foreground-muted">Satisfaction</div>
                        </div>
                        <div className="text-center">
                            <div className="text-4xl md:text-5xl font-bold text-primary mb-2">3min</div>
                            <div className="text-sm text-foreground-muted">Setup time</div>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    );
}