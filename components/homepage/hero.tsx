import Image from "next/image";

export default function Hero() {
    return (
        <section className="relative bg-background overflow-hidden min-h-screen flex items-center">

            {/* Decorative SVG Elements */}
            <div className="absolute inset-0 pointer-events-none">
                {/* Scissors - Top Left */}
                <div className="absolute top-20 left-10 opacity-10">
                    <svg width="60" height="60" viewBox="0 0 24 24" fill="none" className="text-secondary">
                        <path d="M9.64 7.64c.23-.5.36-1.05.36-1.64 0-2.21-1.79-4-4-4S2 3.79 2 6s1.79 4 4 4c.59 0 1.14-.13 1.64-.36L10 12l-2.36 2.36C7.14 14.13 6.59 14 6 14c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4c0-.59-.13-1.14-.36-1.64L12 14l7 7h3v-1L9.64 7.64zM6 8c-1.1 0-2-.89-2-2s.89-2 2-2 2 .89 2 2-.89 2-2 2zm0 12c-1.1 0-2-.89-2-2s.89-2 2-2 2 .89 2 2-.89 2-2 2zm6-7.5c-.28 0-.5-.22-.5-.5s.22-.5.5-.5.5.22.5.5-.22.5-.5.5zM19 3l-6 6 2 2 7-7V3h-3z" fill="currentColor" />
                    </svg>
                </div>

                {/* Comb - Top Right */}
                <div className="absolute top-32 right-16 opacity-10 rotate-45">
                    <svg width="50" height="50" viewBox="0 0 24 24" fill="none" className="text-accent">
                        <path d="M3 2v2h2v16h2V4h2v16h2V4h2v16h2V4h2v16h2V4h2V2H3z" fill="currentColor" />
                    </svg>
                </div>

                {/* Razor - Bottom Left */}
                <div className="absolute bottom-32 left-20 opacity-10 -rotate-12">
                    <svg width="55" height="55" viewBox="0 0 24 24" fill="none" className="text-primary">
                        <path d="M22 6h-4l-2-2H8L6 6H2v2h2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V8h2V6zM8 18H6v-2h2v2zm0-4H6v-2h2v2zm0-4H6V8h2v2zm4 8h-2v-2h2v2zm0-4h-2v-2h2v2zm0-4h-2V8h2v2zm4 8h-2v-2h2v2zm0-4h-2v-2h2v2zm0-4h-2V8h2v2z" fill="currentColor" />
                    </svg>
                </div>

                {/* Hair Clipper - Bottom Right */}
                <div className="absolute bottom-20 right-12 opacity-10 rotate-12">
                    <svg width="65" height="65" viewBox="0 0 24 24" fill="none" className="text-secondary">
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.94-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v-.07zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" fill="currentColor" />
                    </svg>
                </div>

                {/* Small Scissors - Middle Left */}
                <div className="absolute top-1/2 left-4 opacity-5 rotate-45">
                    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" className="text-accent">
                        <path d="M9.64 7.64c.23-.5.36-1.05.36-1.64 0-2.21-1.79-4-4-4S2 3.79 2 6s1.79 4 4 4c.59 0 1.14-.13 1.64-.36L10 12l-2.36 2.36C7.14 14.13 6.59 14 6 14c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4c0-.59-.13-1.14-.36-1.64L12 14l7 7h3v-1L9.64 7.64z" fill="currentColor" />
                    </svg>
                </div>

                {/* Small Comb - Middle Right */}
                <div className="absolute top-1/3 right-6 opacity-5 -rotate-12">
                    <svg width="35" height="35" viewBox="0 0 24 24" fill="none" className="text-primary">
                        <path d="M3 2v2h2v16h2V4h2v16h2V4h2v16h2V4h2v16h2V4h2V2H3z" fill="currentColor" />
                    </svg>
                </div>
            </div>

            <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-52">

                <div className="text-center space-y-16">

                    <div className="inline-flex items-center px-4 py-2 rounded-full bg-accent/10 border border-accent/20">
                        <span className="text-secondary text-xs mr-2">🇰🇪</span>
                        <span className="text-foreground-muted text-xs font-medium">
                            Built for
                        </span>
                        <span className="text-accent text-xs font-semibold ml-1">
                            Kenyan Barbershops
                        </span>
                    </div>

                    <div className="space-y-4 max-w-4xl mx-auto">
                        <h1 className="font-headings text-5xl md:text-6xl lg:text-7xl font-black text-foreground leading-[1.1] tracking-tight">
                            <span className="inline-flex items-center">
                                Stop Manual
                                <span className="inline-flex items-center mx-3">
                                    <span className="text-4xl md:text-5xl lg:text-6xl">📝</span>
                                </span>
                                Start
                            </span>
                            <br />
                            <span className="inline-flex items-center">
                                Digital
                                <span className="inline-flex items-center mx-3">
                                    <span className="text-4xl md:text-5xl lg:text-6xl">💈</span>
                                </span>
                                <span className="italic font-light">Today</span>
                            </span>
                        </h1>
                    </div>

                    <p className="font-body text-lg md:text-xl text-foreground-muted leading-relaxed max-w-2xl mx-auto">
                        Replace paper ledgers with intelligent commission tracking, M-Pesa integration,
                        and invisible loyalty programs that keep customers coming back.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                        <button className="px-8 py-4 bg-secondary text-primary font-bold text-base rounded-full hover:bg-secondary-light transition-all duration-300 flex items-center space-x-2 shadow-lg">
                            <span>Start Free Trial</span>
                            <span className="text-lg">→</span>
                        </button>

                        <button className="px-8 py-4 border-2 border-primary text-primary font-semibold text-base rounded-full hover:bg-primary hover:text-white transition-all duration-300">
                            Watch Demo
                        </button>
                    </div>

                </div>

                <div className="mt-32 mb-16">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-12 md:gap-16 max-w-5xl mx-auto">
                        <div className="text-center">
                            <div className="text-4xl md:text-5xl lg:text-6xl font-black text-secondary mb-3">50+</div>
                            <div className="text-sm md:text-base text-foreground-muted font-medium leading-tight">Active Barbershops</div>
                        </div>
                        <div className="text-center">
                            <div className="text-4xl md:text-5xl lg:text-6xl font-black text-accent mb-3">10K+</div>
                            <div className="text-sm md:text-base text-foreground-muted font-medium leading-tight">M-Pesa Transactions</div>
                        </div>
                        <div className="text-center">
                            <div className="text-4xl md:text-5xl lg:text-6xl font-black text-secondary mb-3">98%</div>
                            <div className="text-sm md:text-base text-foreground-muted font-medium leading-tight">Staff Satisfaction Rate</div>
                        </div>
                        <div className="text-center">
                            <div className="text-4xl md:text-5xl lg:text-6xl font-black text-accent mb-3">3min</div>
                            <div className="text-sm md:text-base text-foreground-muted font-medium leading-tight">Average Setup Time</div>
                        </div>
                    </div>
                </div>


            </div>

        </section>
    );
}