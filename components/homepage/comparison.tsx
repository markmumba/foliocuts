export default function Comparison() {
    return (
        <section className="py-20 bg-background">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <div className="inline-flex items-center px-4 py-2 rounded-full bg-accent/10 border border-accent/20 mb-6">
                        <span className="text-accent font-medium text-sm">
                            ⚖️ See the Difference
                        </span>
                    </div>

                    <h2 className="font-headings text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-6">
                        FolioCuts vs. Paper Ledgers & Excel
                    </h2>

                    <p className="font-body text-xl text-foreground-muted max-w-3xl mx-auto leading-relaxed">
                        Stop wasting time on manual processes. See how FolioCuts compares to 
                        traditional methods.
                    </p>
                </div>

                <div className="overflow-x-auto">
                    <table className="w-full border-collapse">
                        <thead>
                            <tr className="bg-neutral/30">
                                <th className="text-left p-4 font-headings font-semibold text-primary border-b-2 border-primary/20">
                                    Feature
                                </th>
                                <th className="text-center p-4 font-headings font-semibold text-foreground-muted border-b-2 border-neutral">
                                    Paper Ledgers
                                </th>
                                <th className="text-center p-4 font-headings font-semibold text-foreground-muted border-b-2 border-neutral">
                                    Excel/Spreadsheets
                                </th>
                                <th className="text-center p-4 font-headings font-semibold text-secondary border-b-2 border-secondary bg-secondary/5">
                                    FolioCuts
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="border-b border-neutral/20 hover:bg-neutral/10 transition-colors">
                                <td className="p-4 font-body text-primary font-medium">Setup Time</td>
                                <td className="p-4 text-center text-foreground-muted">N/A</td>
                                <td className="p-4 text-center text-foreground-muted">2-3 hours</td>
                                <td className="p-4 text-center font-semibold text-secondary bg-secondary/5">
                                    <span className="inline-flex items-center gap-2">
                                        <span>3 minutes</span>
                                        <span className="text-accent">✓</span>
                                    </span>
                                </td>
                            </tr>

                            <tr className="border-b border-neutral/20 hover:bg-neutral/10 transition-colors">
                                <td className="p-4 font-body text-primary font-medium">M-Pesa Integration</td>
                                <td className="p-4 text-center text-foreground-muted">❌</td>
                                <td className="p-4 text-center text-foreground-muted">❌</td>
                                <td className="p-4 text-center font-semibold text-secondary bg-secondary/5">
                                    <span className="text-accent">✅ STK Push</span>
                                </td>
                            </tr>

                            <tr className="border-b border-neutral/20 hover:bg-neutral/10 transition-colors">
                                <td className="p-4 font-body text-primary font-medium">Commission Calculation</td>
                                <td className="p-4 text-center text-foreground-muted">Manual</td>
                                <td className="p-4 text-center text-foreground-muted">Manual formulas</td>
                                <td className="p-4 text-center font-semibold text-secondary bg-secondary/5">
                                    <span className="text-accent">✅ Automatic</span>
                                </td>
                            </tr>

                            <tr className="border-b border-neutral/20 hover:bg-neutral/10 transition-colors">
                                <td className="p-4 font-body text-primary font-medium">Loyalty Program</td>
                                <td className="p-4 text-center text-foreground-muted">❌</td>
                                <td className="p-4 text-center text-foreground-muted">Manual tracking</td>
                                <td className="p-4 text-center font-semibold text-secondary bg-secondary/5">
                                    <span className="text-accent">✅ Automatic</span>
                                </td>
                            </tr>

                            <tr className="border-b border-neutral/20 hover:bg-neutral/10 transition-colors">
                                <td className="p-4 font-body text-primary font-medium">Real-Time Analytics</td>
                                <td className="p-4 text-center text-foreground-muted">❌</td>
                                <td className="p-4 text-center text-foreground-muted">Manual charts</td>
                                <td className="p-4 text-center font-semibold text-secondary bg-secondary/5">
                                    <span className="text-accent">✅ Live Dashboards</span>
                                </td>
                            </tr>

                            <tr className="border-b border-neutral/20 hover:bg-neutral/10 transition-colors">
                                <td className="p-4 font-body text-primary font-medium">Staff Performance Tracking</td>
                                <td className="p-4 text-center text-foreground-muted">Manual</td>
                                <td className="p-4 text-center text-foreground-muted">Complex formulas</td>
                                <td className="p-4 text-center font-semibold text-secondary bg-secondary/5">
                                    <span className="text-accent">✅ Individual Dashboards</span>
                                </td>
                            </tr>

                            <tr className="border-b border-neutral/20 hover:bg-neutral/10 transition-colors">
                                <td className="p-4 font-body text-primary font-medium">Mobile Access</td>
                                <td className="p-4 text-center text-foreground-muted">❌</td>
                                <td className="p-4 text-center text-foreground-muted">Limited</td>
                                <td className="p-4 text-center font-semibold text-secondary bg-secondary/5">
                                    <span className="text-accent">✅ Any Device</span>
                                </td>
                            </tr>

                            <tr className="border-b border-neutral/20 hover:bg-neutral/10 transition-colors">
                                <td className="p-4 font-body text-primary font-medium">Data Backup</td>
                                <td className="p-4 text-center text-foreground-muted">Physical storage</td>
                                <td className="p-4 text-center text-foreground-muted">Manual backup</td>
                                <td className="p-4 text-center font-semibold text-secondary bg-secondary/5">
                                    <span className="text-accent">✅ Automatic Daily</span>
                                </td>
                            </tr>

                            <tr className="border-b border-neutral/20 hover:bg-neutral/10 transition-colors">
                                <td className="p-4 font-body text-primary font-medium">Time to Record Service</td>
                                <td className="p-4 text-center text-foreground-muted">2-3 minutes</td>
                                <td className="p-4 text-center text-foreground-muted">1-2 minutes</td>
                                <td className="p-4 text-center font-semibold text-secondary bg-secondary/5">
                                    <span className="text-accent">✅ 10 seconds</span>
                                </td>
                            </tr>

                            <tr className="border-b border-neutral/20 hover:bg-neutral/10 transition-colors">
                                <td className="p-4 font-body text-primary font-medium">Error Rate</td>
                                <td className="p-4 text-center text-foreground-muted">High (manual)</td>
                                <td className="p-4 text-center text-foreground-muted">Medium (formula errors)</td>
                                <td className="p-4 text-center font-semibold text-secondary bg-secondary/5">
                                    <span className="text-accent">✅ Near Zero</span>
                                </td>
                            </tr>

                            <tr className="bg-gradient-to-r from-secondary/5 to-accent/5">
                                <td className="p-4 font-body text-primary font-bold">Monthly Cost</td>
                                <td className="p-4 text-center text-foreground-muted">KES 0</td>
                                <td className="p-4 text-center text-foreground-muted">KES 0</td>
                                <td className="p-4 text-center font-bold text-secondary bg-secondary/10">
                                    <span>KES 2,500 - 7,500</span>
                                    <div className="text-xs text-accent mt-1">Saves 15 hrs/week</div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <div className="mt-12 text-center">
                    <div className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-2xl p-8 border border-primary/20">
                        <h3 className="font-headings text-2xl font-bold text-primary mb-4">
                            Ready to Make the Switch?
                        </h3>
                        <p className="font-body text-foreground-muted mb-6 max-w-2xl mx-auto">
                            Join 50+ barbershops who've already made the switch from paper ledgers 
                            and Excel to FolioCuts. Start your free trial today.
                        </p>
                        <a
                            href="https://foliocuts-frontend-df8m.vercel.app"
                            target="_blank"
                            className="inline-flex items-center px-8 py-4 bg-secondary text-primary font-semibold rounded-lg hover:bg-secondary-light transition-colors shadow-lg"
                        >
                            <span>Start Free Trial</span>
                            <span className="ml-2">→</span>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}

