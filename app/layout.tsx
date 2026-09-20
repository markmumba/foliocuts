import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});
export const metadata: Metadata = {
  title: "FolioCuts — Your shop, beautifully in order",
  description:
    "Run your barbershop with clarity. Track cash and M-Pesa payments, staff commissions, and customer loyalty with FolioCuts. Built for Kenyan barbershops and salons.",
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
      </body>
    </html>
  );
}
