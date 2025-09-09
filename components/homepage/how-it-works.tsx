export default function HowItWorks() {
    return (
        <section id="how-it-works" className="py-20 bg-background">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
                        <span className="text-primary font-medium text-sm">
                            🚀 Simple Setup Process
                        </span>
                    </div>

                    <h2 className="font-headings text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-6">
                        Get Started in
                        <span className="text-secondary"> 3 Easy Steps</span>
                    </h2>

                    <p className="font-body text-xl text-foreground-muted max-w-3xl mx-auto leading-relaxed">
                        No complex installations or lengthy training. Transform your barbershop
                        operations in minutes, not months. Here's how simple it is to get started.
                    </p>
                </div>

                <div className="relative">
                    <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-secondary via-accent to-primary transform -translate-y-1/2 z-0"></div>

                    <div className="grid md:grid-cols-3 gap-12 relative z-10">

                        <div className="text-center group">
                            <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:shadow-xl transition-shadow">
                                <span className="font-headings text-2xl font-bold text-primary">1</span>
                            </div>

                            <div className="bg-neutral rounded-2xl p-6 mb-6 hover:shadow-lg transition-shadow">
                                <div className="bg-background rounded-xl p-4 space-y-3">
                                    <div className="flex items-center justify-between">
                                        <h4 className="font-headings font-semibold text-primary text-sm">Shop Setup</h4>
                                        <div className="w-6 h-6 bg-secondary rounded-full flex items-center justify-center">
                                            <span className="text-primary text-xs">⚙️</span>
                                        </div>
                                    </div>

                                    <div className="space-y-2">
                                        <div className="h-3 bg-neutral rounded w-full"></div>
                                        <div className="h-3 bg-neutral rounded w-3/4"></div>
                                        <div className="h-3 bg-accent/20 rounded w-1/2"></div>
                                    </div>

                                    <div className="flex space-x-2">
                                        <div className="flex-1 h-8 bg-secondary/20 rounded text-xs flex items-center justify-center text-primary font-medium">
                                            Add Staff
                                        </div>
                                        <div className="flex-1 h-8 bg-accent/20 rounded text-xs flex items-center justify-center text-accent font-medium">
                                            Set Services
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <h3 className="font-headings text-xl font-bold text-primary mb-4">
                                Quick Setup
                            </h3>

                            <p className="font-body text-foreground-muted leading-relaxed">
                                Add your barbershop details, staff members, and services.
                                Our guided setup takes just <strong className="text-accent">3 minutes</strong>
                                and you're ready to go.
                            </p>

                            <ul className="mt-4 space-y-2 text-sm text-left">
                                <li className="flex items-center text-foreground-muted">
                                    <span className="w-4 h-4 bg-secondary/20 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                                        <span className="text-secondary text-xs">✓</span>
                                    </span>
                                    Guided setup wizard
                                </li>
                                <li className="flex items-center text-foreground-muted">
                                    <span className="w-4 h-4 bg-secondary/20 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                                        <span className="text-secondary text-xs">✓</span>
                                    </span>
                                    Import existing customer data
                                </li>
                                <li className="flex items-center text-foreground-muted">
                                    <span className="w-4 h-4 bg-secondary/20 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                                        <span className="text-secondary text-xs">✓</span>
                                    </span>
                                    M-Pesa integration setup
                                </li>
                            </ul>
                        </div>

                        <div className="text-center group">
                            <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:shadow-xl transition-shadow">
                                <span className="font-headings text-2xl font-bold text-white">2</span>
                            </div>

                            <div className="bg-neutral rounded-2xl p-6 mb-6 hover:shadow-lg transition-shadow">
                                <div className="bg-background rounded-xl p-4 space-y-3">
                                    <div className="flex items-center justify-between">
                                        <h4 className="font-headings font-semibold text-primary text-sm">New Service</h4>
                                        <div className="text-xs text-accent bg-accent/10 px-2 py-1 rounded">Live</div>
                                    </div>

                                    <div className="flex items-center space-x-3">
                                        <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                                            <span className="text-primary text-xs">👤</span>
                                        </div>
                                        <div className="flex-1 text-left">
                                            <div className="text-sm font-medium text-primary">Customer: 0722...</div>
                                            <div className="text-xs text-foreground-muted">Haircut + Beard</div>
                                        </div>
                                    </div>

                                    <div className="flex space-x-2">
                                        <div className="flex-1 h-8 bg-accent rounded text-xs flex items-center justify-center text-white font-medium">
                                            KES 500
                                        </div>
                                        <div className="flex-1 h-8 bg-primary/10 rounded text-xs flex items-center justify-center text-primary font-medium">
                                            M-Pesa Pay
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <h3 className="font-headings text-xl font-bold text-primary mb-4">
                                Record Services
                            </h3>

                            <p className="font-body text-foreground-muted leading-relaxed">
                                Simply tap to record each service as it's completed.
                                Payment, commissions, and loyalty points are
                                <strong className="text-accent"> automatically calculated</strong>.
                            </p>

                            <ul className="mt-4 space-y-2 text-sm text-left">
                                <li className="flex items-center text-foreground-muted">
                                    <span className="w-4 h-4 bg-accent/20 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                                        <span className="text-accent text-xs">✓</span>
                                    </span>
                                    One-tap service recording
                                </li>
                                <li className="flex items-center text-foreground-muted">
                                    <span className="w-4 h-4 bg-accent/20 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                                        <span className="text-accent text-xs">✓</span>
                                    </span>
                                    Instant M-Pesa payments
                                </li>
                                <li className="flex items-center text-foreground-muted">
                                    <span className="w-4 h-4 bg-accent/20 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                                        <span className="text-accent text-xs">✓</span>
                                    </span>
                                    Auto loyalty tracking
                                </li>
                            </ul>
                        </div>

                        <div className="text-center group">
                            <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:shadow-xl transition-shadow">
                                <span className="font-headings text-2xl font-bold text-white">3</span>
                            </div>

                            <div className="bg-neutral rounded-2xl p-6 mb-6 hover:shadow-lg transition-shadow">
                                <div className="bg-background rounded-xl p-4 space-y-3">
                                    <div className="flex items-center justify-between">
                                        <h4 className="font-headings font-semibold text-primary text-sm">Analytics</h4>
                                        <div className="text-xs text-accent">↗️ +25%</div>
                                    </div>

                                    <div className="grid grid-cols-2 gap-2">
                                        <div className="bg-accent/10 p-2 rounded text-center">
                                            <div className="text-lg font-bold text-accent">45K</div>
                                            <div className="text-xs text-foreground-muted">Revenue</div>
                                        </div>
                                        <div className="bg-secondary/10 p-2 rounded text-center">
                                            <div className="text-lg font-bold text-secondary">38</div>
                                            <div className="text-xs text-foreground-muted">Customers</div>
                                        </div>
                                    </div>

                                    <div className="flex items-end space-x-1 h-12">
                                        <div className="bg-accent/30 w-2 h-6 rounded-t"></div>
                                        <div className="bg-accent/50 w-2 h-8 rounded-t"></div>
                                        <div className="bg-accent w-2 h-12 rounded-t"></div>
                                        <div className="bg-accent/70 w-2 h-10 rounded-t"></div>
                                        <div className="bg-accent/40 w-2 h-7 rounded-t"></div>
                                        <div className="bg-accent/60 w-2 h-9 rounded-t"></div>
                                    </div>
                                </div>
                            </div>

                            <h3 className="font-headings text-xl font-bold text-primary mb-4">
                                Track & Grow
                            </h3>

                            <p className="font-body text-foreground-muted leading-relaxed">
                                Watch your business insights come alive. Track performance,
                                identify trends, and make data-driven decisions to
                                <strong className="text-primary"> grow your revenue</strong>.
                            </p>

                            <ul className="mt-4 space-y-2 text-sm text-left">
                                <li className="flex items-center text-foreground-muted">
                                    <span className="w-4 h-4 bg-primary/20 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                                        <span className="text-primary text-xs">✓</span>
                                    </span>
                                    Real-time dashboards
                                </li>
                                <li className="flex items-center text-foreground-muted">
                                    <span className="w-4 h-4 bg-primary/20 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                                        <span className="text-primary text-xs">✓</span>
                                    </span>
                                    Staff performance reports
                                </li>
                                <li className="flex items-center text-foreground-muted">
                                    <span className="w-4 h-4 bg-primary/20 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                                        <span className="text-primary text-xs">✓</span>
                                    </span>
                                    Customer retention insights
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="text-center mt-16">
                    <div className="bg-gradient-to-r from-accent/10 to-secondary/10 rounded-3xl p-8 md:p-12">
                        <h3 className="font-headings text-2xl md:text-3xl font-bold text-primary mb-4">
                            That's It! Your Barbershop is Now Digital
                        </h3>

                        <p className="font-body text-foreground-muted text-lg mb-8 max-w-2xl mx-auto">
                            No lengthy training sessions. No complex software. Just simple, powerful tools
                            that work the way your barbershop works.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                            <button className="px-8 py-4 bg-secondary text-primary font-semibold rounded-lg hover:bg-secondary-light transition-colors shadow-lg">
                                Start Free Trial Today
                            </button>

                            <div className="flex items-center text-foreground-muted">
                                <span className="mr-2">💳</span>
                                <span className="text-sm">No credit card required</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
