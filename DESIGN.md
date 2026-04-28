# Design Brief

## Direction
Cool Serene + Product-Focused Minimal — A trustworthy, approachable bike parts discovery platform with deep slate blue primary and warm cognac accents, eschewing cold tech aesthetics for human-centered minimalism.

## Tone
Refined minimalism with unexpected warmth: cool off-white grounds the interface while a warm cognac accent creates visual surprise against the slate blue primary, conveying both reliability and accessibility.

## Differentiation
Warm accent (cognac #9b6f47 / 0.58 0.14 40) against cool primary (slate #4a5f7f / 0.48 0.12 240) breaks the predictable all-cool tech aesthetic, signaling trustworthiness and inviting human interaction.

## Color Palette

| Token      | OKLCH           | Role                                    |
| ---------- | --------------- | --------------------------------------- |
| background | 0.98 0.008 230  | Cool off-white, airy canvas             |
| foreground | 0.18 0.015 230  | Dark slate for text, maintains contrast |
| card       | 1.0 0.004 230   | Pure white, elevated surfaces           |
| primary    | 0.48 0.12 240   | Deep slate blue, product-focused CTAs   |
| accent     | 0.58 0.14 40    | Warm cognac, highlights & interactions  |
| muted      | 0.94 0.008 230  | Subtle grey for secondary UI            |

## Typography
- Display: Space Grotesk — geometric clarity for headings, modern machinery aesthetic
- Body: General Sans — clean, highly legible at all sizes, trusted SaaS standard
- Mono: Geist Mono — technical specs and pricing
- Scale: hero `text-5xl md:text-7xl font-bold`, h2 `text-3xl md:text-5xl font-bold`, label `text-sm font-semibold tracking-widest`, body `text-base lg:text-lg`

## Elevation & Depth
Soft shadow hierarchy (0 2px 8px for cards, 0 8px 24px for elevated modals) conveys depth without drama; card backgrounds sit cleanly on cool background with subtle border (1px solid #e8e6e4).

## Structural Zones

| Zone    | Background              | Border                      | Notes                                        |
| ------- | ----------------------- | --------------------------- | -------------------------------------------- |
| Header  | bg-card (white)         | border-b border-border      | Fixed or sticky, shadow-sm, search bar hero  |
| Content | bg-background (cool bg) | —                           | Generous 24px+ gaps, alternating card zones  |
| Footer  | bg-muted (94% cool)     | border-t border-border      | Minimal, muted text, navigation              |

## Spacing & Rhythm
Generous 24px+ gaps between sections, 16px padding within cards, breathing room prioritized over density — each product card and UI element exists in solitary, uncluttered space.

## Component Patterns
- Buttons: rounded-md (8px), bg-primary or bg-accent, white text, lift-on-hover (transform -4px), no border
- Cards: rounded-md (8px), bg-card, shadow-sm (0 2px 8px), hover:lift-on-hover, border border-border (subtle)
- Badges: rounded-full, bg-muted, text-foreground, small text-xs

## Motion
- Entrance: fade-in + slide-up (translate +8px → 0) over 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94), staggered per section
- Hover: lift-on-hover (translateY -4px) over 0.3s smooth, buttons scale slight
- Decorative: product grid filter transitions (opacity 0.3s), scroll-triggered fade-in on product cards

## Constraints
- Light theme only, no dark mode
- No glassmorphism, neon colors, or heavy gradients
- All shadows are soft and warm-tinted (0.06–0.1 opacity)
- Radius is consistent at 8px (rounded-md), except pills at 9999px
- Font weights: light for secondary, regular for body, semibold/bold for hierarchy

## Signature Detail
Warm cognac accent sparingly applied to CTAs, filter pills, and highlights creates a branded accent that breaks the expected cool-only palette, making the interface feel carefully designed rather than algorithmically generated.

