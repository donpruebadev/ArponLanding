---
name: Sentinel Harpoon
colors:
  surface: '#fbf9fa'
  surface-dim: '#dbd9db'
  surface-bright: '#fbf9fa'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f5f3f4'
  surface-container: '#f0edee'
  surface-container-high: '#eae7e9'
  surface-container-highest: '#e4e2e3'
  on-surface: '#1b1b1d'
  on-surface-variant: '#44474c'
  inverse-surface: '#303032'
  inverse-on-surface: '#f2f0f1'
  outline: '#74777d'
  outline-variant: '#c4c6cc'
  surface-tint: '#525f71'
  primary: '#000000'
  on-primary: '#ffffff'
  primary-container: '#0f1c2c'
  on-primary-container: '#778598'
  inverse-primary: '#bac8dc'
  secondary: '#545e76'
  on-secondary: '#ffffff'
  secondary-container: '#d7e2ff'
  on-secondary-container: '#5a647c'
  tertiary: '#000000'
  on-tertiary: '#ffffff'
  tertiary-container: '#281804'
  on-tertiary-container: '#9a7f61'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#d6e4f9'
  primary-fixed-dim: '#bac8dc'
  on-primary-fixed: '#0f1c2c'
  on-primary-fixed-variant: '#3a4859'
  secondary-fixed: '#d7e2ff'
  secondary-fixed-dim: '#bbc6e2'
  on-secondary-fixed: '#101b30'
  on-secondary-fixed-variant: '#3c475d'
  tertiary-fixed: '#feddba'
  tertiary-fixed-dim: '#e0c1a0'
  on-tertiary-fixed: '#281804'
  on-tertiary-fixed-variant: '#584329'
  background: '#fbf9fa'
  on-background: '#1b1b1d'
  surface-variant: '#e4e2e3'
typography:
  display-hero:
    fontFamily: Anton
    fontSize: 72px
    fontWeight: '400'
    lineHeight: '1.1'
    letterSpacing: 0.02em
  headline-lg:
    fontFamily: Anton
    fontSize: 48px
    fontWeight: '400'
    lineHeight: '1.2'
  headline-lg-mobile:
    fontFamily: Anton
    fontSize: 32px
    fontWeight: '400'
    lineHeight: '1.2'
  nav-link:
    fontFamily: Space Grotesk
    fontSize: 16px
    fontWeight: '500'
    lineHeight: 24px
    letterSpacing: 0.05em
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  body-sm:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
  label-caps:
    fontFamily: Space Grotesk
    fontSize: 12px
    fontWeight: '700'
    lineHeight: 16px
    letterSpacing: 0.1em
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  base: 8px
  gutter: 24px
  margin-mobile: 16px
  margin-desktop: 64px
  container-max: 1280px
---

## Brand & Style
The design system is built on a narrative of **Technological Vigilance**. It positions the platform not just as a software tool, but as a specialized tactical instrument used to hunt and neutralize systemic corruption. The brand personality is authoritative, uncompromising, and highly precise.

The visual style utilizes **Modern Corporate Brutalism** mixed with **Tactile Data Visualization**. It employs heavy strokes, high-contrast typography, and a "monster hunter" metaphor where corruption is visualized as organic, chaotic entities (the monsters) being tracked and dissected by clean, geometric, and sharp-edged technology (the harpoon). The interface should feel like a high-tech command center: utilitarian yet premium, evoking a sense of safety through superior surveillance and analysis.

## Colors
This design system uses a cold, institutional palette to establish trust and authority. 

- **Primary (Deep Blue):** Used for core branding, deep backgrounds, and high-priority text. It represents the depth of the ocean where the "monsters" hide.
- **Secondary (Steel Blue):** Used for structural elements, borders, and secondary navigation.
- **Accent (Teal):** This is the "harpoon" color. It is used exclusively for actionable items, successful data matches, and "strike" indicators. It must stand out against the deep blues.
- **Surface & Background:** High-clarity grays ensure readability and a "clean room" feel for data analysis.

## Typography
The typography strategy creates a hierarchy between "The Mission" and "The Data." 

- **Display & Headlines:** Use **Anton** (as a high-impact alternative to Akrobat) for a condensed, powerful, and urgent look. It represents the "Arpón" striking its target.
- **Navigation & Metadata:** Use **Space Grotesk**. Its technical, geometric character reinforces the "GovTech" and "Hunter" metaphor, feeling like coordinates on a radar.
- **Body Text:** Use **Inter** for maximum legibility in complex reports and contract audits. It provides a neutral, professional balance to the aggressive display type.

## Layout & Spacing
The layout follows a **Rigid Tactical Grid**. It uses a 12-column system on desktop with generous margins to focus attention on the data "hunt" in the center.

- **Rhythm:** Spacing is strictly based on an 8px base unit.
- **Density:** High density is preferred for data tables and "monster" dossiers, while landing pages should use expansive whitespace (the "open ocean") to emphasize the impact of the headlines.
- **Responsiveness:** On mobile, columns collapse to a single stack, and margins tighten to 16px. Technical data should be presented in horizontal-scroll cards or simplified lists to maintain the "command center" feel without clutter.

## Elevation & Depth
In this design system, depth is achieved through **Tonal Layering** and **Technical Outlines** rather than soft shadows.

- **Base Layer:** The light background (#F8F9FA).
- **Surface Layer:** Cards and containers use the Surface color (#E6EBEB) with a subtle 1px border in Secondary Blue.
- **The "Scanner" Effect:** Use low-opacity Teal (#2EC4B6) glows only on active "tracking" elements.
- **Monsters:** Corruption imagery (monsters) should appear "behind" the UI grid, as if being viewed through a digital scope or x-ray. Use sharp, high-contrast borders for UI elements to separate them clearly from the organic chaos of the monster imagery.

## Shapes
The shape language is **Angular and Sharp**. 

We use "Soft" (0.25rem) rounding as the maximum threshold to avoid making the UI feel too friendly or "bubbly." The goal is to mimic the edge of a blade or a precision instrument. 
- **Buttons:** Sharp corners or very minimal 4px radius.
- **Data Points:** Hexagonal or diamond shapes for status indicators to reinforce the technical/military vibe.
- **Imagery:** Use diagonal clips or "viewfinder" corners on images of the monsters.

## Components
- **Buttons:** Primary buttons use the Accent Teal background with Primary Blue text. They should feel like "triggers." Hover states should invert the colors or increase the border weight.
- **Cards (Dossiers):** Used to display corruption cases (monsters). They feature a top-aligned label in Space Grotesk and a high-contrast image of the monster, overlayed with a technical grid.
- **Input Fields:** Thick 2px bottom borders in Secondary Blue. When focused, the border turns Accent Teal.
- **Status Chips:** Use heavy caps (Space Grotesk) with background tints: "Tracking" (Yellow), "Caught" (Accent Teal), "Escaped" (Red).
- **Data Tables:** High-density, monospaced-style Inter text. Use alternating row stripes in the Surface color to manage complexity.
- **The "Arpón" Divider:** A horizontal line that ends in a 45-degree arrow or harpoon head, used to separate major sections of content.