import Link from "next/link";

const frontendUrl: string = process.env.NEXT_PUBLIC_FRONTEND_URL || "https://foliocuts.blazor-movies.online/register";

export default function Footer() {
    return (
        <footer className="bg-primary text-white">
            <div className="bg-gradient-to-r from-primary to-accent py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="font-headings text-3xl md:text-4xl font-bold mb-4">
                        Transform Your Barbershop Today
                    </h2>

                    <p className="font-body text-white/90 text-xl mb-8 max-w-3xl mx-auto">
                        Join 50+ barbershops across Kenya who have already digitized their operations.
                        Start your free trial and see the difference in just 3 minutes.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
                        <Link href={frontendUrl} className="px-8 py-4 bg-secondary text-primary font-semibold rounded-lg hover:bg-secondary-light transition-colors shadow-lg">
                            Start Free Trial Now
                        </Link>

                        <button className="px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-primary transition-colors">
                            Schedule a Demo
                        </button>

                        <button className="px-8 py-4 border-2 border-white/50 text-white font-semibold rounded-lg hover:bg-white/10 transition-colors">
                            Call Us: +254 700 123 456
                        </button>
                    </div>

                    <div className="flex items-center justify-center space-x-8 text-white/80">
                        <div className="flex items-center">
                            <span className="mr-2">⚡</span>
                            <span className="text-sm">3-minute setup</span>
                        </div>
                        <div className="flex items-center">
                            <span className="mr-2">💳</span>
                            <span className="text-sm">No credit card required</span>
                        </div>
                        <div className="flex items-center">
                            <span className="mr-2">🇰🇪</span>
                            <span className="text-sm">Made in Kenya</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Main Footer Content */}
            <div className="py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

                        {/* Company Info */}
                        <div className="lg:col-span-1">
                            <div className="flex items-center mb-6">
                                <div className="w-10 h-10 bg-secondary rounded-lg flex items-center justify-center mr-3">
                                    <span className="text-primary font-bold text-xl">💈</span>
                                </div>
                                <h3 className="font-headings text-2xl font-bold">FolioCuts</h3>
                            </div>

                            <p className="font-body text-white/80 mb-6 leading-relaxed">
                                Kenya's first digital barbershop management system. Transforming
                                traditional barbershops with modern technology, one cut at a time.
                            </p>

                            <div className="space-y-2 text-white/80">
                                <div className="flex items-center">
                                    <span className="mr-3">📍</span>
                                    <span className="text-sm">Nairobi, Kenya</span>
                                </div>
                                <div className="flex items-center">
                                    <span className="mr-3">📧</span>
                                    <span className="text-sm">hello@foliocuts.co.ke</span>
                                </div>
                                <div className="flex items-center">
                                    <span className="mr-3">📞</span>
                                    <span className="text-sm">+254 700 123 456</span>
                                </div>
                            </div>

                            {/* Social Media */}
                            <div className="flex space-x-4 mt-6">
                                <a href="#" className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-secondary hover:text-primary transition-colors">
                                    <span>📘</span>
                                </a>
                                <a href="#" className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-secondary hover:text-primary transition-colors">
                                    <span>📷</span>
                                </a>
                                <a href="#" className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-secondary hover:text-primary transition-colors">
                                    <span>🐦</span>
                                </a>
                                <a href="#" className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-secondary hover:text-primary transition-colors">
                                    <span>💼</span>
                                </a>
                            </div>
                        </div>

                        {/* Product Links */}
                        <div>
                            <h4 className="font-headings text-lg font-bold mb-6">Product</h4>
                            <ul className="space-y-3">
                                <li>
                                    <a href="#features" className="font-body text-white/80 hover:text-secondary transition-colors">
                                        Features
                                    </a>
                                </li>
                                <li>
                                    <a href="#pricing" className="font-body text-white/80 hover:text-secondary transition-colors">
                                        Pricing
                                    </a>
                                </li>
                                <li>
                                    <a href="#how-it-works" className="font-body text-white/80 hover:text-secondary transition-colors">
                                        How It Works
                                    </a>
                                </li>
                                <li>
                                    <a href="#testimonials" className="font-body text-white/80 hover:text-secondary transition-colors">
                                        Customer Stories
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="font-body text-white/80 hover:text-secondary transition-colors">
                                        API Documentation
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="font-body text-white/80 hover:text-secondary transition-colors">
                                        System Status
                                    </a>
                                </li>
                            </ul>
                        </div>

                        {/* Support Links */}
                        <div>
                            <h4 className="font-headings text-lg font-bold mb-6">Support</h4>
                            <ul className="space-y-3">
                                <li>
                                    <a href="#" className="font-body text-white/80 hover:text-secondary transition-colors">
                                        Help Center
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="font-body text-white/80 hover:text-secondary transition-colors">
                                        Getting Started
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="font-body text-white/80 hover:text-secondary transition-colors">
                                        Training Videos
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="font-body text-white/80 hover:text-secondary transition-colors">
                                        Contact Support
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="font-body text-white/80 hover:text-secondary transition-colors">
                                        WhatsApp Support
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="font-body text-white/80 hover:text-secondary transition-colors">
                                        Community Forum
                                    </a>
                                </li>
                            </ul>
                        </div>

                        {/* Company Links */}
                        <div>
                            <h4 className="font-headings text-lg font-bold mb-6">Company</h4>
                            <ul className="space-y-3">
                                <li>
                                    <a href="#" className="font-body text-white/80 hover:text-secondary transition-colors">
                                        About Us
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="font-body text-white/80 hover:text-secondary transition-colors">
                                        Our Story
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="font-body text-white/80 hover:text-secondary transition-colors">
                                        Careers
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="font-body text-white/80 hover:text-secondary transition-colors">
                                        Press Kit
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="font-body text-white/80 hover:text-secondary transition-colors">
                                        Partner Program
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="font-body text-white/80 hover:text-secondary transition-colors">
                                        Become a Reseller
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            {/* Newsletter Signup */}
            <div className="border-t border-white/10 py-12">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="bg-white/5 rounded-2xl p-8 text-center">
                        <h3 className="font-headings text-2xl font-bold mb-4">
                            Stay Updated with FolioCuts
                        </h3>

                        <p className="font-body text-white/80 mb-6 max-w-2xl mx-auto">
                            Get the latest updates, barbershop management tips, and success stories
                            delivered to your inbox. No spam, just valuable insights.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-md mx-auto">
                            <input
                                type="email"
                                placeholder="Enter your email address"
                                className="flex-1 px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/60 focus:outline-none focus:border-secondary"
                            />
                            <button className="px-6 py-3 bg-secondary text-primary font-semibold rounded-lg hover:bg-secondary-light transition-colors">
                                Subscribe
                            </button>
                        </div>

                        <p className="text-white/60 text-xs mt-3">
                            Join 500+ barbershop owners getting weekly tips
                        </p>
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-white/10 py-8">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col md:flex-row justify-between items-center">
                        <div className="flex items-center mb-4 md:mb-0">
                            <p className="font-body text-white/60 text-sm">
                                © 2024 FolioCuts. All rights reserved.
                            </p>
                        </div>

                        <div className="flex items-center space-x-6">
                            <a href="#" className="font-body text-white/60 hover:text-secondary text-sm transition-colors">
                                Privacy Policy
                            </a>
                            <a href="#" className="font-body text-white/60 hover:text-secondary text-sm transition-colors">
                                Terms of Service
                            </a>
                            <a href="#" className="font-body text-white/60 hover:text-secondary text-sm transition-colors">
                                Cookie Policy
                            </a>
                            <a href="#" className="font-body text-white/60 hover:text-secondary text-sm transition-colors">
                                GDPR Compliance
                            </a>
                        </div>
                    </div>

                    {/* Kenya Compliance */}
                    <div className="mt-6 pt-6 border-t border-white/10 text-center">
                        <p className="font-body text-white/60 text-xs">
                            FolioCuts is a registered business in Kenya. We comply with all local data protection
                            and financial regulations. M-Pesa integration is officially licensed through Safaricom.
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
}
