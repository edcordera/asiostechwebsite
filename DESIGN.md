# Hermes Design Reference

This document captures the current visual language used across Hermes so future apps can reuse the same tokens instead of re-deriving them from screens.

It is a snapshot of the codebase as of 2026-05-04. The current styling source of truth is split across:

- `packages/shared/src/colors.ts`
- `apps/desktop/src/renderer/index.css`
- `apps/desktop/tailwind.config.js`
- `apps/intake/src/screens/*`
- `apps/mobile/src/screens/*`
- `apps/t45/src/screens/*`

## Canonical Brand Tokens

These are the only cross-app tokens already centralized in `packages/shared/src/colors.ts`.

| Token | Value | Usage |
|---|---|---|
| `accent` | `#C8102E` | Primary Hermes brand red, main CTA color |
| `accentHover` | `#E01333` | Hover state in dark desktop theme |
| `success` | `#2DA44E` | Success and positive completion |
| `warning` | `#D4A72C` | Warning state |
| `error` | `#CF222E` | Error state |

## Desktop Theme Tokens

Desktop is the only app with a formal theme system. Tokens live in `apps/desktop/src/renderer/index.css` and are surfaced to Tailwind through `apps/desktop/tailwind.config.js`.

### Dark Theme

| Token | Value |
|---|---|
| `--bg-base` | `#1A1A1D` |
| `--bg-surface` | `#242428` |
| `--bg-elevated` | `#333339` |
| `--bg-hover` | `#3C3C43` |
| `--bg-active` | `#4A4A52` |
| `--text-primary` | `#F5F5F9` |
| `--text-secondary` | `#C0C0C6` |
| `--text-muted` | `#9C9CA3` |
| `--text-quaternary` | `#6C6C73` |
| `--border` | `rgba(255,255,255,0.10)` |
| `--border-secondary` | `rgba(255,255,255,0.06)` |
| `--border-hover` | `rgba(255,255,255,0.15)` |
| `--border-active` | `rgba(255,255,255,0.20)` |
| `--accent` | `#C8102E` |
| `--accent-hover` | `#E01333` |
| `--accent-muted` | `rgba(200,16,46,0.40)` |
| `--accent-subtle` | `rgba(200,16,46,0.15)` |
| `--semantic-success` | `#2DA44E` |
| `--semantic-warning` | `#D4A72C` |
| `--semantic-error` | `#CF222E` |
| `--shadow-sm` | `0 1px 2px rgba(0,0,0,0.3)` |
| `--shadow-md` | `0 4px 12px rgba(0,0,0,0.4)` |
| `--shadow-lg` | `0 8px 24px rgba(0,0,0,0.5)` |
| `--radius-sm` | `6px` |
| `--radius-md` | `10px` |
| `--radius-lg` | `16px` |

### Light Theme

| Token | Value |
|---|---|
| `--bg-base` | `#F5F5F7` |
| `--bg-surface` | `#FFFFFF` |
| `--bg-elevated` | `#F0F0F2` |
| `--bg-hover` | `#E8E8EC` |
| `--bg-active` | `#DDDDE1` |
| `--text-primary` | `#1A1A1D` |
| `--text-secondary` | `#6C6C73` |
| `--text-muted` | `#9C9CA3` |
| `--text-quaternary` | `#C0C0C6` |
| `--border` | `rgba(0,0,0,0.10)` |
| `--border-secondary` | `rgba(0,0,0,0.06)` |
| `--border-hover` | `rgba(0,0,0,0.15)` |
| `--border-active` | `rgba(0,0,0,0.20)` |
| `--accent` | `#C8102E` |
| `--accent-hover` | `#A80D26` |
| `--accent-muted` | `rgba(200,16,46,0.30)` |
| `--accent-subtle` | `rgba(200,16,46,0.08)` |
| `--semantic-success` | `#2DA44E` |
| `--semantic-warning` | `#D4A72C` |
| `--semantic-error` | `#CF222E` |
| `--shadow-sm` | `0 1px 2px rgba(0,0,0,0.06)` |
| `--shadow-md` | `0 4px 12px rgba(0,0,0,0.08)` |
| `--shadow-lg` | `0 8px 24px rgba(0,0,0,0.12)` |
| `--radius-sm` | `6px` |
| `--radius-md` | `10px` |
| `--radius-lg` | `16px` |

### Desktop Utility Tokens

| Token | Dark | Light | Purpose |
|---|---|---|---|
| `--timer-amber-bg` | `rgba(250, 204, 21, 0.12)` | `rgba(180, 83, 9, 0.07)` | Timer warning surface |
| `--timer-amber-border` | `rgba(250, 204, 21, 0.20)` | `rgba(180, 83, 9, 0.38)` | Timer warning border |
| `--timer-amber-label` | `#facc15` | `#b45309` | Timer label |
| `--timer-amber-value` | `#fef08a` | `#78350f` | Timer value |
| `--timer-amber-shadow` | `none` | `0 0 10px rgba(180, 83, 9, 0.18)` | Timer emphasis |
| `--chart-grid-stroke` | `rgba(255,255,255,0.10)` | `rgba(0,0,0,0.10)` | Chart grid |

