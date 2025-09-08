"use client";

export default function Testimonials() {
    return (
        <section id="testimonials" className="py-20 bg-neutral overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <div className="inline-flex items-center px-4 py-2 rounded-full bg-accent/10 border border-accent/20 mb-6">
                        <span className="text-accent font-medium text-sm">
                            ⭐ Trusted by Barbershop Owners
                        </span>
                    </div>

                    <h2 className="font-headings text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-6">
                        Real Stories from
                        <span className="text-secondary"> Real Barbershops</span>
                    </h2>

                    <p className="font-body text-xl text-foreground-muted max-w-3xl mx-auto leading-relaxed">
                        See how FolioCuts is transforming barbershops across Kenya, from Nairobi
                        to Mombasa. These are real owners sharing their honest experiences.
                    </p>
                </div>

                {/* Stats Bar */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
                    <div className="text-center">
                        <div className="text-3xl md:text-4xl font-bold text-accent mb-2">50+</div>
                        <div className="text-sm text-foreground-muted">Active Barbershops</div>
                    </div>
                    <div className="text-center">
                        <div className="text-3xl md:text-4xl font-bold text-secondary mb-2">10K+</div>
                        <div className="text-sm text-foreground-muted">Transactions Processed</div>
                    </div>
                    <div className="text-center">
                        <div className="text-3xl md:text-4xl font-bold text-primary mb-2">98%</div>
                        <div className="text-sm text-foreground-muted">Customer Satisfaction</div>
                    </div>
                    <div className="text-center">
                        <div className="text-3xl md:text-4xl font-bold text-accent mb-2">25%</div>
                        <div className="text-sm text-foreground-muted">Average Revenue Increase</div>
                    </div>
                </div>

                {/* Testimonials Carousel */}
                <div className="relative mb-16">

                    {/* Row 1 - Moving Left to Right */}
                    <div className="flex space-x-6 animate-scroll-right hover:animation-pause mb-8">
                        {/* First set of testimonials */}
                        <div className="flex space-x-6 min-w-max">
                            {/* Testimonial 1 - Commission Transparency */}
                            <div className="bg-background rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow w-96 flex-shrink-0">
                                <div className="flex items-center mb-6">
                                    <div className="w-12 h-12 bg-secondary/20 rounded-full flex items-center justify-center mr-4">
                                        <span className="text-secondary text-xl">👨‍💼</span>
                                    </div>
                                    <div>
                                        <h4 className="font-headings font-bold text-primary">James Mwangi</h4>
                                        <p className="text-sm text-foreground-muted">Owner, Elite Cuts Nairobi</p>
                                    </div>
                                </div>
                                <div className="mb-6">
                                    <div className="flex text-secondary mb-3">
                                        <span>⭐⭐⭐⭐⭐</span>
                                    </div>
                                    <blockquote className="font-body text-foreground-muted leading-relaxed">
                                        "My barbers used to complain about commission calculations. Now everything is transparent and automatic. <strong className="text-primary">Staff morale is up 40%</strong> and disputes are completely gone."
                                    </blockquote>
                                </div>
                                <div className="flex items-center justify-between text-sm">
                                    <span className="text-accent font-medium">8 months using FolioCuts</span>
                                    <span className="text-foreground-muted">12 staff members</span>
                                </div>
                            </div>

                            {/* Testimonial 2 - M-Pesa Integration */}
                            <div className="bg-background rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow w-96 flex-shrink-0">
                                <div className="flex items-center mb-6">
                                    <div className="w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center mr-4">
                                        <span className="text-accent text-xl">👩‍💼</span>
                                    </div>
                                    <div>
                                        <h4 className="font-headings font-bold text-primary">Grace Wanjiku</h4>
                                        <p className="text-sm text-foreground-muted">Owner, Modern Cuts Mombasa</p>
                                    </div>
                                </div>
                                <div className="mb-6">
                                    <div className="flex text-secondary mb-3">
                                        <span>⭐⭐⭐⭐⭐</span>
                                    </div>
                                    <blockquote className="font-body text-foreground-muted leading-relaxed">
                                        "M-Pesa integration changed everything. <strong className="text-accent">85% of payments</strong> are now cashless. No more cash handling stress, no more end-of-day reconciliation headaches."
                                    </blockquote>
                                </div>
                                <div className="flex items-center justify-between text-sm">
                                    <span className="text-accent font-medium">6 months using FolioCuts</span>
                                    <span className="text-foreground-muted">7 staff members</span>
                                </div>
                            </div>

                            {/* Testimonial 3 - Customer Loyalty */}
                            <div className="bg-background rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow w-96 flex-shrink-0">
                                <div className="flex items-center mb-6">
                                    <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mr-4">
                                        <span className="text-primary text-xl">👨‍💼</span>
                                    </div>
                                    <div>
                                        <h4 className="font-headings font-bold text-primary">Samuel Kiprotich</h4>
                                        <p className="text-sm text-foreground-muted">Owner, Fresh Fade Kisumu</p>
                                    </div>
                                </div>
                                <div className="mb-6">
                                    <div className="flex text-secondary mb-3">
                                        <span>⭐⭐⭐⭐⭐</span>
                                    </div>
                                    <blockquote className="font-body text-foreground-muted leading-relaxed">
                                        "The invisible loyalty system is genius! Customers don't need apps or cards. <strong className="text-primary">Customer retention increased by 35%</strong> and they're genuinely surprised when they earn free services."
                                    </blockquote>
                                </div>
                                <div className="flex items-center justify-between text-sm">
                                    <span className="text-accent font-medium">1 year using FolioCuts</span>
                                    <span className="text-foreground-muted">5 staff members</span>
                                </div>
                            </div>
                        </div>

                        {/* Duplicate set for seamless loop */}
                        <div className="flex space-x-6 min-w-max">
                            {/* Duplicate Testimonial 1 */}
                            <div className="bg-background rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow w-96 flex-shrink-0">
                                <div className="flex items-center mb-6">
                                    <div className="w-12 h-12 bg-secondary/20 rounded-full flex items-center justify-center mr-4">
                                        <span className="text-secondary text-xl">👨‍💼</span>
                                    </div>
                                    <div>
                                        <h4 className="font-headings font-bold text-primary">James Mwangi</h4>
                                        <p className="text-sm text-foreground-muted">Owner, Elite Cuts Nairobi</p>
                                    </div>
                                </div>
                                <div className="mb-6">
                                    <div className="flex text-secondary mb-3">
                                        <span>⭐⭐⭐⭐⭐</span>
                                    </div>
                                    <blockquote className="font-body text-foreground-muted leading-relaxed">
                                        "My barbers used to complain about commission calculations. Now everything is transparent and automatic. <strong className="text-primary">Staff morale is up 40%</strong> and disputes are completely gone."
                                    </blockquote>
                                </div>
                                <div className="flex items-center justify-between text-sm">
                                    <span className="text-accent font-medium">8 months using FolioCuts</span>
                                    <span className="text-foreground-muted">12 staff members</span>
                                </div>
                            </div>

                            {/* Duplicate Testimonial 2 */}
                            <div className="bg-background rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow w-96 flex-shrink-0">
                                <div className="flex items-center mb-6">
                                    <div className="w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center mr-4">
                                        <span className="text-accent text-xl">👩‍💼</span>
                                    </div>
                                    <div>
                                        <h4 className="font-headings font-bold text-primary">Grace Wanjiku</h4>
                                        <p className="text-sm text-foreground-muted">Owner, Modern Cuts Mombasa</p>
                                    </div>
                                </div>
                                <div className="mb-6">
                                    <div className="flex text-secondary mb-3">
                                        <span>⭐⭐⭐⭐⭐</span>
                                    </div>
                                    <blockquote className="font-body text-foreground-muted leading-relaxed">
                                        "M-Pesa integration changed everything. <strong className="text-accent">85% of payments</strong> are now cashless. No more cash handling stress, no more end-of-day reconciliation headaches."
                                    </blockquote>
                                </div>
                                <div className="flex items-center justify-between text-sm">
                                    <span className="text-accent font-medium">6 months using FolioCuts</span>
                                    <span className="text-foreground-muted">7 staff members</span>
                                </div>
                            </div>

                            {/* Duplicate Testimonial 3 */}
                            <div className="bg-background rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow w-96 flex-shrink-0">
                                <div className="flex items-center mb-6">
                                    <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mr-4">
                                        <span className="text-primary text-xl">👨‍💼</span>
                                    </div>
                                    <div>
                                        <h4 className="font-headings font-bold text-primary">Samuel Kiprotich</h4>
                                        <p className="text-sm text-foreground-muted">Owner, Fresh Fade Kisumu</p>
                                    </div>
                                </div>
                                <div className="mb-6">
                                    <div className="flex text-secondary mb-3">
                                        <span>⭐⭐⭐⭐⭐</span>
                                    </div>
                                    <blockquote className="font-body text-foreground-muted leading-relaxed">
                                        "The invisible loyalty system is genius! Customers don't need apps or cards. <strong className="text-primary">Customer retention increased by 35%</strong> and they're genuinely surprised when they earn free services."
                                    </blockquote>
                                </div>
                                <div className="flex items-center justify-between text-sm">
                                    <span className="text-accent font-medium">1 year using FolioCuts</span>
                                    <span className="text-foreground-muted">5 staff members</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Row 2 - Moving Right to Left */}
                    <div className="flex space-x-6 animate-scroll-left hover:animation-pause">
                        {/* First set of testimonials */}
                        <div className="flex space-x-6 min-w-max">
                            {/* Testimonial 4 - Analytics & Growth */}
                            <div className="bg-background rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow w-96 flex-shrink-0">
                                <div className="flex items-center mb-6">
                                    <div className="w-12 h-12 bg-secondary/20 rounded-full flex items-center justify-center mr-4">
                                        <span className="text-secondary text-xl">👨‍💼</span>
                                    </div>
                                    <div>
                                        <h4 className="font-headings font-bold text-primary">David Ochieng</h4>
                                        <p className="text-sm text-foreground-muted">Owner, Prestige Barbers Nairobi</p>
                                    </div>
                                </div>
                                <div className="mb-6">
                                    <div className="flex text-secondary mb-3">
                                        <span>⭐⭐⭐⭐⭐</span>
                                    </div>
                                    <blockquote className="font-body text-foreground-muted leading-relaxed">
                                        "I never knew my peak hours or which services were most profitable. Now I make data-driven decisions. <strong className="text-accent">Revenue is up 28%</strong> and I've optimized my staff scheduling perfectly."
                                    </blockquote>
                                </div>
                                <div className="flex items-center justify-between text-sm">
                                    <span className="text-accent font-medium">10 months using FolioCuts</span>
                                    <span className="text-foreground-muted">15 staff members</span>
                                </div>
                            </div>

                            {/* Testimonial 5 - Ease of Use */}
                            <div className="bg-background rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow w-96 flex-shrink-0">
                                <div className="flex items-center mb-6">
                                    <div className="w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center mr-4">
                                        <span className="text-accent text-xl">👩‍💼</span>
                                    </div>
                                    <div>
                                        <h4 className="font-headings font-bold text-primary">Mary Njeri</h4>
                                        <p className="text-sm text-foreground-muted">Owner, Style Studio Nakuru</p>
                                    </div>
                                </div>
                                <div className="mb-6">
                                    <div className="flex text-secondary mb-3">
                                        <span>⭐⭐⭐⭐⭐</span>
                                    </div>
                                    <blockquote className="font-body text-foreground-muted leading-relaxed">
                                        "I was worried about learning new technology, but setup took literally <strong className="text-secondary">3 minutes</strong>. My staff picked it up immediately. It's so intuitive, even my oldest barber loves using it."
                                    </blockquote>
                                </div>
                                <div className="flex items-center justify-between text-sm">
                                    <span className="text-accent font-medium">4 months using FolioCuts</span>
                                    <span className="text-foreground-muted">9 staff members</span>
                                </div>
                            </div>

                            {/* Testimonial 6 - ROI Focus */}
                            <div className="bg-background rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow w-96 flex-shrink-0">
                                <div className="flex items-center mb-6">
                                    <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mr-4">
                                        <span className="text-primary text-xl">👨‍💼</span>
                                    </div>
                                    <div>
                                        <h4 className="font-headings font-bold text-primary">Peter Kamau</h4>
                                        <p className="text-sm text-foreground-muted">Owner, Sharp Cuts Eldoret</p>
                                    </div>
                                </div>
                                <div className="mb-6">
                                    <div className="flex text-secondary mb-3">
                                        <span>⭐⭐⭐⭐⭐</span>
                                    </div>
                                    <blockquote className="font-body text-foreground-muted leading-relaxed">
                                        "FolioCuts paid for itself in the first month. <strong className="text-accent">Saved 15 hours</strong> per week on bookkeeping alone. Plus the loyalty system brought back so many old customers."
                                    </blockquote>
                                </div>
                                <div className="flex items-center justify-between text-sm">
                                    <span className="text-accent font-medium">7 months using FolioCuts</span>
                                    <span className="text-foreground-muted">6 staff members</span>
                                </div>
                            </div>
                        </div>

                        {/* Duplicate set for seamless loop */}
                        <div className="flex space-x-6 min-w-max">
                            {/* Duplicate Testimonial 4 */}
                            <div className="bg-background rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow w-96 flex-shrink-0">
                                <div className="flex items-center mb-6">
                                    <div className="w-12 h-12 bg-secondary/20 rounded-full flex items-center justify-center mr-4">
                                        <span className="text-secondary text-xl">👨‍💼</span>
                                    </div>
                                    <div>
                                        <h4 className="font-headings font-bold text-primary">David Ochieng</h4>
                                        <p className="text-sm text-foreground-muted">Owner, Prestige Barbers Nairobi</p>
                                    </div>
                                </div>
                                <div className="mb-6">
                                    <div className="flex text-secondary mb-3">
                                        <span>⭐⭐⭐⭐⭐</span>
                                    </div>
                                    <blockquote className="font-body text-foreground-muted leading-relaxed">
                                        "I never knew my peak hours or which services were most profitable. Now I make data-driven decisions. <strong className="text-accent">Revenue is up 28%</strong> and I've optimized my staff scheduling perfectly."
                                    </blockquote>
                                </div>
                                <div className="flex items-center justify-between text-sm">
                                    <span className="text-accent font-medium">10 months using FolioCuts</span>
                                    <span className="text-foreground-muted">15 staff members</span>
                                </div>
                            </div>

                            {/* Duplicate Testimonial 5 */}
                            <div className="bg-background rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow w-96 flex-shrink-0">
                                <div className="flex items-center mb-6">
                                    <div className="w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center mr-4">
                                        <span className="text-accent text-xl">👩‍💼</span>
                                    </div>
                                    <div>
                                        <h4 className="font-headings font-bold text-primary">Mary Njeri</h4>
                                        <p className="text-sm text-foreground-muted">Owner, Style Studio Nakuru</p>
                                    </div>
                                </div>
                                <div className="mb-6">
                                    <div className="flex text-secondary mb-3">
                                        <span>⭐⭐⭐⭐⭐</span>
                                    </div>
                                    <blockquote className="font-body text-foreground-muted leading-relaxed">
                                        "I was worried about learning new technology, but setup took literally <strong className="text-secondary">3 minutes</strong>. My staff picked it up immediately. It's so intuitive, even my oldest barber loves using it."
                                    </blockquote>
                                </div>
                                <div className="flex items-center justify-between text-sm">
                                    <span className="text-accent font-medium">4 months using FolioCuts</span>
                                    <span className="text-foreground-muted">9 staff members</span>
                                </div>
                            </div>

                            {/* Duplicate Testimonial 6 */}
                            <div className="bg-background rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow w-96 flex-shrink-0">
                                <div className="flex items-center mb-6">
                                    <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mr-4">
                                        <span className="text-primary text-xl">👨‍💼</span>
                                    </div>
                                    <div>
                                        <h4 className="font-headings font-bold text-primary">Peter Kamau</h4>
                                        <p className="text-sm text-foreground-muted">Owner, Sharp Cuts Eldoret</p>
                                    </div>
                                </div>
                                <div className="mb-6">
                                    <div className="flex text-secondary mb-3">
                                        <span>⭐⭐⭐⭐⭐</span>
                                    </div>
                                    <blockquote className="font-body text-foreground-muted leading-relaxed">
                                        "FolioCuts paid for itself in the first month. <strong className="text-accent">Saved 15 hours</strong> per week on bookkeeping alone. Plus the loyalty system brought back so many old customers."
                                    </blockquote>
                                </div>
                                <div className="flex items-center justify-between text-sm">
                                    <span className="text-accent font-medium">7 months using FolioCuts</span>
                                    <span className="text-foreground-muted">6 staff members</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom CTA Section */}
                <div className="text-center">
                    <div className="bg-gradient-to-r from-primary to-accent rounded-3xl p-8 md:p-12 text-white">
                        <h3 className="font-headings text-2xl md:text-3xl font-bold mb-4">
                            Join These Successful Barbershop Owners
                        </h3>

                        <p className="font-body text-white/90 text-lg mb-8 max-w-2xl mx-auto">
                            Don't just take our word for it. Start your free trial today and see why
                            barbershop owners across Kenya are choosing FolioCuts to grow their business.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                            <button className="px-8 py-4 bg-secondary text-primary font-semibold rounded-lg hover:bg-secondary-light transition-colors shadow-lg">
                                Start Your Success Story
                            </button>

                            <div className="flex items-center text-white/80">
                                <span className="mr-2">🎯</span>
                                <span className="text-sm">Join 50+ happy barbershops</span>
                            </div>
                        </div>

                        {/* Trust Badges */}
                        <div className="flex items-center justify-center space-x-8 mt-8 pt-8 border-t border-white/20">
                            <div className="flex items-center text-white/80">
                                <span className="mr-2">🚀</span>
                                <span className="text-sm">Quick 3-min setup</span>
                            </div>
                            <div className="flex items-center text-white/80">
                                <span className="mr-2">💳</span>
                                <span className="text-sm">No credit card needed</span>
                            </div>
                            <div className="flex items-center text-white/80">
                                <span className="mr-2">📞</span>
                                <span className="text-sm">24/7 support included</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}