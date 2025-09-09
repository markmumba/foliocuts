"use client";

import { useState, useEffect } from "react";

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY;
            setIsScrolled(scrollTop > 800);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
            ? 'bg-white/95 backdrop-blur-sm border-b border-neutral shadow-sm'
            : 'bg-white/90 backdrop-blur-sm border-b border-neutral/20 shadow-sm'
            }`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">

                    <div className="flex items-center">
                        <div className="flex items-center space-x-3">
                            <div className="w-10 h-10 bg-secondary rounded-lg flex items-center justify-center border border-secondary/20">
                                <span className="text-primary font-bold text-xl">💈</span>
                            </div>
                            <div>
                                <h1 className="font-headings text-xl font-bold text-primary">FolioCuts</h1>
                                <p className="text-xs text-foreground-muted">Digital Barbershop Platform</p>
                            </div>
                        </div>
                    </div>

                    <div className="hidden md:block">
                        <div className="flex items-center space-x-8">
                            <a
                                href="#features"
                                className="font-body text-foreground-muted hover:text-primary transition-all duration-300 cursor-pointer"
                            >
                                For Barbers
                            </a>
                            <a
                                href="#features"
                                className="font-body text-foreground-muted hover:text-primary transition-all duration-300 cursor-pointer"
                            >
                                For Shop Owners
                            </a>
                            <a
                                href="#how-it-works"
                                className="font-body text-foreground-muted hover:text-primary transition-all duration-300 cursor-pointer"
                            >
                                How It Works
                            </a>
                            <a
                                href="#testimonials"
                                className="font-body text-foreground-muted hover:text-primary transition-all duration-300 cursor-pointer"
                            >
                                Success Stories
                            </a>
                            <a
                                href="#pricing"
                                className="font-body text-foreground-muted hover:text-primary transition-all duration-300 cursor-pointer"
                            >
                                Pricing
                            </a>
                        </div>
                    </div>

                    <div className="hidden md:flex items-center space-x-4">
                        <button className="font-body text-foreground-muted hover:text-primary transition-all duration-300">
                            Log In
                        </button>
                        <button className="px-6 py-2 bg-secondary text-primary font-semibold rounded-full hover:bg-secondary-light transition-all duration-300 border border-secondary shadow-lg hover:shadow-xl">
                            Get Started
                        </button>
                    </div>

                    <div className="md:hidden">
                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="p-2 rounded-lg text-foreground-muted hover:text-primary hover:bg-neutral transition-all duration-300 border border-neutral"
                        >
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                {isMenuOpen ? (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                ) : (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                                )}
                            </svg>
                        </button>
                    </div>
                </div>

                {isMenuOpen && (
                    <div className="md:hidden border-t border-neutral bg-white/95 backdrop-blur-sm">
                        <div className="px-2 pt-2 pb-3 space-y-1">
                            <a
                                href="#features"
                                className="block px-3 py-2 font-body text-foreground-muted hover:text-primary hover:bg-neutral rounded-lg transition-all duration-300"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                For Barbers
                            </a>
                            <a
                                href="#features"
                                className="block px-3 py-2 font-body text-foreground-muted hover:text-primary hover:bg-neutral rounded-lg transition-all duration-300"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                For Shop Owners
                            </a>
                            <a
                                href="#how-it-works"
                                className="block px-3 py-2 font-body text-foreground-muted hover:text-primary hover:bg-neutral rounded-lg transition-all duration-300"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                How It Works
                            </a>
                            <a
                                href="#testimonials"
                                className="block px-3 py-2 font-body text-foreground-muted hover:text-primary hover:bg-neutral rounded-lg transition-all duration-300"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                Success Stories
                            </a>
                            <a
                                href="#pricing"
                                className="block px-3 py-2 font-body text-foreground-muted hover:text-primary hover:bg-neutral rounded-lg transition-all duration-300"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                Pricing
                            </a>

                            <div className="pt-4 space-y-2">
                                <button className="w-full px-4 py-2 font-body text-foreground-muted hover:text-primary transition-all duration-300 text-left">
                                    Log In
                                </button>
                                <button className="w-full px-4 py-2 bg-secondary text-primary font-semibold rounded-full hover:bg-secondary-light transition-all duration-300 border border-secondary shadow-lg">
                                    Get Started
                                </button>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
}
