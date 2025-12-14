export default function Features() {
    return (
        <section id="features" className="py-32 bg-background relative">
            <div className="max-w-5xl mx-auto px-6 sm:px-8 lg:px-12">
                <div className="text-center mb-20">
                    <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
                        <span className="text-primary font-medium text-sm">
                            ✨ Features
                        </span>
                    </div>

                    <h2 className="font-headings text-4xl md:text-5xl lg:text-6xl font-bold text-primary mb-6 max-w-3xl mx-auto leading-tight">
                        Everything your barbershop needs to
                        <span className="text-secondary"> thrive</span>
                    </h2>

                    <p className="font-body text-lg md:text-xl text-foreground-muted max-w-2xl mx-auto leading-relaxed">
                        Built specifically for Kenyan barbershops. No complicated setup, no expensive hardware.
                    </p>
                </div>

                {/* Primary Features - Clear 3-column layout */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">

                    {/* Feature 1: Commission Transparency */}
                    <div className="group">
                        <div className="w-12 h-12 bg-secondary/20 rounded-xl flex items-center justify-center mb-4 border border-secondary/30">
                            <span className="text-2xl">💰</span>
                        </div>

                        <h3 className="font-headings text-xl font-semibold text-primary mb-3">
                            Commission Transparency
                        </h3>

                        <p className="font-body text-base text-foreground-muted leading-relaxed mb-4">
                            Real-time commission tracking with transparent payouts. Build trust with your team.
                        </p>

                        <ul className="space-y-2 text-sm text-foreground-muted">
                            <li className="flex items-start">
                                <span className="w-4 h-4 bg-secondary/20 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                                    <span className="text-secondary text-xs">✓</span>
                                </span>
                                <span>Automated calculations</span>
                            </li>
                            <li className="flex items-start">
                                <span className="w-4 h-4 bg-secondary/20 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                                    <span className="text-secondary text-xs">✓</span>
                                </span>
                                <span>Daily & weekly reports</span>
                            </li>
                            <li className="flex items-start">
                                <span className="w-4 h-4 bg-secondary/20 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                                    <span className="text-secondary text-xs">✓</span>
                                </span>
                                <span>Zero disputes</span>
                            </li>
                        </ul>
                    </div>

                    {/* Feature 2: M-Pesa Integration */}
                    <div className="group">
                        <div className="w-12 h-12 bg-accent/20 rounded-xl flex items-center justify-center mb-4 border border-accent/30">
                            <span className="text-2xl">📱</span>
                        </div>

                        <h3 className="font-headings text-xl font-semibold text-primary mb-3">
                            M-Pesa Integration
                        </h3>

                        <p className="font-body text-base text-foreground-muted leading-relaxed mb-4">
                            Seamless mobile payments with STK Push. Accept the methods customers prefer.
                        </p>

                        <ul className="space-y-2 text-sm text-foreground-muted">
                            <li className="flex items-start">
                                <span className="w-4 h-4 bg-accent/20 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                                    <span className="text-accent text-xs">✓</span>
                                </span>
                                <span>Instant STK Push</span>
                            </li>
                            <li className="flex items-start">
                                <span className="w-4 h-4 bg-accent/20 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                                    <span className="text-accent text-xs">✓</span>
                                </span>
                                <span>Auto receipts</span>
                            </li>
                            <li className="flex items-start">
                                <span className="w-4 h-4 bg-accent/20 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                                    <span className="text-accent text-xs">✓</span>
                                </span>
                                <span>85% cashless rate</span>
                            </li>
                        </ul>
                    </div>

                    {/* Feature 3: Invisible Loyalty */}
                    <div className="group">
                        <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center mb-4 border border-primary/30">
                            <span className="text-2xl">🎯</span>
                        </div>

                        <h3 className="font-headings text-xl font-semibold text-primary mb-3">
                            Invisible Loyalty
                        </h3>

                        <p className="font-body text-base text-foreground-muted leading-relaxed mb-4">
                            Automatic rewards using phone numbers. No apps or cards required.
                        </p>

                        <ul className="space-y-2 text-sm text-foreground-muted">
                            <li className="flex items-start">
                                <span className="w-4 h-4 bg-primary/20 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                                    <span className="text-primary text-xs">✓</span>
                                </span>
                                <span>Phone-based tracking</span>
                            </li>
                            <li className="flex items-start">
                                <span className="w-4 h-4 bg-primary/20 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                                    <span className="text-primary text-xs">✓</span>
                                </span>
                                <span>Auto calculations</span>
                            </li>
                            <li className="flex items-start">
                                <span className="w-4 h-4 bg-primary/20 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                                    <span className="text-primary text-xs">✓</span>
                                </span>
                                <span>35% retention boost</span>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Secondary Features - 2-column layout */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-24">

                    {/* Staff Management */}
                    <div className="bg-gradient-to-br from-secondary/10 to-secondary/5 rounded-2xl p-8 border border-secondary/20">
                        <div className="w-12 h-12 bg-secondary/20 rounded-xl flex items-center justify-center mb-4 border border-secondary/30">
                            <span className="text-2xl">👥</span>
                        </div>

                        <h3 className="font-headings text-xl font-semibold text-primary mb-3">
                            Staff Management
                        </h3>

                        <p className="font-body text-base text-foreground-muted leading-relaxed mb-4">
                            Individual dashboards and transparent earnings for your entire team.
                        </p>

                        <ul className="space-y-2 text-sm text-foreground-muted">
                            <li className="flex items-start">
                                <span className="w-4 h-4 bg-secondary/20 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                                    <span className="text-secondary text-xs">✓</span>
                                </span>
                                <span>Performance tracking</span>
                            </li>
                            <li className="flex items-start">
                                <span className="w-4 h-4 bg-secondary/20 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                                    <span className="text-secondary text-xs">✓</span>
                                </span>
                                <span>Weekly reports</span>
                            </li>
                        </ul>
                    </div>

                    {/* Analytics & Support */}
                    <div className="bg-gradient-to-br from-accent/10 to-accent/5 rounded-2xl p-8 border border-accent/20">
                        <div className="w-12 h-12 bg-accent/20 rounded-xl flex items-center justify-center mb-4 border border-accent/30">
                            <span className="text-2xl">📊</span>
                        </div>

                        <h3 className="font-headings text-xl font-semibold text-primary mb-3">
                            Analytics & Support
                        </h3>

                        <p className="font-body text-base text-foreground-muted leading-relaxed mb-4">
                            Real-time insights with 24/7 local Kenyan support.
                        </p>

                        <ul className="space-y-2 text-sm text-foreground-muted">
                            <li className="flex items-start">
                                <span className="w-4 h-4 bg-accent/20 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                                    <span className="text-accent text-xs">✓</span>
                                </span>
                                <span>Live sales analytics</span>
                            </li>
                            <li className="flex items-start">
                                <span className="w-4 h-4 bg-accent/20 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                                    <span className="text-accent text-xs">✓</span>
                                </span>
                                <span>WhatsApp support</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="bg-gradient-to-r from-primary via-accent to-secondary rounded-2xl p-12 md:p-16 text-center">
                    <h3 className="font-headings text-3xl md:text-4xl font-bold text-white mb-4 max-w-2xl mx-auto">
                        Ready to go digital?
                    </h3>

                    <p className="font-body text-white/90 text-lg mb-8 max-w-xl mx-auto">
                        Join 50+ shops using FolioCuts across Kenya. Start your free trial today.
                    </p>

                    <a
                        href="https://foliocuts-frontend-df8m.vercel.app"
                        target="_blank"
                        className="inline-flex items-center px-8 py-4 bg-white text-primary font-semibold text-base rounded-lg hover:bg-secondary hover:text-primary transition-colors shadow-lg"
                    >
                        <span>Start free trial</span>
                        <span className="ml-2">→</span>
                    </a>

                    <div className="flex items-center justify-center space-x-6 mt-8 pt-8 border-t border-white/20 text-sm text-white/80">
                        <span>✓ 14-day free trial</span>
                        <span>✓ 3-min setup</span>
                        <span>✓ No credit card</span>
                    </div>
                </div>
            </div>
        </section>
    );
}