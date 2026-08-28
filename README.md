# bdnk.design

Personal portfolio for **Brendan Keyworth** — Senior UI Engineer specializing in modern web applications, design systems, and frontend ergonomics.

Live site: [bdnk.design](https://bdnk.design)

---

## Technical Stack & Tooling

* **Bundler & Dev Server:** [Vite](https://vitejs.dev/) (vanilla static export targeting `dist/`)
* **Styling & Design Tokens:** [Tailwind CSS](https://tailwindcss.com/) with PostCSS & custom dark tokens
* **Typography:** [Instrument Sans](https://fonts.google.com/specimen/Instrument+Sans) (Editorial/Body) & [JetBrains Mono](https://fonts.google.com/specimen/JetBrains+Mono) (Code/Badges/Metadata)
* **Deployment:** [Firebase Hosting](https://firebase.google.com/docs/hosting) with SPA rewrites and immutable static caching

---

## Design Tokens (Precision Editorial Dark)

| Token | Hex | Usage |
| :--- | :--- | :--- |
| `canvas` | `#0E1111` | Primary site backdrop |
| `surface` | `#161A1A` | Core discipline cards and component panels |
| `borderSubtle` | `#232B2B` | Structural dividers and badge borders |
| `accent` | `#34D399` | Emerald/Mint highlight, status dot, and hover glow |
| `textPrimary` | `#F3F4F6` | Primary headers and high-contrast copy |
| `textMuted` | `#9CA3AF` | Supporting descriptions and metadata |

---

## Quick Start

### 1. Install Dependencies

```bash
npm install
```

### 2. Start Development Server

```bash
npm run dev
```

Local server starts at `http://localhost:3000`.

### 3. Build for Production

```bash
npm run build
```

Generates an optimized, minified static distribution in `dist/` (<7 kB total gzipped).

### 4. Deploy to Firebase Hosting

```bash
npm run deploy
```

---

## License

MIT © [Brendan Keyworth](https://bdnk.design)
