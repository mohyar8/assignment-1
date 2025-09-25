# AI Usage Report

## Overview
During the development of this portfolio, AI tools were used *as assistants* to speed up brainstorming, catch small issues, and suggest refinements.  
All final code and design choices were *reviewed, simplified, and adapted* by me to match the assignment requirements and my personal style.

---

## Tools Used & Use Cases
- *ChatGPT* (for guidance and quick ideas)  
  - Brainstormed layout options (hero, about, projects, contact)  
  - Asked for accessibility tips (labels, focus states, reduced motion)  
  - Requested examples for responsive patterns using Flexbox
- *Cursor / Inline AI* (editor assistance)  
  - Inline suggestions for small CSS/HTML tweaks  
  - Quick refactors (rename classes, reduce repetition)
- *MDN Web Docs* (reference)  
  - Verified semantics, forms, media queries, and CSS best practices

*References*  
- ChatGPT: https://chat.openai.com/  
- Cursor: https://www.cursor.com/  
- MDN HTML: https://developer.mozilla.org/docs/Web/HTML  
- MDN CSS: https://developer.mozilla.org/docs/Web/CSS  
- MDN Responsive design: https://developer.mozilla.org/docs/Learn/CSS/CSS_layout/Responsive_Design

---

## What the AI Helped With (Examples)
- *UI/UX ideas:* chose an ivory/graphite palette and rounded “card” layout; then I customized spacing, borders, and shadows.  
- *Responsive layout:* compared grid vs flex. I selected *Flexbox* for project tiles and adjusted breakpoints manually.  
- *Code review:* spotted redundant CSS rules and encouraged using CSS variables (tokens) and clamp() for type scale.  
- *Accessibility touches:* added focus outlines, aria-live for form status, and honored prefers-reduced-motion.

---

## What I Changed/Owned
- Rewrote class names (site-, tile-, stack-) to avoid boilerplate and to keep the code readable.  
- Tuned spacing, radii, and shadows to fit a calmer aesthetic.  
- Simplified JS to only include:
  - Greeting by time of day  
  - Smooth scrolling  
  - Simple form message without any backend
- Verified every snippet against MDN and removed anything unnecessary.

---

## Benefits & Challenges
*Benefits*
- Faster exploration of layout and CSS patterns  
- Explicit reminders on accessibility and responsiveness  
- Quick sanity checks for edge cases

*Challenges*
- Some suggestions were broader than needed → I trimmed them down  
- Naming/style drift between suggestions → unified naming and structure manually  
- Ensuring assignment compliance → I aligned sections/features with the rubric

---

## Learning Outcomes
- Better understanding of responsive spacing with clamp() and flex patterns  
- Clearer separation of concerns (HTML structure, CSS tokens, small JS helpers)  
- Practical experience in *evaluating* AI suggestions and *modifying* them responsibly

---

## Responsible Use
- AI was used for *ideas, references, and review*, not for copying full files as-is.  
- All deliverables were *manually edited*, tested locally, and adapted to personal requirements and course constraints.