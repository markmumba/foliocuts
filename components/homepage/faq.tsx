import FAQItem from "./faq-item";
const questions = [
  [
    "Is FolioCuts only for barbershops?",
    "FolioCuts is designed for barbershops and salons. You set up your own services, prices, staff, and commission rules to match the way your business works.",
  ],
  [
    "Do I need to download an app?",
    "Owners and receptionists can use the web dashboard in a browser. You don’t need to install an app to manage your shop.",
  ],
  [
    "Can I record both cash and M-Pesa?",
    "Yes. You can record cash payments and use the M-Pesa integration to request payment on a customer’s phone. M-Pesa setup requires your business payment details.",
  ],
  [
    "How are staff commissions calculated?",
    "You configure commission rates for each staff member’s services. When a transaction is completed, FolioCuts calculates and records the commission against those services.",
  ],
  [
    "How do customer loyalty rewards work?",
    "Set a visit-based reward for a service. FolioCuts tracks a customer’s progress using their phone number, so they don’t need a separate loyalty card or app.",
  ],
  [
    "Can I check on my shop when I’m away?",
    "Yes. Sign in to the web dashboard with an internet connection to view recorded transactions, customer activity, and staff performance.",
  ],
];
export default function FAQ() {
  return (
    <section
      id="faq"
      className="container section faq-section"
      aria-labelledby="faq-title"
    >
      <div className="section-heading">
        <p className="eyebrow">A FEW THINGS YOU MIGHT BE WONDERING</p>
        <h2 id="faq-title">
          Good questions.
          <br />
          Straightforward answers.
        </h2>
      </div>
      <div className="faq-grid">
        {questions.map(([question, answer]) => (
          <FAQItem key={question} question={question} answer={answer} />
        ))}
      </div>
    </section>
  );
}
