export default function Hero() {
    return (
        <section className="relative min-h-screen bg-gradient-to-br from-primary via-primary-light to-accent overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
                <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(245,183,0,0.3),transparent_50%)]"></div>
                <div className="absolute top-1/4 right-0 w-96 h-96 bg-secondary/20 rounded-full blur-3xl"></div>
                <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-accent/20 rounded-full blur-3xl"></div>
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-screen py-12">

                    {/* Left Content */}
                    <div className="space-y-8">
                        {/* Badge */}
                        <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20">
                            <span className="text-secondary font-medium text-sm mr-2">🚀</span>
                            <span className="text-white font-medium text-sm">Kenya's First Digital Barbershop Platform</span>
                        </div>

                        {/* Main Headline */}
                        <div className="space-y-4">
                            <h1 className="font-headings text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
                                Transform Your
                                <span className="text-secondary block">Barbershop</span>
                                <span className="text-accent">Operations</span>
                            </h1>

                            <p className="font-body text-xl text-white/90 leading-relaxed max-w-lg">
                                Replace manual bookkeeping with intelligent automation. Track performance,
                                delight customers, and grow your business with Kenya's most advanced
                                barbershop management system.
                            </p>
                        </div>

                        {/* Key Benefits */}
                        <div className="space-y-4">
                            <div className="flex items-center space-x-3">
                                <div className="w-6 h-6 bg-accent rounded-full flex items-center justify-center">
                                    <span className="text-white text-sm">✓</span>
                                </div>
                                <span className="text-white/90">Commission transparency for happier staff</span>
                            </div>

                            <div className="flex items-center space-x-3">
                                <div className="w-6 h-6 bg-secondary rounded-full flex items-center justify-center">
                                    <span className="text-primary text-sm">✓</span>
                                </div>
                                <span className="text-white/90">M-Pesa integration for modern payments</span>
                            </div>

                            <div className="flex items-center space-x-3">
                                <div className="w-6 h-6 bg-accent rounded-full flex items-center justify-center">
                                    <span className="text-white text-sm">✓</span>
                                </div>
                                <span className="text-white/90">Invisible loyalty system customers love</span>
                            </div>
                        </div>

                        {/* CTA Buttons */}
                        <div className="flex flex-col sm:flex-row gap-4 pt-4">
                            <button className="px-8 py-4 bg-secondary text-primary font-semibold text-lg rounded-lg hover:bg-secondary-light transition-all duration-300 hover:scale-105 shadow-xl">
                                Start Free Trial
                            </button>

                            <button className="px-8 py-4 border-2 border-white/30 text-white font-semibold text-lg rounded-lg backdrop-blur-sm hover:bg-white/10 hover:border-white/50 transition-all duration-300">
                                Watch Demo
                            </button>
                        </div>

                        {/* Trust Indicators */}
                        <div className="flex items-center space-x-6 pt-6">
                            <div className="text-center">
                                <div className="text-2xl font-bold text-secondary">50+</div>
                                <div className="text-sm text-white/70">Active Shops</div>
                            </div>
                            <div className="w-px h-12 bg-white/30"></div>
                            <div className="text-center">
                                <div className="text-2xl font-bold text-accent">10K+</div>
                                <div className="text-sm text-white/70">Transactions</div>
                            </div>
                            <div className="w-px h-12 bg-white/30"></div>
                            <div className="text-center">
                                <div className="text-2xl font-bold text-secondary">98%</div>
                                <div className="text-sm text-white/70">Satisfaction</div>
                            </div>
                        </div>
                    </div>

                    {/* Right Content - Phone Mockup */}
                    <div className="relative">
                        {/* Phone Mockup Container */}
                        <div className="relative mx-auto max-w-sm">
                            {/* Phone Frame */}
                            <div className="relative bg-white rounded-[3rem] p-2 shadow-2xl">
                                <div className="bg-neutral rounded-[2.5rem] overflow-hidden">
                                    {/* Phone Screen */}
                                    <div className="relative h-[600px] bg-gradient-to-b from-background to-neutral">

                                        {/* Status Bar */}
                                        <div className="flex justify-between items-center px-6 py-3 text-xs text-foreground-muted">
                                            <span>9:41</span>
                                            <div className="flex space-x-1">
                                                <div className="w-4 h-2 bg-accent rounded-sm"></div>
                                                <div className="w-4 h-2 bg-accent rounded-sm"></div>
                                                <div className="w-6 h-2 bg-accent rounded-sm"></div>
                                            </div>
                                        </div>

                                        {/* App Header */}
                                        <div className="px-6 py-4 border-b border-neutral">
                                            <div className="flex items-center justify-between">
                                                <div className="flex items-center space-x-3">
                                                    <div className="w-8 h-8 bg-secondary rounded-lg flex items-center justify-center">
                                                        <span className="text-primary text-lg">💈</span>
                                                    </div>
                                                    <div>
                                                        <h3 className="font-semibold text-primary">FolioCuts</h3>
                                                        <p className="text-xs text-foreground-muted">Dashboard</p>
                                                    </div>
                                                </div>
                                                <div className="w-8 h-8 bg-accent/20 rounded-full flex items-center justify-center">
                                                    <span className="text-accent text-sm">📊</span>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Dashboard Content */}
                                        <div className="p-6 space-y-6">
                                            {/* Stats Cards */}
                                            <div className="grid grid-cols-2 gap-4">
                                                <div className="bg-white rounded-lg p-4 shadow-sm">
                                                    <div className="text-2xl font-bold text-accent">KES 45K</div>
                                                    <div className="text-xs text-foreground-muted">Today's Sales</div>
                                                </div>
                                                <div className="bg-white rounded-lg p-4 shadow-sm">
                                                    <div className="text-2xl font-bold text-secondary">38</div>
                                                    <div className="text-xs text-foreground-muted">Customers</div>
                                                </div>
                                            </div>

                                            {/* Recent Transaction */}
                                            <div className="bg-white rounded-lg p-4 shadow-sm">
                                                <h4 className="font-semibold text-primary mb-3 text-sm">Recent Service</h4>
                                                <div className="flex items-center justify-between">
                                                    <div className="flex items-center space-x-3">
                                                        <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                                                            <span className="text-primary text-xs">👨</span>
                                                        </div>
                                                        <div>
                                                            <div className="text-sm font-medium text-primary">John Doe</div>
                                                            <div className="text-xs text-foreground-muted">Haircut + Beard</div>
                                                        </div>
                                                    </div>
                                                    <div className="text-right">
                                                        <div className="text-sm font-semibold text-accent">KES 500</div>
                                                        <div className="text-xs text-foreground-muted">M-Pesa</div>
                                                    </div>
                                                </div>
                                            </div>

                                            {/* Staff Performance */}
                                            <div className="bg-white rounded-lg p-4 shadow-sm">
                                                <h4 className="font-semibold text-primary mb-3 text-sm">Top Performer</h4>
                                                <div className="flex items-center space-x-3">
                                                    <div className="w-10 h-10 bg-secondary/20 rounded-full flex items-center justify-center">
                                                        <span className="text-secondary text-sm">👨‍💼</span>
                                                    </div>
                                                    <div className="flex-1">
                                                        <div className="text-sm font-medium text-primary">Peter K.</div>
                                                        <div className="text-xs text-foreground-muted">Master Barber</div>
                                                    </div>
                                                    <div className="text-right">
                                                        <div className="text-sm font-bold text-secondary">KES 12K</div>
                                                        <div className="text-xs text-foreground-muted">Commission</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Floating Elements */}
                            <div className="absolute -top-4 -right-4 bg-white/10 backdrop-blur-md rounded-lg p-3 border border-white/20">
                                <div className="flex items-center space-x-2">
                                    <div className="w-2 h-2 bg-accent rounded-full animate-pulse"></div>
                                    <span className="text-white text-xs">Real-time Updates</span>
                                </div>
                            </div>

                            <div className="absolute -bottom-4 -left-4 bg-white/10 backdrop-blur-md rounded-lg p-3 border border-white/20">
                                <div className="flex items-center space-x-2">
                                    <div className="w-2 h-2 bg-secondary rounded-full animate-pulse"></div>
                                    <span className="text-white text-xs">M-Pesa Ready</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Scroll Indicator */}
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
                <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
                    <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse"></div>
                </div>
            </div>
        </section>
    );
}