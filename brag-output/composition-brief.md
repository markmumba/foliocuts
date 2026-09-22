# Hyperframes Composition Brief: FolioCuts

## Objective
Create a short polished launch brag video for FolioCuts — a barbershop management SaaS built specifically for Kenyan shops.

## Output
- Composition directory: `brag-output/composition/`
- Rendered video: `brag-output/brag.mp4`
- Format: landscape — 1280x720
- Duration: 22 seconds

## Source Material
- Project root: `/Users/markianmumba/Documents/code/Fullstack/Digital barbershop/landing-page/`
- Primary files read: `components/homepage/hero.tsx`, `components/homepage/features.tsx`, `components/homepage/how-it-works.tsx`, `components/homepage/pricing.tsx`, `components/homepage/testimonials.tsx`, `app/globals.css`
- Product name: FolioCuts
- Tagline / strongest claim: "Your shop. Beautifully in order." / "You take care of the cut. We help with the business."
- Key UI to recreate:
  1. Commission breakdown card — Brian Otieno, 3 service rows (Haircut & beard KES 320 · Classic haircut KES 200 · Fade & styling KES 240), total KES 760, 40% rate per service
  2. M-Pesa payment confirmation card — green checkmark, KES 800.00, "Payment received", customer "James Kamau", service "Haircut & beard trim", status "Completed"
  3. Loyalty stamps card — "The regulars club", "Looking sharp, James.", 5 scissors stamps + 1 gift stamp (empty), "5 of 6 visits", "One more. One on us."
- Copy that must appear verbatim:
  - "Your shop. / Beautifully in order."
  - "Commission tracking. Automatic."
  - "M-Pesa. Cash. Either way."
  - "One more. One on us."
  - "Built for Kenya"
  - "Start your free trial →"
  - "No credit card · 3-minute setup"

## Creative Direction
- Tone preset: `polished`
- Creative direction: quiet confidence from behind the chair
- Interpretation: Restraint through specificity. Fast cuts and tight typography, but text holds long enough to read. The KES amounts and real barber names do the bragging — no hype language, no abstract diagrams. Each product card arrives crisply and settles. Polished means controlled, not slow.
- Angle: This is a product video for a barbershop owner in Nairobi who goes home tired. The video earns its watch by showing real-looking product output — not promises. Commission math. M-Pesa confirmation. Loyalty stamps.
- Hook: Forest green full-screen. "Your shop." / "Beautifully in order." in large Inter weight, two lines staggered.
- Outro / punchline: Logo on forest green → "Start your free trial →" in lime → "No credit card · 3-minute setup." Music fades.
- Avoid:
  - Generic SaaS language ("streamline", "workflow", "empower")
  - Abstract motion graphics or color wash scenes
  - Any visual redesign that departs from the forest-green/lime/ink palette
  - Rushing text off screen before it can be read

## Visual Identity
- Background: `#fff` (white — product card scenes) / `#063b26` (forest green — hook and outro scenes)
- Text: `#08251a` (ink)
- Accent: `#cfff92` (lime green)
- Muted text: `#5b6961`
- Paper / warm bg: `#f5f6f4` (stats scene)
- Display font: Inter (fallback: Arial, sans-serif)
- Body font: Inter
- Visual references:
  - Forest green + lime is the brand. Lime on forest green for CTAs and highlights.
  - Cards use white background, forest-green accents, ink text, subtle border in `#e1e6df`
  - Commission total row should visually feel like a "settled" moment — bold weight, green accent
  - M-Pesa card: use a green checkmark (circle with check) as the visual anchor
  - Loyalty stamps: 5 scissors icons (filled, forest green) + 1 gift icon (empty, outline only)

## Storyboard
Use `brag-output/brag-plan.md` as the creative contract.

