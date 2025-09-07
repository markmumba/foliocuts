export default function Pricing() {
    return (
        <section className="py-20 bg-background">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <div className="inline-flex items-center px-4 py-2 rounded-full bg-secondary/10 border border-secondary/20 mb-6">
                        <span className="text-secondary font-medium text-sm">
                            💰 Simple, Transparent Pricing
                        </span>
                    </div>

                    <h2 className="font-headings text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-6">
                        Choose the Perfect Plan
                        <span className="text-accent"> for Your Barbershop</span>
                    </h2>

                    <p className="font-body text-xl text-foreground-muted max-w-3xl mx-auto leading-relaxed mb-8">
                        No hidden fees, no setup costs, no long-term contracts. Start with any plan
                        and upgrade as your business grows. All plans include 24/7 support and free updates.
                    </p>

                    {/* Billing Toggle */}
                    <div className="flex items-center justify-center space-x-4">
                        <span className="font-body text-foreground-muted">Monthly</span>
                        <div className="relative">
                            <div className="w-12 h-6 bg-neutral rounded-full"></div>
                            <div className="absolute top-1 left-1 w-4 h-4 bg-accent rounded-full transition-transform"></div>
                        </div>
                        <span className="font-body text-accent font-medium">
                            Yearly <span className="text-sm">(Save 20%)</span>
                        </span>
                    </div>
                </div>

                {/* Pricing Cards */}
                <div className="grid md:grid-cols-3 gap-8 mb-16">

                    {/* Basic Plan */}
                    <div className="bg-neutral rounded-3xl p-8 hover:shadow-lg transition-shadow">
                        <div className="text-center mb-8">
                            <h3 className="font-headings text-2xl font-bold text-primary mb-2">Basic</h3>
                            <p className="text-foreground-muted mb-6">Perfect for small barbershops getting started</p>

                            <div className="mb-6">
                                <span className="text-4xl font-bold text-primary">KES 2,500</span>
                                <span className="text-foreground-muted">/month</span>
                            </div>

                            <button className="w-full px-6 py-3 border-2 border-primary text-primary font-semibold rounded-lg hover:bg-primary hover:text-white transition-colors">
                                Start Free Trial
                            </button>
                        </div>

                        {/* Features */}
                        <div className="space-y-4">
                            <div className="flex items-center">
                                <span className="w-5 h-5 bg-accent/20 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                                    <span className="text-accent text-xs">✓</span>
                                </span>
                                <span className="font-body text-foreground-muted">Up to 5 staff members</span>
                            </div>

                            <div className="flex items-center">
                                <span className="w-5 h-5 bg-accent/20 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                                    <span className="text-accent text-xs">✓</span>
                                </span>
                                <span className="font-body text-foreground-muted">Digital service recording</span>
                            </div>

                            <div className="flex items-center">
                                <span className="w-5 h-5 bg-accent/20 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                                    <span className="text-accent text-xs">✓</span>
                                </span>
                                <span className="font-body text-foreground-muted">Basic commission tracking</span>
                            </div>

                            <div className="flex items-center">
                                <span className="w-5 h-5 bg-accent/20 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                                    <span className="text-accent text-xs">✓</span>
                                </span>
                                <span className="font-body text-foreground-muted">M-Pesa integration</span>
                            </div>

                            <div className="flex items-center">
                                <span className="w-5 h-5 bg-accent/20 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                                    <span className="text-accent text-xs">✓</span>
                                </span>
                                <span className="font-body text-foreground-muted">Simple loyalty program</span>
                            </div>

                            <div className="flex items-center">
                                <span className="w-5 h-5 bg-accent/20 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                                    <span className="text-accent text-xs">✓</span>
                                </span>
                                <span className="font-body text-foreground-muted">Basic analytics</span>
                            </div>

                            <div className="flex items-center">
                                <span className="w-5 h-5 bg-accent/20 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                                    <span className="text-accent text-xs">✓</span>
                                </span>
                                <span className="font-body text-foreground-muted">Email support</span>
                            </div>
                        </div>

                        {/* Best For */}
                        <div className="mt-6 pt-6 border-t border-neutral">
                            <p className="text-sm text-foreground-muted">
                                <strong className="text-primary">Best for:</strong> 1-5 staff barbershops,
                                startups, testing the system
                            </p>
                        </div>
                    </div>

                    {/* Pro Plan - Most Popular */}
                    <div className="bg-background rounded-3xl p-8 shadow-xl border-2 border-secondary relative hover:shadow-2xl transition-shadow">
                        {/* Popular Badge */}
                        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                            <span className="bg-secondary text-primary px-4 py-2 rounded-full text-sm font-semibold">
                                🔥 Most Popular
                            </span>
                        </div>

                        <div className="text-center mb-8">
                            <h3 className="font-headings text-2xl font-bold text-primary mb-2">Pro</h3>
                            <p className="text-foreground-muted mb-6">Ideal for growing barbershops with multiple staff</p>

                            <div className="mb-6">
                                <span className="text-4xl font-bold text-secondary">KES 4,500</span>
                                <span className="text-foreground-muted">/month</span>
                            </div>

                            <button className="w-full px-6 py-3 bg-secondary text-primary font-semibold rounded-lg hover:bg-secondary-light transition-colors shadow-lg">
                                Start Free Trial
                            </button>
                        </div>

                        {/* Features */}
                        <div className="space-y-4">
                            <div className="flex items-center">
                                <span className="w-5 h-5 bg-accent/20 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                                    <span className="text-accent text-xs">✓</span>
                                </span>
                                <span className="font-body text-foreground-muted">Up to 15 staff members</span>
                            </div>

                            <div className="flex items-center">
                                <span className="w-5 h-5 bg-accent/20 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                                    <span className="text-accent text-xs">✓</span>
                                </span>
                                <span className="font-body text-foreground-muted">Everything in Basic, plus:</span>
                            </div>

                            <div className="flex items-center">
                                <span className="w-5 h-5 bg-secondary/20 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                                    <span className="text-secondary text-xs">✓</span>
                                </span>
                                <span className="font-body text-foreground-muted">Advanced analytics & reports</span>
                            </div>

                            <div className="flex items-center">
                                <span className="w-5 h-5 bg-secondary/20 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                                    <span className="text-secondary text-xs">✓</span>
                                </span>
                                <span className="font-body text-foreground-muted">Staff performance dashboards</span>
                            </div>

                            <div className="flex items-center">
                                <span className="w-5 h-5 bg-secondary/20 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                                    <span className="text-secondary text-xs">✓</span>
                                </span>
                                <span className="font-body text-foreground-muted">Custom loyalty rules</span>
                            </div>

                            <div className="flex items-center">
                                <span className="w-5 h-5 bg-secondary/20 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                                    <span className="text-secondary text-xs">✓</span>
                                </span>
                                <span className="font-body text-foreground-muted">Peak hours analysis</span>
                            </div>

                            <div className="flex items-center">
                                <span className="w-5 h-5 bg-secondary/20 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                                    <span className="text-secondary text-xs">✓</span>
                                </span>
                                <span className="font-body text-foreground-muted">Priority phone support</span>
                            </div>

                            <div className="flex items-center">
                                <span className="w-5 h-5 bg-secondary/20 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                                    <span className="text-secondary text-xs">✓</span>
                                </span>
                                <span className="font-body text-foreground-muted">SMS notifications</span>
                            </div>
                        </div>

                        {/* Best For */}
                        <div className="mt-6 pt-6 border-t border-neutral">
                            <p className="text-sm text-foreground-muted">
                                <strong className="text-secondary">Best for:</strong> 6-15 staff barbershops,
                                established businesses, growth-focused owners
                            </p>
                        </div>
                    </div>

                    {/* Enterprise Plan */}
                    <div className="bg-neutral rounded-3xl p-8 hover:shadow-lg transition-shadow">
                        <div className="text-center mb-8">
                            <h3 className="font-headings text-2xl font-bold text-primary mb-2">Enterprise</h3>
                            <p className="text-foreground-muted mb-6">For large barbershops and multi-location businesses</p>

                            <div className="mb-6">
                                <span className="text-4xl font-bold text-primary">KES 7,500</span>
                                <span className="text-foreground-muted">/month</span>
                            </div>

                            <button className="w-full px-6 py-3 border-2 border-primary text-primary font-semibold rounded-lg hover:bg-primary hover:text-white transition-colors">
                                Contact Sales
                            </button>
                        </div>

                        {/* Features */}
                        <div className="space-y-4">
                            <div className="flex items-center">
                                <span className="w-5 h-5 bg-accent/20 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                                    <span className="text-accent text-xs">✓</span>
                                </span>
                                <span className="font-body text-foreground-muted">16+ staff members</span>
                            </div>

                            <div className="flex items-center">
                                <span className="w-5 h-5 bg-accent/20 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                                    <span className="text-accent text-xs">✓</span>
                                </span>
                                <span className="font-body text-foreground-muted">Everything in Pro, plus:</span>
                            </div>

                            <div className="flex items-center">
                                <span className="w-5 h-5 bg-primary/20 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                                    <span className="text-primary text-xs">✓</span>
                                </span>
                                <span className="font-body text-foreground-muted">Multi-location management</span>
                            </div>

                            <div className="flex items-center">
                                <span className="w-5 h-5 bg-primary/20 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                                    <span className="text-primary text-xs">✓</span>
                                </span>
                                <span className="font-body text-foreground-muted">Advanced inventory tracking</span>
                            </div>

                            <div className="flex items-center">
                                <span className="w-5 h-5 bg-primary/20 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                                    <span className="text-primary text-xs">✓</span>
                                </span>
                                <span className="font-body text-foreground-muted">Staff scheduling system</span>
                            </div>

                            <div className="flex items-center">
                                <span className="w-5 h-5 bg-primary/20 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                                    <span className="text-primary text-xs">✓</span>
                                </span>
                                <span className="font-body text-foreground-muted">API access & integrations</span>
                            </div>

                            <div className="flex items-center">
                                <span className="w-5 h-5 bg-primary/20 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                                    <span className="text-primary text-xs">✓</span>
                                </span>
                                <span className="font-body text-foreground-muted">Dedicated account manager</span>
                            </div>

                            <div className="flex items-center">
                                <span className="w-5 h-5 bg-primary/20 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                                    <span className="text-primary text-xs">✓</span>
                                </span>
                                <span className="font-body text-foreground-muted">24/7 priority support</span>
                            </div>
                        </div>

                        {/* Best For */}
                        <div className="mt-6 pt-6 border-t border-neutral">
                            <p className="text-sm text-foreground-muted">
                                <strong className="text-primary">Best for:</strong> Large barbershops,
                                chains, franchise operations
                            </p>
                        </div>
                    </div>
                </div>

                {/* Value Props Section */}
                <div className="grid md:grid-cols-3 gap-8 mb-16">
                    <div className="text-center">
                        <div className="w-16 h-16 bg-accent/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                            <span className="text-2xl">🚀</span>
                        </div>
                        <h4 className="font-headings font-bold text-primary mb-2">Quick Setup</h4>
                        <p className="font-body text-foreground-muted text-sm">
                            Get started in 3 minutes. No technical skills required.
                        </p>
                    </div>

                    <div className="text-center">
                        <div className="w-16 h-16 bg-secondary/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                            <span className="text-2xl">💳</span>
                        </div>
                        <h4 className="font-headings font-bold text-primary mb-2">No Setup Fees</h4>
                        <p className="font-body text-foreground-muted text-sm">
                            Zero upfront costs. Cancel anytime, no contracts.
                        </p>
                    </div>

                    <div className="text-center">
                        <div className="w-16 h-16 bg-primary/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                            <span className="text-2xl">📞</span>
                        </div>
                        <h4 className="font-headings font-bold text-primary mb-2">24/7 Support</h4>
                        <p className="font-body text-foreground-muted text-sm">
                            Get help when you need it. Local Kenyan support team.
                        </p>
                    </div>
                </div>

                {/* FAQ Section */}
                <div className="bg-neutral rounded-3xl p-8 md:p-12">
                    <h3 className="font-headings text-2xl font-bold text-primary text-center mb-8">
                        Frequently Asked Questions
                    </h3>

                    <div className="grid md:grid-cols-2 gap-8">
                        <div>
                            <h4 className="font-headings font-semibold text-primary mb-2">
                                Can I upgrade or downgrade my plan?
                            </h4>
                            <p className="font-body text-foreground-muted text-sm">
                                Yes! Change your plan anytime. Upgrades take effect immediately,
                                downgrades at your next billing cycle.
                            </p>
                        </div>

                        <div>
                            <h4 className="font-headings font-semibold text-primary mb-2">
                                What happens to my data if I cancel?
                            </h4>
                            <p className="font-body text-foreground-muted text-sm">
                                Your data is yours. We provide export options and keep your data
                                for 90 days after cancellation.
                            </p>
                        </div>

                        <div>
                            <h4 className="font-headings font-semibold text-primary mb-2">
                                Do you charge transaction fees?
                            </h4>
                            <p className="font-body text-foreground-muted text-sm">
                                Only a small fee (0.5%) on M-Pesa transactions to cover payment
                                processing costs. No other hidden fees.
                            </p>
                        </div>

                        <div>
                            <h4 className="font-headings font-semibold text-primary mb-2">
                                Is training included?
                            </h4>
                            <p className="font-body text-foreground-muted text-sm">
                                Yes! All plans include free onboarding and training.
                                Enterprise plans get dedicated training sessions.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Final CTA */}
                <div className="text-center mt-16">
                    <h3 className="font-headings text-2xl md:text-3xl font-bold text-primary mb-4">
                        Ready to Transform Your Barbershop?
                    </h3>
                    <p className="font-body text-foreground-muted text-lg mb-8 max-w-2xl mx-auto">
                        Join 50+ barbershops already growing with FolioCuts. Start your free trial today.
                    </p>

                    <button className="px-8 py-4 bg-secondary text-primary font-semibold rounded-lg hover:bg-secondary-light transition-colors shadow-lg">
                        Start Your Free Trial Now
                    </button>

                    <p className="font-body text-foreground-muted text-sm mt-4">
                        No credit card required • 14-day free trial • Cancel anytime
                    </p>
                </div>
            </div>
        </section>
    );
}
