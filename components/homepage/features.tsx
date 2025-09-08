export default function Features() {
    return (
        <section id="features" className="pt-40 pb-20 bg-neutral relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
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

                {/* Bento Grid Layout */}
                <div className="grid grid-cols-1 md:grid-cols-6 lg:grid-cols-12 gap-6 mb-16">

                    {/* Large Feature - Commission Transparency (spans 6 cols) */}
                    <div className="md:col-span-6 lg:col-span-6 bg-background rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 group relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-secondary/10 rounded-full blur-3xl"></div>
                        <div className="relative z-10">
                            <div className="w-16 h-16 bg-secondary/20 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                <span className="text-3xl">💰</span>
                            </div>

                            <h3 className="font-headings text-2xl font-bold text-primary mb-4">
                                Commission Transparency
                            </h3>

                            <p className="font-body text-foreground-muted leading-relaxed mb-6">
                                Automated commission calculation per staff member. Real-time tracking,
                                daily reports, and transparent payouts that build trust with your team.
                            </p>

                            {/* Mini Stats */}
                            <div className="grid grid-cols-2 gap-4 mb-6">
                                <div className="bg-secondary/5 rounded-xl p-3">
                                    <div className="text-lg font-bold text-secondary">40%</div>
                                    <div className="text-xs text-foreground-muted">Staff Satisfaction</div>
                                </div>
                                <div className="bg-accent/5 rounded-xl p-3">
                                    <div className="text-lg font-bold text-accent">Zero</div>
                                    <div className="text-xs text-foreground-muted">Disputes</div>
                                </div>
                            </div>

                            <ul className="space-y-2 text-sm">
                                <li className="flex items-center text-foreground-muted">
                                    <span className="w-4 h-4 bg-accent/20 rounded-full flex items-center justify-center mr-3">
                                        <span className="text-accent text-xs">✓</span>
                                    </span>
                                    Real-time commission tracking
                                </li>
                                <li className="flex items-center text-foreground-muted">
                                    <span className="w-4 h-4 bg-accent/20 rounded-full flex items-center justify-center mr-3">
                                        <span className="text-accent text-xs">✓</span>
                                    </span>
                                    Staff performance dashboards
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* Medium Feature - M-Pesa Integration (spans 3 cols) */}
                    <div className="md:col-span-3 lg:col-span-3 bg-background rounded-3xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 group relative overflow-hidden">
                        <div className="absolute -top-4 -right-4 w-24 h-24 bg-accent/10 rounded-full blur-2xl"></div>
                        <div className="relative z-10">
                            <div className="w-14 h-14 bg-accent/20 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                                <span className="text-2xl">📱</span>
                            </div>

                            <h3 className="font-headings text-lg font-bold text-primary mb-3">
                                M-Pesa Integration
                            </h3>

                            <p className="font-body text-sm text-foreground-muted leading-relaxed mb-4">
                                Seamless mobile money payments with STK Push. Modern payment options your customers expect.
                            </p>

                            <div className="bg-accent/5 rounded-xl p-3 mb-4">
                                <div className="text-xl font-bold text-accent">85%</div>
                                <div className="text-xs text-foreground-muted">Cashless Payments</div>
                            </div>
                        </div>
                    </div>

                    {/* Medium Feature - Analytics (spans 3 cols) */}
                    <div className="md:col-span-3 lg:col-span-3 bg-background rounded-3xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 group relative overflow-hidden">
                        <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-primary/10 rounded-full blur-2xl"></div>
                        <div className="relative z-10">
                            <div className="w-14 h-14 bg-primary/20 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                                <span className="text-2xl">📊</span>
                            </div>

                            <h3 className="font-headings text-lg font-bold text-primary mb-3">
                                Real-time Analytics
                            </h3>

                            <p className="font-body text-sm text-foreground-muted leading-relaxed mb-4">
                                Transform data into insights. Track sales, peak hours, and staff performance.
                            </p>

                            {/* Mini Chart */}
                            <div className="flex items-end space-x-1 h-12 mb-4">
                                <div className="bg-accent/30 w-2 h-6 rounded-t"></div>
                                <div className="bg-accent/50 w-2 h-8 rounded-t"></div>
                                <div className="bg-accent w-2 h-12 rounded-t"></div>
                                <div className="bg-accent/70 w-2 h-10 rounded-t"></div>
                                <div className="bg-accent/40 w-2 h-7 rounded-t"></div>
                            </div>
                        </div>
                    </div>

                    {/* Wide Feature - Loyalty System (spans 8 cols) */}
                    <div className="md:col-span-6 lg:col-span-8 bg-gradient-to-br from-primary/5 to-accent/5 rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 group relative overflow-hidden border border-accent/10">
                        <div className="absolute top-0 right-0 w-40 h-40 bg-accent/5 rounded-full blur-3xl"></div>
                        <div className="relative z-10">
                            <div className="flex items-start justify-between mb-6">
                                <div>
                                    <div className="w-16 h-16 bg-accent/20 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                                        <span className="text-3xl">🎯</span>
                                    </div>

                                    <h3 className="font-headings text-2xl font-bold text-primary mb-4">
                                        Invisible Loyalty System
                                    </h3>

                                    <p className="font-body text-foreground-muted leading-relaxed mb-6 max-w-lg">
                                        Customers get rewarded without apps to download or cards to carry.
                                        Just their phone number unlocks automatic loyalty tracking.
                                    </p>
                                </div>

                                {/* Loyalty Card Mockup */}
                                <div className="hidden lg:block bg-white rounded-2xl p-4 shadow-lg border border-accent/10 min-w-[200px]">
                                    <div className="flex items-center justify-between mb-3">
                                        <span className="text-xs text-foreground-muted">Customer</span>
                                        <div className="w-6 h-6 bg-accent rounded-full flex items-center justify-center">
                                            <span className="text-white text-xs">💈</span>
                                        </div>
                                    </div>
                                    <div className="text-sm font-semibold text-primary mb-2">John Doe</div>
                                    <div className="text-xs text-foreground-muted mb-3">0722 123 456</div>

                                    <div className="bg-neutral rounded-lg p-2 mb-3">
                                        <div className="flex justify-between text-xs">
                                            <span className="text-foreground-muted">Progress</span>
                                            <span className="text-accent font-medium">7/10</span>
                                        </div>
                                        <div className="mt-1 h-2 bg-accent/20 rounded-full overflow-hidden">
                                            <div className="h-full bg-accent rounded-full" style={{ width: '70%' }}></div>
                                        </div>
                                    </div>

                                    <div className="text-xs text-accent font-medium">3 more visits = Free haircut!</div>
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                <div className="bg-white/50 rounded-xl p-4">
                                    <div className="text-lg font-bold text-accent">35%</div>
                                    <div className="text-xs text-foreground-muted">Retention Increase</div>
                                </div>
                                <div className="bg-white/50 rounded-xl p-4">
                                    <div className="text-lg font-bold text-secondary">Zero</div>
                                    <div className="text-xs text-foreground-muted">Lost Cards</div>
                                </div>
                                <div className="bg-white/50 rounded-xl p-4">
                                    <div className="text-lg font-bold text-primary">100%</div>
                                    <div className="text-xs text-foreground-muted">Automatic</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Tall Feature - Staff Management (spans 4 cols, 2 rows) */}
                    <div className="md:col-span-3 lg:col-span-4 md:row-span-2 bg-background rounded-3xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 group relative overflow-hidden">
                        <div className="absolute top-0 left-0 w-32 h-32 bg-secondary/5 rounded-full blur-3xl"></div>
                        <div className="relative z-10 h-full flex flex-col">
                            <div className="w-14 h-14 bg-secondary/20 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                                <span className="text-2xl">👥</span>
                            </div>

                            <h3 className="font-headings text-xl font-bold text-primary mb-4">
                                Staff Management
                            </h3>

                            <p className="font-body text-sm text-foreground-muted leading-relaxed mb-6">
                                Empower your team with individual dashboards, performance tracking, and transparent earnings.
                            </p>

                            {/* Staff Cards */}
                            <div className="space-y-3 mb-6 flex-1">
                                <div className="bg-neutral rounded-lg p-3 flex items-center space-x-3">
                                    <div className="w-8 h-8 bg-accent/20 rounded-full flex items-center justify-center">
                                        <span className="text-xs">👨</span>
                                    </div>
                                    <div className="flex-1">
                                        <div className="text-sm font-medium text-primary">John K.</div>
                                        <div className="text-xs text-foreground-muted">Master Barber</div>
                                    </div>
                                    <div className="text-right">
                                        <div className="text-sm font-bold text-accent">KES 12K</div>
                                        <div className="text-xs text-foreground-muted">This week</div>
                                    </div>
                                </div>

                                <div className="bg-neutral rounded-lg p-3 flex items-center space-x-3">
                                    <div className="w-8 h-8 bg-secondary/20 rounded-full flex items-center justify-center">
                                        <span className="text-xs">👩</span>
                                    </div>
                                    <div className="flex-1">
                                        <div className="text-sm font-medium text-primary">Grace M.</div>
                                        <div className="text-xs text-foreground-muted">Senior Stylist</div>
                                    </div>
                                    <div className="text-right">
                                        <div className="text-sm font-bold text-secondary">KES 9.8K</div>
                                        <div className="text-xs text-foreground-muted">This week</div>
                                    </div>
                                </div>
                            </div>

                            <ul className="space-y-2 text-xs">
                                <li className="flex items-center text-foreground-muted">
                                    <span className="w-3 h-3 bg-accent/20 rounded-full flex items-center justify-center mr-2">
                                        <span className="text-accent text-[8px]">✓</span>
                                    </span>
                                    Individual performance dashboards
                                </li>
                                <li className="flex items-center text-foreground-muted">
                                    <span className="w-3 h-3 bg-accent/20 rounded-full flex items-center justify-center mr-2">
                                        <span className="text-accent text-[8px]">✓</span>
                                    </span>
                                    Commission transparency
                                </li>
                                <li className="flex items-center text-foreground-muted">
                                    <span className="w-3 h-3 bg-accent/20 rounded-full flex items-center justify-center mr-2">
                                        <span className="text-accent text-[8px]">✓</span>
                                    </span>
                                    Weekly/monthly reports
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* Small Feature - Quick Setup (spans 4 cols) */}
                    <div className="md:col-span-3 lg:col-span-4 bg-gradient-to-br from-secondary/10 to-accent/5 rounded-3xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 group border border-secondary/10">
                        <div className="w-12 h-12 bg-secondary/20 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                            <span className="text-xl">⚡</span>
                        </div>

                        <h3 className="font-headings text-lg font-bold text-primary mb-3">
                            3-Minute Setup
                        </h3>

                        <p className="font-body text-sm text-foreground-muted leading-relaxed mb-4">
                            Get started instantly. No technical skills required, no lengthy training sessions.
                        </p>

                        <div className="flex items-center space-x-4">
                            <div className="text-center">
                                <div className="text-xl font-bold text-secondary">3</div>
                                <div className="text-xs text-foreground-muted">Minutes</div>
                            </div>
                            <div className="text-center">
                                <div className="text-xl font-bold text-accent">0</div>
                                <div className="text-xs text-foreground-muted">Setup Fees</div>
                            </div>
                        </div>
                    </div>

                    {/* Small Feature - 24/7 Support (spans 4 cols) */}
                    <div className="md:col-span-3 lg:col-span-4 bg-gradient-to-br from-accent/10 to-primary/5 rounded-3xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 group border border-accent/10">
                        <div className="w-12 h-12 bg-accent/20 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                            <span className="text-xl">📞</span>
                        </div>

                        <h3 className="font-headings text-lg font-bold text-primary mb-3">
                            24/7 Support
                        </h3>

                        <p className="font-body text-sm text-foreground-muted leading-relaxed mb-4">
                            Local Kenyan support team ready to help. WhatsApp, phone, or email - we're here.
                        </p>

                        <div className="flex items-center space-x-2">
                            <div className="w-2 h-2 bg-accent rounded-full animate-pulse"></div>
                            <span className="text-xs text-accent font-medium">Support team online</span>
                        </div>
                    </div>
                </div>

                {/* Bottom CTA Section */}
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

                    {/* Trust Indicators */}
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