Scene summary:
1. **Hook** — 3s — "Your shop. / Beautifully in order." on forest green
2. **Commission Breakdown** — 6s — Commission card, 3 rows arrive one by one (beat-grid), total KES 760 lands at strong cue 8.74s
3. **M-Pesa + Loyalty** — 4.5s — Two cards side by side; M-Pesa checkmark pops at strong cue 13.11s
4. **Stats** — 4s — "50+" · "25%" · "Built for Kenya" on paper bg, one by one on alternating beats
5. **Outro** — 4.5s — FolioCuts logo on forest green, lime CTA, music fades

## Audio
- Audio role: warm professional bed with 3-4 sparse SFX accents
- Audio arc: Music starts full and warm from frame 0; three brief SFX punctuate key reveals; music fades to near-silence under the final logo hold
- Music: `assets/music/happy-beats-business-moves-vol-12-by-ende-dot-app.mp3`
- Music treatment: data-volume="0.32", starts at 0, fades to 0.10 over last 2s of video (17.5-19.5s in the composition); steady warm bed throughout
- Music cue guidance: preset JSON at `~/.claude/skills/brag/assets/music/cues/happy-beats-business-moves-vol-12-by-ende-dot-app.music-cues.json`. Tempo ~110 BPM. Three strong cue locks: 8.74s (commission total), 13.11s (M-Pesa check), 17.47s (stats final + logo transition). Beat-grid for commission rows: 6.56s / 7.64s / 8.74s. Beat-grid for stats: 14.20s / 15.84s / 17.47s. All on alternating beats — adequate read time.
- Audio-reactive treatment: subtle; use music RMS to let the forest-green hero background breathe with a soft glow or warmth shift. Nothing aggressive. No waveform bars.
- Audio-coupled moments:
  - Commission rows 1/2/3 arriving → interface/drop_001 or casino/card-place at each beat-grid timestamp (6.56s, 7.64s, 8.74s) — soft, 0.65 volume
  - M-Pesa checkmark scaling in → impact/impactBell_heavy_000 at 13.11s — this is the one emotional peak, 0.75 volume
  - Stats 1/2/3 arriving → interface/drop_001 at 14.20s, 15.84s, 17.47s — same soft tick as commission rows, 0.60 volume
  - Logo landing → impact/impactSoft_medium_001 at ~17.5s — quiet, 0.55 volume
- SFX selection guidance: Use sfx-analysis.md at `~/.claude/skills/brag/assets/sfx/sfx-analysis.md`. Prefer low HF-risk files for repeated card arrivals. `drop_001` or `card-place-1` for the sequential rows. `impactBell_heavy_000` for the M-Pesa moment (the only resonant bell — used once). `impactSoft_medium_001` for logo landing (clean, not jarring).
- SFX analysis guidance: Use sfx-analysis.md/json at the skill's assets path. For polished/repeated moments (commission rows, stats), pick the softest-character drop or card-place sounds.
- Exact SFX choice: Hyperframes should choose filenames, timestamps, density, and volume based on the implemented animation and motion actual timings.
- Audio files: copy chosen music and SFX into `brag-output/composition/assets/`

## Hyperframes Instructions
Load: `hyperframes-core`, `hyperframes-animation`, `hyperframes-creative`, `hyperframes-keyframes`, `hyperframes-cli`. This is a `/brag` workflow — do not enter the Hyperframes intent interview or generic launch-video flow.

Requirements:
- Recreate the three product UI cards using HTML + CSS that matches the FolioCuts palette (forest green, lime, ink, paper, white). Do not screenshot the real site — build clean versions of the cards from the copy in this brief.
- Keep all text readable. The 3-row commission sequence must hold each row long enough to read (floor: ~0.8s settled per row).
- Total duration: 22 seconds.
- Include the planned music and SFX layer.
- Treat music cue hints as optional timing hints — readability and story come first.
- Beat-lock 3 major moments to the listed strong cues (within ±0.15s). Mark with `// beat-locked: Xs`.
- Beat-grid the sequential rows/stats (within ±0.10s). Mark with `// beat-grid: item X at Xs`.
- Wire at least one visual element (hero scene glow or background warmth) to audio-reactive RMS data.
- Run `npx hyperframes check` before render. Fix all errors including contrast.
