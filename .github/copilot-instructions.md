## Copilot instructions for BbaDesign

## Project Structure
- **Plain HTML files**: This is a static HTML project. Create separate HTML files for different pages and components.
- **Component organization**: Store reusable components in separate HTML files that can be included or referenced.
- **Minimal JavaScript**: Avoid JavaScript when possible. Use HTML and CSS-only solutions. Only add JavaScript when absolutely necessary.

## Styling (Tailwind CSS 4 + DaisyUI 5)
- **TailwindCSS v4**: Use utility-first classes exclusively; avoid inline styles and custom CSS. Import Tailwind using `@import "tailwindcss";` in CSS files.
- **CSS-first configuration**: Use `@theme` directive in CSS to define custom design tokens (colors, fonts, breakpoints) instead of JavaScript config files.
- **Modern CSS features**: Leverages CSS cascade layers, `color-mix()`, and registered custom properties for better performance.
- **Responsive design**: Apply mobile-first responsive utilities (`sm:`, `md:`, `lg:`, `xl:`, `2xl:`). Custom breakpoints like `3xl` can be added via `@theme`.
- **New variants**: Use `starting` variant for entry animations (e.g., `starting:open:opacity-0` for smooth transitions).
- **Container utility**: In v4, containers no longer have default `center` and `padding`. Apply these manually if needed using `mx-auto` and padding utilities.
- **DaisyUI v5**: Leverage prebuilt components (buttons, cards, modals, forms, navbars, drawers, badges, alerts, tooltips).
- **DaisyUI themes**: Apply themes using `data-theme` attribute on HTML element (e.g., `data-theme="light"`, `data-theme="dark"`, `data-theme="cupcake"`).
- **Component variants**: Use DaisyUI size variants (`btn-xs`, `btn-sm`, `btn-lg`) and color variants (`btn-primary`, `btn-secondary`, `btn-accent`, `btn-ghost`).
- **DaisyUI utilities**: Leverage utility classes like `glass`, `artboard`, `divider`, `stack`, `swap` for enhanced styling effects.

## Icons (Font Awesome)
- **Font Awesome icons**: Use Font Awesome classes for icons (e.g., `<i class="fa-solid fa-user"></i>`).
- **Icon styles available**: solid, regular, light, thin, duotone, brands, sharp variants.
- **Avoid inline SVG**: Prefer Font Awesome classes over custom SVG icons for consistency.

## Component Loading
- **Dynamic components**: Use `data-component` attribute to load HTML components dynamically.
- **Component syntax**: `<div data-component="components/filename.html"></div>` automatically loads the specified HTML file.
- **Automatic loading**: The `shared.js` file includes a `loadComponents()` function that runs on page load.
- **Component organization**: Store reusable components in the `components/` directory.

## Best Practices
- **Semantic HTML**: Use appropriate HTML5 semantic elements (`<header>`, `<nav>`, `<main>`, `<footer>`, `<article>`, `<section>`).
- **Accessibility**: Include proper ARIA labels, alt text for images, and semantic markup for screen readers.
- **Component modularity**: Create reusable HTML component files that can be composed into pages.
- **CSS-only interactions**: Prefer CSS `:hover`, `:focus`, `:checked` states and DaisyUI's built-in interactive components over JavaScript.
- **Progressive enhancement**: Ensure core functionality works without JavaScript.