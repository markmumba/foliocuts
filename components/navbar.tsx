"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const frontendUrlRegister: string = process.env.NEXT_PUBLIC_FRONTEND_URL || "https://foliocuts.blazor-movies.online/register";
const frontendUrlLogin: string = process.env.NEXT_PUBLIC_FRONTEND_URL || "https://foliocuts.blazor-movies.online/login";

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
        <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${isScrolled
            ? 'bg-white border-b border-neutral/20 shadow-sm'
            : 'bg-white/80 backdrop-blur-md'
            }`}>
            <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
                <div className="flex items-center justify-between h-20">

                    <div className="flex items-center">
                        <div className="flex items-center space-x-2">
                            <span className="text-2xl">💈</span>
                            <h1 className="font-headings text-xl font-semibold text-primary">FolioCuts</h1>
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

                    <div className="hidden md:flex items-center space-x-6">
                        <Link href={frontendUrlLogin}  className="font-body text-sm text-foreground-muted hover:text-primary transition-colors">
                            Log in
                        </Link>
                        <Link href={frontendUrlRegister} className="px-5 py-2.5 bg-primary text-white font-medium text-sm rounded-lg hover:bg-primary-light transition-colors">
                            Get started →
                        </Link>
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
                                <Link href={frontendUrlLogin} className="block w-full px-4 py-2 font-body text-foreground-muted hover:text-primary transition-colors text-center">
                                    <span>Log in</span> <span>→</span>
                                </Link>
                                <Link href={frontendUrlRegister} className="block w-full px-4 py-3 bg-primary text-white font-medium rounded-lg hover:bg-primary-light transition-colors text-center">
                                    <span>Get started</span> <span>→</span>
                                </Link>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
}
