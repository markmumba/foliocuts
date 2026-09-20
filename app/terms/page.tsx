import type { Metadata } from "next";
import ContactCta from "@/components/contact/contact-cta";
import Footer from "@/components/homepage/footer";

export const metadata: Metadata = {
  title: "Terms & Conditions — FolioCuts",
  description:
    "Terms and conditions for using FolioCuts barbershop management platform. Read before signing up.",
};

export default function TermsPage() {
  return (
    <>
      <main id="main-content">
        <div className="legal-page">
          <div className="container">
            <div className="legal-header">
              <h1>Terms &amp; Conditions</h1>
              <p className="legal-date">Last Updated: 20 September, 2026</p>
            </div>
            <div className="legal-content">
              <h2>1. Introduction</h2>
              <p>
                You agree to use our products and services solely for lawful
                purposes and in accordance with these terms. You may not use our
                products or services for any illegal or unauthorised purpose.
              </p>
              <ul>
                <li>
                  Explanation of the purpose of the terms and conditions.
                </li>
                <li>
                  Identification of the parties involved (e.g., &ldquo;We,&rdquo;
                  &ldquo;Us,&rdquo; &ldquo;Our Company&rdquo; for the provider,
                  and &ldquo;You,&rdquo; &ldquo;Your,&rdquo; &ldquo;User&rdquo;
                  for the customer).
                </li>
              </ul>

              <h2>2. Intellectual Property</h2>
              <p>
                All content, trademarks, logos, and other intellectual property
                displayed on our website or included in our products and services
                are the property of FolioCuts or its licensors. You may not use,
                reproduce, or distribute any of our intellectual property without
                our prior written consent.
              </p>

              <h2>3. Privacy Policy</h2>
              <p>
                Your privacy is important to us. Our Privacy Policy explains how
                we collect, store, use, and protect your personal data. By using
                FolioCuts, you agree to the collection and use of information in
                accordance with our Privacy Policy.
              </p>
              <ul>
                <li>
                  Explanation of how user data is collected, stored, used, and
                  protected.
                </li>
                <li>
                  Compliance with data protection laws and regulations (e.g.,
                  Kenya Data Protection Act).
                </li>
                <li>
                  User consent for data processing activities, including opt-in
                  and opt-out options for marketing communications.
                </li>
              </ul>

              <h2>4. Disclaimer of Warranties</h2>
              <p>
                FolioCuts is provided on an &ldquo;as is&rdquo; and &ldquo;as
                available&rdquo; basis. We make no warranties, express or
                implied, regarding the reliability, accuracy, or availability of
                the platform. While we strive to maintain uptime and data
                accuracy, we cannot guarantee uninterrupted access to our
                services at all times.
              </p>

              <h2>5. Limitation of Liability</h2>
              <p>
                To the fullest extent permitted by law, FolioCuts and its
                affiliates shall not be liable for any indirect, incidental,
                special, consequential, or punitive damages arising from your use
                of our services. This includes, but is not limited to, loss of
                revenue, data, or business opportunities resulting from system
                downtime, errors, or unauthorised access.
              </p>

              <h2>6. Indemnification</h2>
              <p>
                You agree to indemnify and hold harmless FolioCuts, its officers,
                directors, employees, and agents from and against any claims,
                damages, losses, liabilities, and expenses arising out of your
                use of our services, violation of these terms, or infringement of
                any third-party rights.
              </p>

              <h2>7. Modifications to Terms</h2>
              <p>
                We reserve the right to modify these terms and conditions at any
                time. Changes will be effective immediately upon posting to our
                website. Your continued use of FolioCuts after any changes
                constitutes your acceptance of the new terms. We encourage you to
                review these terms periodically for any updates.
              </p>
            </div>
          </div>
        </div>
        <ContactCta />
      </main>
      <Footer />
    </>
  );
}
