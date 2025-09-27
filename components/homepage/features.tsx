export default function Features() {
    return (
        <section id="features" className="pt-40 pb-20 bg-neutral relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <div className="inline-flex items-center px-4 py-2 rounded-full bg-accent/10 border border-accent/20 mb-6">
                        <span className="text-accent font-medium text-sm">
                            ✨ Features That Drive Results
                        </span>
                    </div>

                    <h2 className="font-headings text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-6">
                        Everything Your Barbershop
                        <span className="text-secondary"> Needs</span>
                    </h2>

                    <p className="font-body text-xl text-foreground-muted max-w-3xl mx-auto leading-relaxed">
                        Replace manual bookkeeping with intelligent automation. Track performance,
                        delight customers, and grow your business with features built specifically
                        for Kenyan barbershops.
                    </p>
                </div>

                {/* Primary Features - Clear 3-column layout */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">

                    {/* Feature 1: Commission Transparency */}
                    <div className="bg-background rounded-2xl p-8 shadow-sm hover:shadow-lg transition-all duration-300 border border-neutral/20">
                        <div className="w-16 h-16 bg-secondary/10 rounded-2xl flex items-center justify-center mb-6">
                            <span className="text-3xl">💰</span>
                        </div>

                        <h3 className="font-headings text-2xl font-bold text-primary mb-4">
                            Commission Transparency
                        </h3>

                        <p className="font-body text-foreground-muted leading-relaxed mb-6">
                            Automated commission calculation per staff member. Real-time tracking and transparent payouts that build trust with your team.
                        </p>

                        <div className="space-y-3">
                            <div className="flex items-center text-sm">
                                <div className="w-5 h-5 bg-accent/10 rounded-full flex items-center justify-center mr-3">
                                    <span className="text-accent text-xs">✓</span>
                                </div>
                                <span className="text-foreground-muted">Real-time commission tracking</span>
                            </div>
                            <div className="flex items-center text-sm">
                                <div className="w-5 h-5 bg-accent/10 rounded-full flex items-center justify-center mr-3">
                                    <span className="text-accent text-xs">✓</span>
                                </div>
                                <span className="text-foreground-muted">Daily & weekly reports</span>
                            </div>
                            <div className="flex items-center text-sm">
                                <div className="w-5 h-5 bg-accent/10 rounded-full flex items-center justify-center mr-3">
                                    <span className="text-accent text-xs">✓</span>
                                </div>
                                <span className="text-foreground-muted">Zero payment disputes</span>
                            </div>
                        </div>
                    </div>

                    {/* Feature 2: M-Pesa Integration */}
                    <div className="bg-background rounded-2xl p-8 shadow-sm hover:shadow-lg transition-all duration-300 border border-neutral/20">
                        <div className="w-16 h-16 bg-accent/10 rounded-2xl flex items-center justify-center mb-6">
                            <span className="text-3xl">📱</span>
                        </div>

                        <h3 className="font-headings text-2xl font-bold text-primary mb-4">
                            M-Pesa Integration
                        </h3>

                        <p className="font-body text-foreground-muted leading-relaxed mb-6">
                            Seamless mobile money payments with STK Push. Accept the payment methods your customers prefer.
                        </p>

                        <div className="space-y-3">
                            <div className="flex items-center text-sm">
                                <div className="w-5 h-5 bg-accent/10 rounded-full flex items-center justify-center mr-3">
                                    <span className="text-accent text-xs">✓</span>
                                </div>
                                <span className="text-foreground-muted">Instant STK Push payments</span>
                            </div>
                            <div className="flex items-center text-sm">
                                <div className="w-5 h-5 bg-accent/10 rounded-full flex items-center justify-center mr-3">
                                    <span className="text-accent text-xs">✓</span>
                                </div>
                                <span className="text-foreground-muted">Automatic receipt generation</span>
                            </div>
                            <div className="flex items-center text-sm">
                                <div className="w-5 h-5 bg-accent/10 rounded-full flex items-center justify-center mr-3">
                                    <span className="text-accent text-xs">✓</span>
                                </div>
                                <span className="text-foreground-muted">85% cashless transactions</span>
                            </div>
                        </div>
                    </div>

                    {/* Feature 3: Invisible Loyalty */}
                    <div className="bg-background rounded-2xl p-8 shadow-sm hover:shadow-lg transition-all duration-300 border border-neutral/20">
                        <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-6">
                            <span className="text-3xl">🎯</span>
                        </div>

                        <h3 className="font-headings text-2xl font-bold text-primary mb-4">
                            Invisible Loyalty System
                        </h3>

                        <p className="font-body text-foreground-muted leading-relaxed mb-6">
                            Customers get rewarded automatically using just their phone number. No apps to download or cards to carry.
                        </p>

                        <div className="space-y-3">
                            <div className="flex items-center text-sm">
                                <div className="w-5 h-5 bg-accent/10 rounded-full flex items-center justify-center mr-3">
                                    <span className="text-accent text-xs">✓</span>
                                </div>
                                <span className="text-foreground-muted">Phone number based tracking</span>
                            </div>
                            <div className="flex items-center text-sm">
                                <div className="w-5 h-5 bg-accent/10 rounded-full flex items-center justify-center mr-3">
                                    <span className="text-accent text-xs">✓</span>
                                </div>
                                <span className="text-foreground-muted">Automatic reward calculation</span>
                            </div>
                            <div className="flex items-center text-sm">
                                <div className="w-5 h-5 bg-accent/10 rounded-full flex items-center justify-center mr-3">
                                    <span className="text-accent text-xs">✓</span>
                                </div>
                                <span className="text-foreground-muted">35% retention increase</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Secondary Features - 2-column layout */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">

                    {/* Staff Management */}
                    <div className="bg-background rounded-2xl p-8 shadow-sm hover:shadow-lg transition-all duration-300 border border-neutral/20">
                        <div className="w-16 h-16 bg-secondary/10 rounded-2xl flex items-center justify-center mb-6">
                            <span className="text-3xl">👥</span>
                        </div>

                        <h3 className="font-headings text-2xl font-bold text-primary mb-4">
                            Staff Management
                        </h3>

                        <p className="font-body text-foreground-muted leading-relaxed mb-6">
                            Empower your team with individual dashboards, performance tracking, and transparent earnings reports.
                        </p>

                        <div className="bg-neutral/30 rounded-xl p-4 mb-6">
                            <div className="flex items-center justify-between">
                                <div className="flex items-center space-x-3">
                                    <div className="w-10 h-10 bg-accent/20 rounded-full flex items-center justify-center">
                                        <span className="text-sm">👨</span>
                                    </div>
                                    <div>
                                        <div className="text-sm font-semibold text-primary">John K.</div>
                                        <div className="text-xs text-foreground-muted">Master Barber</div>
                                    </div>
                                </div>
                                <div className="text-right">
                                    <div className="text-lg font-bold text-accent">KES 12K</div>
                                    <div className="text-xs text-foreground-muted">This week</div>
                                </div>
                            </div>
                        </div>

                        <div className="space-y-3">
                            <div className="flex items-center text-sm">
                                <div className="w-5 h-5 bg-accent/10 rounded-full flex items-center justify-center mr-3">
                                    <span className="text-accent text-xs">✓</span>
                                </div>
                                <span className="text-foreground-muted">Individual performance dashboards</span>
                            </div>
                            <div className="flex items-center text-sm">
                                <div className="w-5 h-5 bg-accent/10 rounded-full flex items-center justify-center mr-3">
                                    <span className="text-accent text-xs">✓</span>
                                </div>
                                <span className="text-foreground-muted">Weekly earnings reports</span>
                            </div>
                        </div>
                    </div>

                    {/* Analytics & Support */}
                    <div className="bg-background rounded-2xl p-8 shadow-sm hover:shadow-lg transition-all duration-300 border border-neutral/20">
                        <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-6">
                            <span className="text-3xl">📊</span>
                        </div>

                        <h3 className="font-headings text-2xl font-bold text-primary mb-4">
                            Analytics & Support
                        </h3>

                        <p className="font-body text-foreground-muted leading-relaxed mb-6">
                            Real-time business insights with 24/7 local Kenyan support. Get help when you need it most.
                        </p>

                        <div className="grid grid-cols-2 gap-4 mb-6">
                            <div className="bg-accent/5 rounded-xl p-4 text-center">
                                <div className="text-2xl font-bold text-accent">3min</div>
                                <div className="text-xs text-foreground-muted">Setup Time</div>
                            </div>
                            <div className="bg-secondary/5 rounded-xl p-4 text-center">
                                <div className="text-2xl font-bold text-secondary">24/7</div>
                                <div className="text-xs text-foreground-muted">Support</div>
                            </div>
                        </div>

                        <div className="space-y-3">
                            <div className="flex items-center text-sm">
                                <div className="w-5 h-5 bg-accent/10 rounded-full flex items-center justify-center mr-3">
                                    <span className="text-accent text-xs">✓</span>
                                </div>
                                <span className="text-foreground-muted">Real-time sales analytics</span>
                            </div>
                            <div className="flex items-center text-sm">
                                <div className="w-5 h-5 bg-accent/10 rounded-full flex items-center justify-center mr-3">
                                    <span className="text-accent text-xs">✓</span>
                                </div>
                                <span className="text-foreground-muted">WhatsApp & phone support</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="bg-primary rounded-3xl p-8 md:p-12 text-center">
                    <h3 className="font-headings text-2xl md:text-3xl font-bold text-white mb-4">
                        Ready to Transform Your Barbershop?
                    </h3>

                    <p className="font-body text-white/80 text-lg mb-8 max-w-2xl mx-auto">
                        Join 50+ barbershops already using FolioCuts to streamline operations,
                        boost staff performance, and delight customers across Kenya.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                        <button className="px-8 py-4 bg-secondary text-primary font-semibold rounded-lg hover:bg-secondary-light transition-colors shadow-lg">
                            Start Your Free Trial
                        </button>

                        <button className="px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-primary transition-colors">
                            Schedule Demo
                        </button>
                    </div>

                    <div className="flex items-center justify-center space-x-8 mt-8 pt-8 border-t border-white/20">
                        <div className="text-center">
                            <div className="text-2xl font-bold text-secondary">3 mins</div>
                            <div className="text-sm text-white/60">Setup Time</div>
                        </div>
                        <div className="text-center">
                            <div className="text-2xl font-bold text-secondary">24/7</div>
                            <div className="text-sm text-white/60">Support</div>
                        </div>
                        <div className="text-center">
                            <div className="text-2xl font-bold text-secondary">0%</div>
                            <div className="text-sm text-white/60">Setup Fee</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}