## Shared Palette Already Reused Across Apps

These colors appear repeatedly in Desktop, Intake, Capture, and T45.

| Role | Value | Notes |
|---|---|---|
| Primary red | `#C8102E` | Main CTA, active state, brand callout |
| Red hover | `#E01333` | Desktop dark hover |
| Red hover light | `#A80D26` | Desktop light hover |
| Success green | `#2DA44E` | Shared semantic success |
| Alt success green | `#22C55E` / `#22c55e` | Common in RN status UI |
| Warning amber | `#D4A72C` | Shared semantic warning |
| Alt warning amber | `#F59E0B` / `#f59e0b` | Common in RN status UI |
| Error red | `#CF222E` | Shared semantic error |
| Alt error red | `#EF4444` / `#ef4444` | Common in RN status UI |
| White | `#FFFFFF` / `#fff` | Text on dark or red surfaces |
| Near-white | `#F9FAFB` | Primary light text in RN apps |
| Light gray | `#E5E7EB` | Borders, light cards, dividers |
| Mid gray | `#D1D5DB` | Labels, secondary light text |
| Muted gray | `#9CA3AF` / `#9ca3af` | Secondary copy, inactive controls |
| Slate gray | `#6B7280` / `#6b7280` | Placeholders, tertiary text |
| Dark slate | `#374151` | Secondary text on light cards |
| Deeper slate | `#1F2937` / `#1f2937` | Dark text, panels |
| Deep neutral | `#111827` | Dark text, overlay surfaces |
| App background | `#1A1A1C` / `#1A1A1D` | Main dark app background |
| Surface dark | `#232326` / `#242428` | Inputs and surface blocks |
| Elevated dark | `#2B2B2F`, `#333339`, `#3A3A40` | Selected states and raised panels |

## Intake App Palette

The Intake iPad app is visually the most opinionated non-desktop app. Its styling is mostly hardcoded in screen files rather than centralized.

### Primary Intake Colors

| Role | Value | Common usage |
|---|---|---|
| App background | `#1A1A1C` | Screen background |
| Input/card surface | `#232326` | Inputs, cards, keypad keys |
| Selected dark tile | `#2B2B2F` | Active metadata choices |
| Secondary dark button | `#3A3A40` | Secondary actions |
| Primary CTA | `#C8102E` | Connect, start, next, submit |
| Primary CTA disabled | `#9B0B22` | Disabled connect button |
| Primary text on dark | `#F9FAFB` | Headings and button text |
| Secondary text on dark | `#D1D5DB` | Labels |
| Muted text on dark | `#9CA3AF` | Hints, captions |
| Placeholder text | `#6B7280` | Inputs |
| Positive value | `#2DA44E` | COG, success checkmarks |
| Alternative positive | `#22C55E` | Status badges |
| Error | `#CF222E` | Validation and failures |
| Light cards | `#F9FAFB` | Metadata tiles, title input |
| Light card border | `#E5E7EB` | Tile and form borders |
| Dark text on light cards | `#111827`, `#1F2937` | Tile labels and title input |

### Intake Status and Feedback Colors

| Value | Usage |
|---|---|
| `#F59E0B` | Sending status |
| `#EF4444` | Failed status, low multiplier warning |
| `#FECACA` | Failed status text |
| `#FCA5A5` | Loss/retry warning text |
| `#DC2626` | Critical retry button, active flaw cell |
| `#7F1D1D` | Dark destructive panel |
| `#60A5FA` | Blue utility accent in cost tag suggestions |
| `#E78A9A` | Selected discount text accent in session setup |

## Capture iPhone Palette

The Capture app uses a camera-first dark UI with translucent overlays.

### Core Capture Colors

| Role | Value |
|---|---|
| Camera background | `#000` |
| Overlay scrim | `rgba(0,0,0,0.45)` to `rgba(0,0,0,0.62)` |
| Main panel surface | `rgba(17,24,39,0.98)` |
| Shared accent | `#C8102E` |
| Accent surface | `rgba(200,16,46,0.24)` |
| Accent border | `rgba(200,16,46,0.75)` |
| Primary text | `#fff` |
| Secondary text | `#d1d5db` |
| Muted text | `#9ca3af` |
| Disabled text | `rgba(255,255,255,0.35)` to `rgba(255,255,255,0.55)` |
| Divider/border | `rgba(255,255,255,0.14)` to `rgba(255,255,255,0.20)` |
| Neutral control fill | `rgba(255,255,255,0.08)` to `rgba(255,255,255,0.16)` |

### Capture Status Colors

| Role | Value |
|---|---|
| Success | `#22c55e` |
| Success text | `#86efac`, `#dcfce7` |
| Success surface | `rgba(34,197,94,0.20)` / `rgba(34,197,94,0.28)` |
| Success border | `rgba(34,197,94,0.55)` / `rgba(34,197,94,0.75)` |
| Warning | `#f59e0b` |
| Warning text | `#fbbf24`, `#fcd34d` |
| Warning surface | `rgba(251,191,36,0.15)` |
| Error | `#ef4444`, `#f87171` |
| Error text | `#FECDD3` |
| Critical warning border | `#facc15` |

