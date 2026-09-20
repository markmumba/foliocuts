import { ArrowUpRight, Scissors } from "lucide-react";
import ContactCta from "@/components/contact/contact-cta";
import Footer from "@/components/homepage/footer";

export default function NotFound() {
  return (
    <>
      <main id="main-content">
        <section className="not-found-page">
          <div className="container">
            <div className="not-found-icon">
              <div className="not-found-broken">
                <div className="broken-left">
                  <Scissors size={40} />
                </div>
                <div className="broken-right">
                  <Scissors size={40} />
                </div>
              </div>
            </div>
            <h1>404 Not Found</h1>
            <p>
              The page you are looking for could not be found.
              <br />
              Please check the URL and try again.
            </p>
            <a className="button" href="/">
              Go back home <ArrowUpRight size={16} aria-hidden="true" />
            </a>
          </div>
        </section>
        <ContactCta />
      </main>
      <Footer />
    </>
  );
}
