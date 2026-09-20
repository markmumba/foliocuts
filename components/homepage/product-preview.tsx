import {
  ArrowUpRight,
  Check,
  ChevronDown,
  Scissors,
  Smartphone,
  Wallet,
} from "lucide-react";
export function Avatar({
  initials,
  tone = "peach",
}: {
  initials: string;
  tone?: string;
}) {
  return (
    <span className={`avatar avatar-${tone}`} aria-hidden="true">
      {initials}
    </span>
  );
}
export function RevenueChart() {
  return (
    <div
      className="revenue-chart"
      role="img"
      aria-label="Illustrative weekly revenue chart: revenue varies through the week and is highest on Saturday."
    >
      {[42, 64, 51, 76, 62, 100, 82].map((height, index) => (
        <div className="chart-column" key={index}>
          <div
            className={`chart-bar ${index === 5 ? "chart-bar-highlight" : ""}`}
            style={{ height: `${height}%` }}
          />
          <span>{["M", "T", "W", "T", "F", "S", "S"][index]}</span>
        </div>
      ))}
    </div>
  );
}
export default function ProductPreview() {
  return (
    <figure
      className="product-preview"
      aria-label="FolioCuts product preview with sample shop data"
    >
      <div className="preview-cards">
        <div className="preview-card activity-card">
          <div className="card-title">
            <span>
              <Scissors size={16} /> Today at the shop
            </span>
            <span className="tiny-label">3 visits</span>
          </div>
          <div className="activity-row">
            <Avatar initials="JK" />
            <div>
              <strong>James Kamau</strong>
              <small>Haircut & beard trim</small>
            </div>
            <span className="amount">
              800<small>KES</small>
            </span>
          </div>
          <div className="activity-row">
            <Avatar initials="AN" tone="lime" />
            <div>
              <strong>Alex Njoroge</strong>
              <small>Fade & styling</small>
            </div>
            <span className="amount">
              600<small>KES</small>
            </span>
          </div>
          <div className="activity-row">
            <Avatar initials="DM" tone="lavender" />
            <div>
              <strong>David Mwangi</strong>
              <small>Classic haircut</small>
            </div>
            <span className="amount">
              500<small>KES</small>
            </span>
          </div>
          <div className="card-bottom">
            <span>Every visit, accounted for.</span>
            <Check size={15} />
          </div>
        </div>
        <div className="preview-card revenue-card">
          <div className="card-title">
            <span>Business overview</span>
            <span className="period-label">
              This week <ChevronDown size={12} />
            </span>
          </div>
          <span className="revenue-label">Total collected</span>
          <div className="revenue-total">
            <span>
              <small>KES</small> 24,850
            </span>
            <span className="growth-pill">
              <ArrowUpRight size={13} /> 12.8%
            </span>
          </div>
          <RevenueChart />
          <div className="revenue-split">
            <span>
              <i /> M-Pesa <strong>18,350</strong>
            </span>
            <span>
              <i /> Cash <strong>6,500</strong>
            </span>
          </div>
        </div>
        <div className="preview-side">
          <div className="preview-card earnings-card">
            <div className="card-title">
              <span>
                <Wallet size={16} /> Staff earnings
              </span>
            </div>
            <div className="staff-person">
              <Avatar initials="BO" tone="lime" />
              <div>
                <strong>Brian Otieno</strong>
                <small>Commission today</small>
              </div>
            </div>
            <div className="earnings-total">
              KES 1,850 <span>Calculated for you</span>
            </div>
          </div>
          <div className="payment-notification">
            <span className="notification-icon">
              <Smartphone size={20} />
            </span>
            <div>
              <strong>M-Pesa payment received</strong>
              <small>KES 800 · Added to your records</small>
            </div>
            <span className="notification-check">
              <Check size={12} />
            </span>
          </div>
        </div>
      </div>
      <figcaption>
        YOUR SHOP AT A GLANCE <span>Product preview · Sample data</span>
      </figcaption>
    </figure>
  );
}
