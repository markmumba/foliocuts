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
            ? 'bg-white/95  border-neutral '
            : 'bg-primary/10  border-white/20 '
            }`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">

                    {/* Logo */}
                    <div className="flex items-center">
                        <div className="flex items-center space-x-3">
                            <div className={`w-10 h-10 rounded-lg flex items-center justify-center border transition-all duration-300 ${isScrolled
                                ? 'bg-secondary border-secondary/20'
                                : 'bg-secondary/20 backdrop-blur-sm border-white/20'
                                }`}>
                                <span className="text-secondary font-bold text-xl">💈</span>
                            </div>
                            <div>
                                <h1 className={`font-headings text-xl font-bold transition-all duration-300 ${isScrolled ? 'text-primary' : 'text-white drop-shadow-sm'
                                    }`}>FolioCuts</h1>
                                <p className={`text-xs transition-all duration-300 ${isScrolled ? 'text-foreground-muted' : 'text-white/70'
                                    }`}>Digital Barbershop Platform</p>
                            </div>
                        </div>
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden md:block">
                        <div className="flex items-center space-x-8">
                            <a
                                href="#features"
                                className={`font-body transition-all duration-300 cursor-pointer ${isScrolled
                                    ? 'text-foreground-muted hover:text-primary'
                                    : 'text-white/80 hover:text-white hover:drop-shadow-sm'
                                    }`}
                            >
                                For Barbers
                            </a>
                            <a
                                href="#pricing"
                                className={`font-body transition-all duration-300 cursor-pointer ${isScrolled
                                    ? 'text-foreground-muted hover:text-primary'
                                    : 'text-white/80 hover:text-white hover:drop-shadow-sm'
                                    }`}
                            >
                                For Shop Owners
                            </a>
                            <a
                                href="#how-it-works"
                                className={`font-body transition-all duration-300 cursor-pointer ${isScrolled
                                    ? 'text-foreground-muted hover:text-primary'
                                    : 'text-white/80 hover:text-white hover:drop-shadow-sm'
                                    }`}
                            >
                                How It Works
                            </a>
                            <a
                                href="#testimonials"
                                className={`font-body transition-all duration-300 cursor-pointer ${isScrolled
                                    ? 'text-foreground-muted hover:text-primary'
                                    : 'text-white/80 hover:text-white hover:drop-shadow-sm'
                                    }`}
                            >
                                Success Stories
                            </a>
                            <a
                                href="#pricing"
                                className={`font-body transition-all duration-300 cursor-pointer ${isScrolled
                                    ? 'text-foreground-muted hover:text-primary'
                                    : 'text-white/80 hover:text-white hover:drop-shadow-sm'
                                    }`}
                            >
                                Pricing
                            </a>
                        </div>
                    </div>

                    {/* Desktop CTA Buttons */}
                    <div className="hidden md:flex items-center space-x-4">
                        <button className={`font-body transition-all duration-300 ${isScrolled
                            ? 'text-foreground-muted hover:text-primary'
                            : 'text-white/80 hover:text-white hover:drop-shadow-sm'
                            }`}>
                            Log In
                        </button>
                        <button className={`px-6 py-2 font-semibold rounded-full transition-all duration-300 border shadow-lg hover:shadow-xl ${isScrolled
                            ? 'bg-primary text-white hover:bg-primary-light border-primary'
                            : 'bg-white/20 backdrop-blur-sm text-white hover:bg-white/30 border-white/20'
                            }`}>
                            Get Started
                        </button>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden">
                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className={`p-2 rounded-lg transition-all duration-300 border ${isScrolled
                                ? 'text-foreground-muted hover:text-primary hover:bg-neutral border-neutral'
                                : 'text-white/80 hover:text-white hover:bg-white/20 backdrop-blur-sm border-white/20'
                                }`}
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

                {/* Mobile Menu */}
                {isMenuOpen && (
                    <div className={`md:hidden border-t transition-all duration-300 ${isScrolled
                        ? 'border-neutral bg-white/95 backdrop-blur-sm'
                        : 'border-white/20 bg-white/10 backdrop-blur-md'
                        }`}>
                        <div className="px-2 pt-2 pb-3 space-y-1">
                            <a
                                href="#features"
                                className={`block px-3 py-2 font-body rounded-lg transition-all duration-300 ${isScrolled
                                    ? 'text-foreground-muted hover:text-primary hover:bg-neutral'
                                    : 'text-white/80 hover:text-white hover:bg-white/20 backdrop-blur-sm'
                                    }`}
                                onClick={() => setIsMenuOpen(false)}
                            >
                                For Barbers
                            </a>
                            <a
                                href="#pricing"
                                className={`block px-3 py-2 font-body rounded-lg transition-all duration-300 ${isScrolled
                                    ? 'text-foreground-muted hover:text-primary hover:bg-neutral'
                                    : 'text-white/80 hover:text-white hover:bg-white/20 backdrop-blur-sm'
                                    }`}
                                onClick={() => setIsMenuOpen(false)}
                            >
                                For Shop Owners
                            </a>
                            <a
                                href="#how-it-works"
                                className={`block px-3 py-2 font-body rounded-lg transition-all duration-300 ${isScrolled
                                    ? 'text-foreground-muted hover:text-primary hover:bg-neutral'
                                    : 'text-white/80 hover:text-white hover:bg-white/20 backdrop-blur-sm'
                                    }`}
                                onClick={() => setIsMenuOpen(false)}
                            >
                                How It Works
                            </a>
                            <a
                                href="#testimonials"
                                className={`block px-3 py-2 font-body rounded-lg transition-all duration-300 ${isScrolled
                                    ? 'text-foreground-muted hover:text-primary hover:bg-neutral'
                                    : 'text-white/80 hover:text-white hover:bg-white/20 backdrop-blur-sm'
                                    }`}
                                onClick={() => setIsMenuOpen(false)}
                            >
                                Success Stories
                            </a>
                            <a
                                href="#pricing"
                                className={`block px-3 py-2 font-body rounded-lg transition-all duration-300 ${isScrolled
                                    ? 'text-foreground-muted hover:text-primary hover:bg-neutral'
                                    : 'text-white/80 hover:text-white hover:bg-white/20 backdrop-blur-sm'
                                    }`}
                                onClick={() => setIsMenuOpen(false)}
                            >
                                Pricing
                            </a>

                            {/* Mobile CTA Buttons */}
                            <div className="pt-4 space-y-2">
                                <button className={`w-full px-4 py-2 font-body transition-all duration-300 text-left ${isScrolled
                                    ? 'text-foreground-muted hover:text-primary'
                                    : 'text-white/80 hover:text-white'
                                    }`}>
                                    Log In
                                </button>
                                <button className={`w-full px-4 py-2 font-semibold rounded-full transition-all duration-300 border shadow-lg ${isScrolled
                                    ? 'bg-primary text-white hover:bg-primary-light border-primary'
                                    : 'bg-white/20 backdrop-blur-sm text-white hover:bg-white/30 border-white/20'
                                    }`}>
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
