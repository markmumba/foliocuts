import { Scissors } from "lucide-react";
export default function Brand() {
  return (
    <a className="brand" href="/" aria-label="FolioCuts home">
      <span className="brand-mark">
        <Scissors size={22} strokeWidth={1.8} aria-hidden="true" />
      </span>
      FolioCuts<span className="brand-period">.</span>
    </a>
  );
}
