const frontendUrl: string = process.env.NEXT_PUBLIC_FRONTEND_URL || "https://foliocuts.blazor-movies.online/register";

export default function RiskReversal() {
    return (
        <section className="py-20 bg-gradient-to-br from-accent/5 via-secondary/5 to-primary/5">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
                        <span className="text-primary font-medium text-sm">
                            🛡️ Zero Risk, Maximum Reward
                        </span>
                    </div>

                    <h2 className="font-headings text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-6">
                        Try FolioCuts Risk-Free
                    </h2>

                    <p className="font-body text-xl text-foreground-muted max-w-3xl mx-auto leading-relaxed">
                        We're so confident you'll love FolioCuts that we offer multiple guarantees.
                        Your success is our success.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8 mb-12">
                    {/* Guarantee 1 */}
                    <div className="bg-background rounded-2xl p-8 border-2 border-secondary/20 hover:border-secondary/40 transition-all hover:shadow-lg">
                        <div className="w-16 h-16 bg-secondary/20 rounded-2xl flex items-center justify-center mb-6">
                            <span className="text-3xl">✓</span>
                        </div>
                        <h3 className="font-headings text-xl font-bold text-primary mb-3">
                            14-Day Free Trial
                        </h3>
                        <p className="font-body text-foreground-muted mb-4">
                            Full access to all features. No credit card required.
                            Experience everything FolioCuts has to offer with zero commitment.
                        </p>
                        <ul className="space-y-2 text-sm text-foreground-muted">
                            <li className="flex items-start">
                                <span className="text-secondary mr-2">•</span>
                                <span>All features unlocked</span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-secondary mr-2">•</span>
                                <span>No payment required</span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-secondary mr-2">•</span>
                                <span>Cancel anytime</span>
                            </li>
                        </ul>
                    </div>

                    {/* Guarantee 2 */}
                    <div className="bg-background rounded-2xl p-8 border-2 border-accent/20 hover:border-accent/40 transition-all hover:shadow-lg">
                        <div className="w-16 h-16 bg-accent/20 rounded-2xl flex items-center justify-center mb-6">
                            <span className="text-3xl">💰</span>
                        </div>
                        <h3 className="font-headings text-xl font-bold text-primary mb-3">
                            30-Day Money-Back Guarantee
                        </h3>
                        <p className="font-body text-foreground-muted mb-4">
                            Not satisfied? Get a full refund within 30 days, no questions asked.
                            We'll even help you export all your data.
                        </p>
                        <ul className="space-y-2 text-sm text-foreground-muted">
                            <li className="flex items-start">
                                <span className="text-accent mr-2">•</span>
                                <span>Full refund guaranteed</span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-accent mr-2">•</span>
                                <span>No questions asked</span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-accent mr-2">•</span>
                                <span>Free data export</span>
                            </li>
                        </ul>
                    </div>

                    {/* Guarantee 3 */}
                    <div className="bg-background rounded-2xl p-8 border-2 border-primary/20 hover:border-primary/40 transition-all hover:shadow-lg">
                        <div className="w-16 h-16 bg-primary/20 rounded-2xl flex items-center justify-center mb-6">
                            <span className="text-3xl">📤</span>
                        </div>
                        <h3 className="font-headings text-xl font-bold text-primary mb-3">
                            Data Export Anytime
                        </h3>
                        <p className="font-body text-foreground-muted mb-4">
                            Your data belongs to you. Export everything in one click,
                            anytime. No vendor lock-in, ever.
                        </p>
                        <ul className="space-y-2 text-sm text-foreground-muted">
                            <li className="flex items-start">
                                <span className="text-primary mr-2">•</span>
                                <span>One-click export</span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-primary mr-2">•</span>
                                <span>All data included</span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-primary mr-2">•</span>
                                <span>No restrictions</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="bg-gradient-to-r from-secondary/10 to-accent/10 rounded-3xl p-8 md:p-12 text-center border border-primary/10">
                    <h3 className="font-headings text-2xl md:text-3xl font-bold text-primary mb-4">
                        Still Have Concerns?
                    </h3>
                    <p className="font-body text-foreground-muted text-lg mb-8 max-w-2xl mx-auto">
                        We understand switching systems can feel risky. That's why we offer
                        free onboarding, training, and 24/7 support. Your success is guaranteed.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                        <a
                            href={frontendUrl}
                            target="_blank"
                            className="px-8 py-4 bg-secondary text-primary font-semibold rounded-lg hover:bg-secondary-light transition-colors shadow-lg"
                        >
                            Start Your Risk-Free Trial
                        </a>
                        <button className="px-8 py-4 border-2 border-primary text-primary font-semibold rounded-lg hover:bg-primary hover:text-white transition-colors">
                            Schedule a Demo Call
                        </button>
                    </div>

                    <div className="flex items-center justify-center space-x-6 mt-8 pt-8 border-t border-primary/10 text-sm text-foreground-muted">
                        <span>✓ 98% stay after trial</span>
                        <span>✓ 4.9/5 average rating</span>
                        <span>✓ 24/7 support included</span>
                    </div>
                </div>
            </div>
        </section>
    );
}