### Capture Temperature Tint Overlay

The camera white-balance preview tint uses dynamic overlays:

- Warm: `rgba(255, 106, 24, alpha)`
- Cool: `rgba(10, 120, 255, alpha)`

## T45 Palette

T45 largely mirrors the Capture palette and component structure, with a few extra overlays for preview streaming and telemetry.

### Additional T45-Specific Colors

| Role | Value |
|---|---|
| Preview grid red | `rgba(239, 68, 68, 0.95)` |
| Preview shade | `rgba(15, 23, 42, 0.28)` |
| Fitted frame blue | `rgba(96, 165, 250, 0.55)` |
| Chart/preview blue | `#60A5FA` |

## Typography

### Desktop

- Primary font stack: `Inter`, `system-ui`, `-apple-system`, `sans-serif`
- Theme-wide text hierarchy comes from utility classes plus tokenized colors.
- Common chart and metadata labels use muted grays rather than separate font variants.

### React Native Apps

- Intake and Capture mostly rely on platform default system fonts.
- T45 uses `Menlo` or `monospace` for telemetry-heavy readouts.
- Repeated weights:
  - `600` for secondary emphasis
  - `700` for labels and control text
  - `800` for CTAs, large values, and confirmation states
- Repeated sizes:
  - `12` to `14` for hints and labels
  - `16` to `18` for standard control text
  - `20` to `24` for primary buttons and numeric emphasis
  - `30` to `44` for confirmation and hero values

## Radius and Shape Language

### Desktop

| Token | Value |
|---|---|
| Small radius | `6px` |
| Medium radius | `10px` |
| Large radius | `16px` |

### React Native Apps

Repeated values today:

| Value | Common usage |
|---|---|
| `6` | Small metadata controls |
| `8` | Inputs, compact buttons, tiles |
| `10` | Secondary buttons, tabs |
| `12` | Primary cards and CTAs |
| `16` | Hero cards and scan frames |
| `18` to `19` | Floating control pills |
| `24` to `36` | Circular camera controls |
| `999` | Badge and pill shapes |

## Common Component Patterns

### Primary CTA

- Fill: `#C8102E`
- Text: `#fff`
- Weight: `800`
- Radius: usually `12`
- Min height:
  - Intake: `56` to `74`
  - Desktop: token-based, usually medium/large radius

### Secondary Dark Action

- Fill: `#3A3A40` or dark theme surface token
- Text: `#D1D5DB` or `var(--text-secondary)`
- Border: optional `#3A3A40` or theme border token

### Dark Input

- Fill: `#232326`
- Border: `#3A3A40`
- Text: `#F9FAFB`
- Placeholder: `#6B7280`
- Radius: `8`

### Light Selection Tile

- Fill: `#F9FAFB`
- Border: `#E5E7EB`
- Text: `#1F2937` or `#111827`
- Active fill in Intake metadata: `#2B2B2F`
- Active text: `#F9FAFB`

### Camera Overlay Panel

- Fill: `rgba(17,24,39,0.98)` or `rgba(0,0,0,0.62)`
- Border: translucent white
- Text: white primary, gray secondary
- Status colors: green/amber/red families above

## Current Design-System Gaps

These are the main inconsistencies that matter if Hermes styling will be reused across future apps:

1. Desktop has real theme tokens; Intake/Capture/T45 mostly do not.
2. Shared brand colors exist, but neutrals, spacing, radii, and status variants are duplicated as literals.
3. Some semantically identical colors use different values depending on app:
   - success: `#2DA44E` vs `#22C55E`
   - warning: `#D4A72C` vs `#F59E0B`
   - error: `#CF222E` vs `#EF4444`
4. Background neutrals are close but not unified:
   - `#1A1A1C`, `#1A1A1D`, `#232326`, `#242428`, `#2B2B2F`, `#333339`, `#3A3A40`

## Recommended Baseline For Reuse

If future apps need a single Hermes starter palette, use this first:

| Token | Value |
|---|---|
| `color.bg.base.dark` | `#1A1A1D` |
| `color.bg.surface.dark` | `#242428` |
| `color.bg.elevated.dark` | `#333339` |
| `color.bg.base.light` | `#F5F5F7` |
| `color.bg.surface.light` | `#FFFFFF` |
| `color.text.primary.dark` | `#F5F5F9` |
| `color.text.secondary.dark` | `#C0C0C6` |
| `color.text.muted.dark` | `#9C9CA3` |
| `color.text.primary.light` | `#1A1A1D` |
| `color.text.secondary.light` | `#6C6C73` |
| `color.brand.accent` | `#C8102E` |
| `color.brand.accent.hover.dark` | `#E01333` |
| `color.brand.accent.hover.light` | `#A80D26` |
| `color.semantic.success` | `#2DA44E` |
| `color.semantic.warning` | `#D4A72C` |
| `color.semantic.error` | `#CF222E` |
| `radius.sm` | `6px` |
| `radius.md` | `10px` |
| `radius.lg` | `16px` |


