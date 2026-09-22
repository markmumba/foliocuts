# Brag Plan: FolioCuts

## What is this app?
FolioCuts is a barbershop management platform built specifically for Kenyan shops — it handles staff commissions, M-Pesa and cash payments, and an invisible loyalty program, all in one place.

## The angle
The product's copy is quietly brilliant: "You take care of the cut. We help with the business." This is not a generic SaaS play. It's built for a barber who goes home tired, not for a startup founder. The video earns its watch by showing the actual UI cards — a commission breakdown with real KES amounts, an M-Pesa confirmation check, loyalty stamps counting toward a free cut — and letting the specificity land the joke. No buzzwords. No abstract diagrams. Just the product doing its thing.

## Hook (first 2-3 seconds)
Forest-green full-screen. The headline appears in two lines, staggered — first "Your shop." then line break, then "Beautifully in order." Large, confident Inter weight. The lime-green text selection flashes on "in order" as a single frame detail. Hold briefly then transition.

## Key moments (the middle)
- **Commission card**: Brian Otieno's breakdown — 3 service rows appear one by one (Haircut & beard KES 320, Classic haircut KES 200, Fade & styling KES 240), then the total "KES 760" lands. One-line caption: "Commission tracking. Automatic."
- **M-Pesa confirmation**: The M-PESA card appears — green check, KES 800.00, "Payment received." Caption: "M-Pesa. Cash. Either way."
- **Loyalty stamps**: The regulars club card — 5 scissors icons filled, 1 gift icon empty. "One more. One on us." is the best line in the product.

