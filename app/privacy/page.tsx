import type { Metadata } from "next";
import ContactCta from "@/components/contact/contact-cta";
import Footer from "@/components/homepage/footer";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How FolioCuts collects, uses, and protects your personal information. Read our privacy policy.",
  alternates: { canonical: "/privacy" },
};

export default function PrivacyPage() {
  return (
    <>
      <main id="main-content">
        <div className="legal-page">
          <div className="container">
            <div className="legal-header">
              <h1>Privacy Policy</h1>
              <p className="legal-date">Last updated: 21 September 2026</p>
            </div>
            <div className="legal-content">
              <h2>1. Information We Collect</h2>
              <p>
                We collect information to provide and improve FolioCuts for your
                barbershop or salon. The types of information we collect include:
              </p>
              <ul>
                <li>
                  Personal Information: We may collect personal information such
                  as your name, email address, phone number, and other contact
                  information when you interact with us, sign up for our
                  services, or communicate with our team.
                </li>
                <li>
                  Usage Data: We automatically collect information about how you
                  interact with our website, products, and services, including
                  your IP address, browser type, device information, and pages
                  visited.
                </li>
                <li>
                  Cookies and Similar Technologies: We may use cookies, web
                  beacons, and other tracking technologies to collect information
                  about your browsing behaviour and preferences on our website.
                </li>
              </ul>

              <h2>2. How We Use Your Information</h2>
              <p>
                We may use the information we collect for the following purposes:
              </p>
              <ul>
                <li>
                  To provide and improve our products and services.
                </li>
                <li>
                  To communicate with you about your account, inquiries, and
                  customer support requests.
                </li>
                <li>
                  To personalise your experience and show information relevant
                  to your account and shop.
                </li>
                <li>
                  To analyse trends, track usage data, and improve the
                  performance and functionality of our website and services.
                </li>
                <li>
                  To comply with legal obligations and enforce our terms and
                  policies.
                </li>
              </ul>

              <h2>3. Information Sharing and Disclosure</h2>
              <p>
                We may share your information with third parties for the
                following purposes:
              </p>
              <ul>
                <li>
                  With service providers and partners who assist us in delivering
                  our products and services.
                </li>
                <li>
                  With legal authorities or government agencies in response to
                  lawful requests or to comply with legal obligations.
                </li>
                <li>
                  In connection with a business transaction, such as a merger,
                  acquisition, or sale of assets, where your information may be
                  transferred to the new entity.
                </li>
              </ul>

              <h2>4. Data Security</h2>
              <p>
                We implement appropriate technical and organisational measures to
                protect the security and confidentiality of your personal
                information. However, no method of transmission over the internet
                or electronic storage is entirely secure, and we cannot guarantee
                absolute security.
              </p>

              <h2>5. Your Rights and Choices</h2>
              <p>
                You have the right to access, correct, or delete your personal
                information. You may also opt-out of receiving promotional
                communications from us by following the instructions provided in
                such communications.
              </p>

              <h2>6. Children&apos;s Privacy</h2>
              <p>
                Our website, products, and services are not intended for children
                under the age of 13. We do not knowingly collect personal
                information from children under 13 years of age. If you believe
                we have collected personal information from a child under 13,
                please contact us immediately.
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
