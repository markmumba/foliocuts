import Image from "next/image";

export default function Hero() {
    return (
        <section className="relative bg-white overflow-hidden">

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-32">

                {/* Centered Content */}
                <div className="text-center space-y-10 pt-12 pb-16">

                    {/* Brand Badge */}
                    <div className="inline-flex items-center px-4 py-2 rounded-full bg-neutral border border-neutral">
                        <span className="text-secondary font-medium text-xs mr-2">🚀</span>
                        <span className="text-foreground font-medium text-xs tracking-wide">
                            KENYA'S FIRST DIGITAL BARBERSHOP PLATFORM
                        </span>
                    </div>

                    {/* Main Headline */}
                    <div className="space-y-6 max-w-5xl mx-auto">
                        <div className="space-y-4">
                            <h1 className="font-headings text-4xl md:text-5xl lg:text-6xl font-black text-foreground leading-[1.1] tracking-tight">
                                <span className="block">Transform Your Barbershop with</span>
                                <span className="block text-secondary">Intelligent Digital Operations</span>
                            </h1>
                        </div>

                        <p className="font-body text-lg text-foreground-muted leading-relaxed max-w-2xl mx-auto">
                            Replace manual bookkeeping with smart automation. Track performance,
                            boost staff satisfaction, and grow your business effortlessly.
                        </p>
                    </div>

                    {/* CTA Buttons */}
                    <div className="space-y-4">
                        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                            <button className="px-8 py-4 bg-secondary text-primary font-bold text-base rounded-xl hover:bg-secondary-light transition-all duration-300 hover:scale-105 shadow-2xl border-2 border-secondary hover:border-secondary-light">
                                <span className="flex items-center justify-center space-x-2">
                                    <span>Start Free Trial</span>
                                    <span className="text-lg">→</span>
                                </span>
                            </button>

                            <button className="px-8 py-4 border-2 border-neutral text-foreground font-bold text-base rounded-xl hover:bg-neutral transition-all duration-300">
                                <span className="flex items-center justify-center space-x-2">
                                    <span className="text-lg">▶</span>
                                    <span>Watch Demo</span>
                                </span>
                            </button>
                        </div>

                        <p className="text-foreground-muted text-xs font-medium">
                            ✨ <strong>3-minute setup</strong> • <strong>No credit card required</strong> • <strong>24/7 support</strong>
                        </p>
                    </div>

                </div>

                {/* Hero Image - Positioned to overlap with next section */}
                <div className="relative -mb-32 z-20">
                    <div className="max-w-5xl mx-auto">
                        <div className="relative rounded-3xl overflow-hidden shadow-2xl transform hover:scale-[1.02] transition-transform duration-500">
                            {/* Image Container */}
                            <div className="relative h-[400px] md:h-[500px] lg:h-[600px]">
                                <Image
                                    src="/barber.jpg"
                                    alt="Professional barbershop team at work"
                                    fill
                                    className="object-cover object-center"
                                    priority
                                    quality={100}
                                />

                            </div>

                        </div>
                    </div>
                </div>
            </div>

        </section>
    );
}