import { ArrowUpRight, Check, Scissors } from "lucide-react";
import Brand from "@/components/brand";
import { loginUrl, registerUrl } from "@/lib/links";
import { CtaDoodle } from "@/components/homepage/doodles";
import CookieSettingsButton from "@/components/analytics/cookie-settings-button";
export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <section className="closing-cta" aria-labelledby="cta-title">
          <CtaDoodle />
          <div>
            <p className="eyebrow">YOUR CRAFT. YOUR TEAM. YOUR NEXT CHAPTER.</p>
            <h2 id="cta-title">
              A fresh start for
              <br />
              the business side.
            </h2>
            <p>
              More time for the work you love.
              <br />A clearer picture of the business you’re building.
            </p>
            <a className="button button-white" href={registerUrl}>
              Let’s get your shop in order{" "}
              <ArrowUpRight size={17} aria-hidden="true" />
            </a>
          </div>
          <div
            className="closing-visual"
            aria-label="A simpler end-of-day checklist"
          >
            <span className="closing-scissors">
              <Scissors size={30} aria-hidden="true" />
            </span>
            <h3>That’s a good day.</h3>
            <div>
              <Check size={18} /> Payments recorded
            </div>
            <div>
              <Check size={18} /> Commissions calculated
            </div>
            <div>
              <Check size={18} /> Regulars rewarded
            </div>
            <span>NOW, CALL IT A DAY.</span>
          </div>
        </section>
        <div className="footer-main">
          <div className="footer-about">
            <Brand />
            <p>
              For the business behind the chair.
              <br />
              Built for barbershops and salons in Kenya.
            </p>
          </div>
          <div className="footer-column">
            <h3>Explore</h3>
            <a href="/features">Features</a>
            <a href="/#how-it-works">How it works</a>
            <a href="/pricing">Pricing</a>
          </div>
          <div className="footer-column">
            <h3>Get started</h3>
            <a href={registerUrl}>Start free trial</a>
            <a href={loginUrl}>Log in to your shop</a>
            <a href="/contact">Contact us</a>
          </div>
          <div className="footer-column">
            <h3>Legal</h3>
            <a href="/privacy">Privacy Policy</a>
            <a href="/terms">Terms & Conditions</a>
            <CookieSettingsButton />
          </div>
        </div>
        <div className="footer-bottom">
          <span>
            © {new Date().getFullYear()} FolioCuts. All rights reserved.
          </span>
          <span>A little less admin. A better kind of busy.</span>
        </div>
      </div>
    </footer>
  );
}
