# Jamia Khanqah Sharif Landing Page

## Goal
Build a polished, fully responsive one-page website dedicated exclusively to Jamia-tul-Madina / Jamia Khanqah Sharif (Dawat-e-Islami), with a premium Islamic green, white, and subtle gold visual identity.

## Page structure
- Create a sticky header with the supplied Jamia logo, desktop navigation, an accessible mobile menu, and a prominent admissions/contact action.
- Build a welcoming first section with the Jamia name, education-focused message, primary action, and an animated visual composition featuring the supplied logo and campus imagery alongside polished placeholder classroom/faculty imagery.
- Add an About section covering the Jamia’s mission, spiritual environment, Islamic learning, contemporary education, and its specific local identity.
- Add a Board Positions and Achievements section with animated cards/counters. All unverified names, years, and numbers will be visibly identified as sample content rather than presented as facts.
- Add a Mudarse / Faculty section with tasteful generic profiles and roles, clearly prepared for later replacement with real teacher details.
- Add a responsive Campus Life gallery using optimized supplied visuals and polished placeholders, with restrained image zoom interactions.
- Add a footer with Dawat-e-Islami branding, quick navigation, social links, and copyright. Missing phone, email, address, and social URLs will use clear “details coming soon” treatment rather than invented information.

## Visual direction
- Use Islamic green `#005533` as the primary brand color, supported by emerald and deep green, clean white surfaces, and restrained gold accents.
- Pair an elegant traditional-feeling display typeface with a highly readable sans-serif body typeface.
- Keep the composition clean and contemporary, with subtle geometric Islamic detailing, crisp spacing, modest corner rounding, and strong contrast.
- Preserve the supplied logo as an authentic brand asset and crop the supplied campus screenshot to remove browser interface before displaying it.

## Motion and interaction
- Add smooth anchor scrolling and active, accessible navigation behavior.
- Use restrained entrance reveals, staggered content, animated counters, image transitions, and button feedback.
- Respect reduced-motion preferences and avoid animation that distracts from reading.
- Ensure the menu, links, calls to action, and gallery interactions work with keyboard and touch input.

## Responsive and quality checks
- Adapt navigation, typography, visual grids, faculty cards, achievement cards, and gallery layouts for mobile, tablet, and desktop.
- Prevent text clipping and visual overlap at narrow widths.
- Add descriptive image text, semantic page structure, and page-specific search/social metadata.
- Verify the finished page in live desktop and mobile views, including menu behavior, scrolling, animation, and image rendering.

## Technical details
- Implement the page at `/` using the existing TanStack Start and Tailwind CSS setup.
- Store the supplied logo and edited campus image through the project asset flow; use generated or neutral local placeholder visuals for missing photography.
- Use the project’s semantic design tokens for all colors and typography.
- Use lightweight CSS/Tailwind motion unless the existing dependencies already include Motion for React.
