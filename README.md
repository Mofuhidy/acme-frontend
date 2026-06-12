<a name="readme-top"></a>

<div align="center">
  <br/>
  <h3><b>whitepace SaaS Landing Page</b></h3>
</div>

# 📗 Table of Contents

- [📖 About the Project](#about-project)
  - [🛠 Built With](#built-with)
    - [Tech Stack](#tech-stack)
    - [Key Features](#key-features)
  - [🚀 Live Demo](#live-demo)
- [💻 Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Setup](#setup)
  - [Install](#install)
  - [Usage](#usage)
  - [Run tests](#run-tests)
  - [Deployment](#deployment)
- [👥 Authors](#authors)
- [🔭 Future Features](#future-features)
- [🤝 Contributing](#contributing)
- [⭐️ Show your support](#support)
- [🙏 Acknowledgements](#acknowledgements)
- [📝 License](#license)

# 📖 whitepace SaaS Landing Page <a name="about-project"></a>

**whitepace SaaS Landing Page** is a production-quality frontend implementation of the whitepace project management landing page. It is optimized to closely match design mockups across desktop, tablet, and mobile viewports.

## 🛠 Built With <a name="built-with"></a>

### Tech Stack <a name="tech-stack"></a>

<details>
  <summary>Client</summary>
  <ul>
    <li><a href="https://nextjs.org/">Next.js (App Router)</a></li>
    <li><a href="https://react.dev/">React.js</a></li>
    <li><a href="https://tailwindcss.com/">Tailwind CSS</a></li>
    <li><a href="https://typescriptlang.org/">TypeScript</a></li>
  </ul>
</details>

### Key Features <a name="key-features"></a>

- **Responsive Viewport Layouts**: Structured to transition smoothly across mobile, tablet, and desktop viewports, strictly aligning with design mockup specifications.
- **Scroll-Snapping Pricing Carousel**: Native touch-friendly swipe carousel on small viewports with custom interactive pagination dots.
- **Custom CSS Animations**: Interactivity featuring entrance reveal animations, hover lift effects, and floating integration graphics.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## 🚀 Live Demo <a name="live-demo"></a>

- [Live Demo Link](https://white-frontend-3232xdvre-mofuhidys-projects.vercel.app)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## 💻 Getting Started <a name="getting-started"></a>

To get a local copy up and running, follow these steps.

### Prerequisites

You need Node.js (v18.x or later) installed on your system.

### Setup

Clone this repository to your desired folder:

```sh
  git clone https://github.com/mofuhidy/acme-frontend.git
  cd acme-frontend
```

### Install

Install all project dependencies with:

```sh
  npm install
```

### Usage

To run the local development server, execute:

```sh
  npm run dev
```

### Run tests

To run the landing page content contract tests, execute:

```sh
  npm run test
```

### Deployment

To deploy this project to Vercel, run:

```sh
  npx vercel --prod
```

## 🛠️ Technical Details <a name="technical-details"></a>

### Technical Summary
A modern Next.js (v16) web application structured as a high-fidelity responsive landing page for "whitepace", matching design mockups across mobile, tablet, and desktop viewports. Implements Tailwind CSS v4 for styling, fluid typography, and precise layout structure.

### Component Structure
- **Layout Components (`src/components/layout/`)**:
  - [navbar.tsx](src/components/layout/navbar.tsx): Fixed navigation header with mobile trigger drawer sheet.
  - [footer.tsx](src/components/layout/footer.tsx): Column links with interactive hover states, language picker, copyright details, and social SVG links.
  - [scroll-progress.tsx](src/components/layout/scroll-progress.tsx): Top scroll position indicator bar.
- **Section Components (`src/components/sections/`)**:
  - [hero.tsx](src/components/sections/hero.tsx): Heading, description, primary CTA button, Concentric Waves vector background, and mockup dashboard browser screen.
  - [trusted-logos.tsx](src/components/sections/trusted-logos.tsx): Client sponsor logos.
  - [features.tsx](src/components/sections/features.tsx): Feature details, image graphics, and the "100% your data" focus component.
  - [how-it-works.tsx](src/components/sections/how-it-works.tsx): Step-by-step process guidelines.
  - [statistics.tsx](src/components/sections/statistics.tsx): Key usage statistics highlights.
  - [integrations.tsx](src/components/sections/integrations.tsx): Collaboration integrations displaying brand logos with decorative wave graphics.
  - [pricing.tsx](src/components/sections/pricing.tsx): Interactive plan options featuring a swipeable carousel on mobile.
  - [testimonials.tsx](src/components/sections/testimonials.tsx): Carousel slider displaying customer feedback quotes.
  - [resources.tsx](src/components/sections/resources.tsx): Card grid containing blog articles.
  - [faq.tsx](src/components/sections/faq.tsx): Frequently Asked Questions expandable accordions.
  - [cta.tsx](src/components/sections/cta.tsx): Final CTA section with decorative CTA waves graphic.
- **UI Components (`src/components/ui/`)**:
  - `Button`, `Separator`, `Sheet`, `Accordion`: Standard modular Radix-based elements.
  - [reveal.tsx](src/components/ui/reveal.tsx): Intersection Observer component applying scroll entrance reveal animations.
  - [highlighted-heading.tsx](src/components/ui/highlighted-heading.tsx): Parses heading strings to wrap target phrases with a yellow hand-drawn double-stroke scribble highlight underline ([yellow-dash.tsx](src/components/ui/yellow-dash.tsx)).

### Animation Approach
- **Scroll Entrance Animations**: The `Reveal` component leverages the HTML5 Intersection Observer API to detect visibility, dynamically applying a fluid fade-and-rise entrance effect (`opacity` and `transform: translateY`) with a modular animation delay.
- **Micro-interactions**: Hover effects (e.g. lift transitions on cards using `transition duration-300 hover:-translate-y-1` and smooth color transitions on footer links to brand-yellow `#ffe492`).

### Assumptions & Trade-offs
- **Static Rendering**: Landing page data is defined statically in `landing-page.ts` to allow Next.js to pre-render the static HTML, maximizing Lighthouse performance scores while client components are cleanly scoped to interactive sections (Navbar toggles, carousel navigations).
- **Asset Optimization**: Standard brand logo image sizes are optimized with Next.js Image `sizes` and `fill` attributes, while decorative wave decorations are rendered as inline SVGs or loaded directly using next/image with exact dimensions to eliminate layout shifts.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## 👥 Authors <a name="authors"></a>

👤 **moFuhidy**

- GitHub: [@mofuhidy](https://github.com/mofuhidy)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## 🔭 Future Features <a name="future-features"></a>

- [ ] **Dark Mode Support**
- [ ] **Interactive FAQ Accordions**

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## 🤝 Contributing <a name="contributing"></a>

Contributions, issues, and feature requests are welcome!

Feel free to check the [issues page](https://github.com/mofuhidy/acme-frontend/issues).

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## ⭐️ Show your support <a name="support"></a>

If you like this project, please give it a ⭐️!

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## 🙏 Acknowledgements <a name="acknowledgements"></a>

We would like to thank the whitepace design team for providing the high-fidelity mockups.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## 📝 License <a name="license"></a>

This project is [MIT](./LICENSE) licensed.

<p align="right">(<a href="#readme-top">back to top</a>)</p>
