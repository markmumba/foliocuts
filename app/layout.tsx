import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import HubSpotTracking from "@/components/analytics/hubspot-tracking";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});
export const metadata: Metadata = {
  metadataBase: new URL("https://foliocuts.markian.fit"),
  title: {
    default: "FolioCuts | Barbershop Management Software in Kenya",
    template: "%s | FolioCuts",
  },
  description:
    "Barbershop management software for Kenyan barbershops and salons. Track cash and M-Pesa payments, staff commissions, customer records, and loyalty in one place.",
  openGraph: {
    type: "website",
    locale: "en_KE",
    siteName: "FolioCuts",
    title: "FolioCuts | Barbershop Management Software in Kenya",
    description:
      "Manage payments, staff commissions, customer records, and loyalty with software built for Kenyan barbershops and salons.",
  },
};
export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={inter.variable}>
        <a className="skip-link" href="#main-content">
          Skip to content
        </a>
        <Navbar />
        {children}
        <HubSpotTracking />
      </body>
    </html>
  );
}