## Outro / punchline
Three stats pop in one by one — "50+ shops" · "25% avg revenue up" · "Built for Kenya" — on a warm paper (#f5f6f4) background. Then hard cut to forest green: FolioCuts name, large. "Start your free trial →" in lime. "No credit card. 3-minute setup." The last line is the setup cost's own absurdity as a quiet punch.

## User flow worth showing
none — landing-page only. The actual app lives at a separate web app URL. Centerpiece scenes recreate the landing page's product UI cards, which are the strongest visual material and show real-looking product output.

## Tone
- Preset: `polished`
- Creative direction: quiet confidence from behind the chair
- Interpretation: Restraint through specificity. High pace comes from tight cuts and confident typography — not from rushing text. Each product card arrives crisply and holds long enough to read. No hype language. The KES amounts do the bragging.

## Format: landscape — 1280x720
## Duration: 22 seconds

## Visual identity (from the project)
- Background: `#fff` (white) / `#063b26` (forest green, for hero/outro scenes)
- Accent / brand: `#cfff92` (lime green)
- Text: `#08251a` (ink)
- Muted: `#5b6961`
- Paper: `#f5f6f4` (warm off-white, stats scene)
- Display font: Inter (system fallback: Arial, sans-serif)
- Body font: Inter
- Strongest visual element: Commission breakdown card + M-Pesa confirmation card — both use the forest/lime/ink palette and show real KES amounts

## Share copy (draft)
Built a barbershop management tool for Kenya. Commission tracking, M-Pesa payments, and an invisible loyalty program — all in one place. "You take care of the cut."

## Audio direction
- Role: warm professional bed, minimal SFX
- Music: `happy-beats-business-moves-vol-12-by-ende-dot-app.mp3` (steady and clean, polished/cinematic)
- Music treatment: start at t=0, volume 0.32, fade slightly under final scene. Music bed runs under everything — present but not competing.
- Music cue guidance: preset available at `~/.claude/skills/brag/assets/music/cues/happy-beats-business-moves-vol-12-by-ende-dot-app.music-cues.json`. Tempo ~110 BPM. Target 3 strong cues: commission total at 8.74s, M-Pesa check at 13.11s (or nearest), stats final reveal at 17.47s. Beat grid for sequential items: commission rows at 6.56s / 7.64s / 8.74s (every other beat); stats at 14.20s / 15.84s / 17.47s (every other beat).
- Audio-reactive treatment: subtle; use music RMS/bass to let the forest-green hero scene glow breathe gently. No waveform visuals.
- SFX posture: sparse, 3-4 cues total. Motion-matched. Professional restraint.
- Audio-coupled moments:
  - Commission rows arriving one by one → card-place or drop sound per row (3 sounds)
  - M-Pesa checkmark landing → impactBell_heavy_000 at 13.11s (strong cue)
  - Stats popping in → drop or chip-lay per stat
  - Logo landing in outro → impactSoft_medium at 17.47s strong cue
- Restraint rule: No more than 4 SFX total. Nothing aggressive. No glitch sounds. Let the music carry.

## Storyboard

### Scene 1 — Hook — 3s (0:00-0:03)
Forest green (#063b26) full bleed. Inter, heavyweight display type.
- "Your shop." fades up from translateY(16px), opacity 0→1, duration 0.5s, at t=0.2s
- Line break. "Beautifully in order." fades up with same animation at t=0.5s
- Subtle lime glow on the text, very faint, audio-reactive to music RMS
- Hold copy settled from ~t=1.0s to end of scene
Sequential/interaction: two-line stagger (word group 1, then word group 2)
Audio intent: music starts warm, confident — sets the tone without drama
Audio-coupled idea: none — clean entrance, let the type land in silence under the music bed
Music: warm and steady, full volume from first frame
Transition mood: clean wipe or crossfade → Scene 2

### Scene 2 — Commission Breakdown — 6s (0:03-0:09)
White background (#fff). Forest-green accent details. Inter.
- Scene header (small eyebrow): "STAFF COMMISSIONS" fades in at t=0.3s into scene
- Card title: "Commission breakdown · Today" at t=0.6s
- Barber row: Avatar + "Brian Otieno · Barber · 3 completed services" at t=1.2s
- Row 1 — "Haircut & beard · 40% · KES 320" slides in at t=3.56s (beat-grid: 6.56s global)
- Row 2 — "Classic haircut · 40% · KES 200" slides in at t=4.64s (beat-grid: 7.64s global)
- Row 3 — "Fade & styling · 40% · KES 240" + Total "KES 760" land together at t=5.74s (strong cue: 8.74s global) // beat-locked: 8.74s
- Caption below card: "Commission tracking. Automatic." fades in at t=5.9s, holds to scene end
Sequential/interaction: 3 service rows arrive one by one on the beat grid
Audio intent: build confidence with each arriving row — each row arrival is a small satisfying tick
Audio-coupled idea: card-place or interface/drop_001 per row arrival (at global 6.56s, 7.64s, 8.74s)
Music: steady, building into the cue at 8.74s
Transition mood: soft crossfade → Scene 3

### Scene 3 — M-Pesa + Loyalty — 4.5s (0:09-0:13.5)
White background. Two product cards appear side by side or staggered.
- Left card: M-PESA confirmation — "M-PESA Payment confirmation" header, large green checkmark (✓), "KES 800.00", "Payment received". Slides in from left at t=0.3s into scene.
- Right card: Loyalty stamps — "The regulars club · LOYALTY", "Looking sharp, James.", 5 scissors + 1 gift stamp, "One more. One on us." Slides in from right at t=0.8s into scene.
- M-Pesa checkmark icon animates in (scale 0→1) at t=1.0s into scene (global 13.11s) — impactBell_heavy_000 fires here // beat-locked: 13.11s
- Scene caption: "M-Pesa. Cash. Either way." and "5 visits. 1 on us." appear as small labels under respective cards.
Sequential/interaction: left card in → right card in → checkmark pops → hold
Audio intent: the bell on the M-Pesa check is the emotional peak — a single warm ring that says "done"
Audio-coupled idea: impactBell_heavy_000 at global 13.11s when checkmark scales in; no other SFX in this scene
Music: rides the warm cue, then bridges into scene 4
Transition mood: clean crossfade → Scene 4

### Scene 4 — Stats — 4s (0:13.5-0:17.5)
Paper (#f5f6f4) warm background. Three stats pop in one by one, large centered type.
- "50+" label (large) + "Active shops" (small caption) appears at t=0.7s into scene (beat-grid: 14.20s global) // beat-grid: stat 1 at 14.20s
- "25%" label + "Avg. revenue increase" appears at t=2.34s into scene (beat-grid: 15.84s global) // beat-grid: stat 2 at 15.84s
- "Built for Kenya" (full-width display text, lime underline) appears at t=3.97s into scene (strong cue: 17.47s global) // beat-locked: 17.47s
Each stat label: scale from 0.92→1, opacity 0→1, duration 0.3s. Hold the full set on screen.
Sequential/interaction: 3 stats arrive one by one on alternating beats (not every beat — gives reading time)
Audio intent: rhythmic arrival reinforces momentum, "Built for Kenya" lands with the strong beat
Audio-coupled idea: interface/drop_001 per stat at its beat-grid moment; tone stays very polished — no stacking
Music: peak energy heading into outro
Transition mood: hard cut → Scene 5

### Scene 5 — Outro — 4.5s (0:17.5-0:22)
Forest green (#063b26) full bleed. Back to opening palette.
- "FolioCuts" wordmark fades in large at t=0.2s into scene, impactSoft_medium_001 fires at 17.47s // beat-locked: 17.47s (overlaps with scene 4 final stat — both at the same strong cue, transition happens here)
- Tagline: "Your shop. Beautifully in order." in small weight below at t=0.6s
- Lime CTA button: "Start your free trial →" slides up at t=1.2s
- "No credit card · 3-minute setup" in muted lime/forest text at t=1.8s
- Music fades to 0.15 volume over last 2s
Sequential/interaction: none — single composed reveal
Audio intent: warm resolution. Music bed fades while the logo holds the moment.
Audio-coupled idea: impactSoft_medium_001 on logo landing (soft, not jarring)
Music: fades gently under outro, let the logo land in near-silence
Transition mood: end

**Music mood for this video:** steady, warm, professional — confidence not noise
**Audio summary:** Music runs full from frame 0, three beat-locked SFX moments (commission rows, M-Pesa bell, outro logo), then music fades to near-silence under the final logo hold.

## Music cue guidance
- Track: `happy-beats-business-moves-vol-12-by-ende-dot-app.mp3`, ~110 BPM
- Preset path: `~/.claude/skills/brag/assets/music/cues/happy-beats-business-moves-vol-12-by-ende-dot-app.music-cues.json`
- Strong cue locks (3):
  - 8.74s — commission total row lands (// beat-locked)
  - 13.11s — M-Pesa checkmark pops (// beat-locked)
  - 17.47s — "Built for Kenya" + logo transition (// beat-locked)
- Beat-grid windows:
  - Commission rows: 6.56s / 7.64s / 8.74s (global) — every other beat at ~110 BPM, gives 0.55-1.1s read time per row
  - Stats: 14.20s / 15.84s / 17.47s (global) — every other beat, adequate read floor (~1.6s per stat)
- Restraint note: polished tone — cues are quiet accents, not punctuation marks. The bell at 13.11s is the one emotional peak. Everything else is a soft tick.
