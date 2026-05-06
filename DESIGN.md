# Design Brief: Medhavi Physics Classes — Premium Dark Modern Theme

## Aesthetic Direction
Premium dark luxury tech applied to elite physics education branding. Bold navy base with warm gold accents, electric cyan highlights, and next-level glassmorphic effects. Showcase category: visual richness through depth layering, premium 3D animations, high-contrast typography, and ambient glow. Dark-mode-first design with zero compromise on contrast and legibility.

## Tone & Differentiation
**Tone:** Luxury dark tech, premium, bold, modern. **Differentiation:** Floating 3D geometric shapes (rotating atoms, orbiting particles) in hero; multi-layer gold-and-cyan glowing effects; physics quote carousel with animated transitions; high-contrast white headlines on navy; no photos in achievements section (counters only); multi-page modern routing; premium micro-interactions and entrance choreography.

## Color Palette (OKLCH)

| Token | Value | Purpose |
|-------|-------|----------|
| **Primary (Gold)** | `0.72 0.16 80` | Warm accent, CTAs, highlights, premium feel |
| **Accent (Cyan)** | `0.68 0.2 220` | Electric highlight, interactive states, focus rings |
| **Background (Navy)** | `0.08 0.01 270` | Deep dark base, luxurious and premium |
| **Card (Navy)** | `0.14 0.015 270` | Slightly elevated, glassmorphic containers |
| **Foreground (White)** | `0.96 0.02 60` | High-contrast text, max legibility |
| **Muted (Dark Navy)** | `0.25 0.015 270` | Secondary backgrounds, de-emphasis |
| **Destructive (Red)** | `0.55 0.22 25` | Alert states, errors |

## Typography
**Display font:** Space Grotesk (geometric, modern, bold tech presence). **Body font:** Inter (clean, premium, highly readable). **Mono font:** Geist Mono (technical, code aesthetic).

## Structural Zones

| Zone | Treatment | Glow Effect |
|------|-----------|-------------|
| **Header** | Transparent, dark card border-bottom | Subtle gold rim |
| **Hero** | Dark navy gradient, centered white title, gold subheading, white/cyan CTAs | 3D floating shapes, ambient gold+cyan glow |
| **Content Sections** | Navy background with `bg-card` alternation | Gold glow dividers, cyan accent accents |
| **Physics Quotes** | Carousel with dark cards, gold text highlights | Rotating entrance, pulse-glow animation |
| **Achievement Stats** | No photos—counters only, animated flip cards with gold borders | Gold inner glow, cyan highlights on hover |
| **CTA Buttons** | Gold primary, cyan secondary, navy destructive | Pulse-glow, hover brightness increase |
| **Floating Buttons** | Fixed position, dark card with gold/cyan glow | Pulse glow animation, high contrast |
| **Multi-page Nav** | Sticky dark header, cyan active indicator | Smooth route transitions |

## Shape Language & Spacing
**Border-radius:** Medium soft corners (`0.75rem` default, increased from 0.625rem). **Shadows:** Multi-layer gold+cyan glows for depth and premium feel. **Spacing:** Generous whitespace (2-3rem sections). **Backdrop:** `backdrop-filter: blur(20px)` for frosted glass. **Animations:** Premium entrance (0.8s fade-blur, 0.6s slide-up), floating rotate (4s loop), pulse-glow (3s loop).

## Component Patterns
**Cards:** Glass-card utility with dark background, gold border, dual-glow shadow. **Buttons:** Gold primary CTA, cyan accent, outline secondary, all with pulse-glow on hover. **Text:** White headlines on navy, gold subheadings, cyan callouts. **Badges:** Small caps, gold background, white text. **Quotes:** Centered, large serif-weight display text in gold, animated entrance.

## Motion & Choreography
- **Entrance:** Fade-in-blur (0.8s), slide-up (0.6s), staggered 120ms per element.
- **Ambient:** Float-rotate (4s), glow-pulse (3s), parallax on scroll.
- **Interactions:** Hover pulse-glow, focus cyan ring, active state brightness.
- **Scroll:** Cards animate in on viewport enter, 3D shapes parallax-rotate.

## Key Features
1. **Hero:** Dark navy gradient, white bold title, gold subheading, cyan + white CTAs, 3D rotating shapes background.
2. **Physics Quotes:** Carousel section with animated quote reveals in gold, smooth transitions.
3. **Achievement Counters:** No photos—stats only with gold borders, animated flip cards, cyan accents.
4. **Multi-page Navigation:** Home, About, Courses, Results, Study Materials, Contact routes.
5. **Glassmorphic Cards:** Dark base with gold/cyan glows, premium micro-interactions.
6. **Floating Buttons:** WhatsApp (bottom-right), Instagram (bottom-left), pulse-glow animation.
7. **Premium 3D Effects:** Rotating geometric shapes in hero, parallax scrolling, next-level animations.

## Constraints & Anti-Patterns
- No beige, brown, or light theme elements; fully dark-first.
- No low-contrast text; all foreground on background minimum 0.85 L difference.
- No flat design; every surface has gloss, glow, or depth.
- No garish animation; all motion is smooth, purposeful, premium.
- No raw hex colors; all colors use OKLCH CSS variables.
- No photos in achievements section; only animated counters.

## Responsive Breakpoints
- **Mobile:** Stack layout, hero 100% width, single-column content, large touch targets.
- **Tablet:** 2-column grids, hero 70% width, side-by-side stat cards.
- **Desktop:** Full multi-column, hero 50% width, optimal premium spacing.

## Signature Detail
Floating 3D geometric shapes (gold-outlined atoms, cyan-glowing orbits, rotating spheres) in hero background with smooth rotation and parallax. Layered gold and cyan glow effects throughout sections create premium ambient luxury. Physics quotes appear in an animated carousel with smooth reveal and slide transitions, rendered in large gold display text for maximum premium impact.
