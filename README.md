# Samuel Oluolamide Adebanjo — Portfolio Website

> **Live Domain**: [samueloluolamideadebanjo.com](https://samueloluolamideadebanjo.com)

A high-performance personal portfolio engineered with modern Next.js 14, Framer Motion spring physics, Lenis momentum smooth scrolling, and custom fluid cursor interactions inspired by **Terra Industries** and **DevFest Lagos**.

---

## ✨ Features & Architecture

- **Lenis Smooth Scroll**: Buttery momentum scrolling with zero jank.
- **Terra Industries Dual-Layer Fluid Cursor**:
  - Pinpoint inner focus dot + spring-trailing outer ring.
  - Interactive element morphing (expands and displays labels like `EXPLORE`, `DRAG`, `VIEW`).
- **DevFest Lagos Interactive Elements**:
  - Draggable & tossable skill badges with physics constraints.
  - Infinite continuous marquee tickers.
  - Interactive confetti explosion upon copying direct email.
- **3D Spotlight Hover Cards**: Real-time cursor light tracking & 3D tilt perspective.
- **Magnetic Buttons**: CTAs physically pulled toward the cursor on hover.
- **SEO & Social Optimization**: OpenGraph metadata, Twitter cards, and structured semantic HTML.

---

## 🛠️ Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Motion & Physics**: Framer Motion
- **Scroll Physics**: Lenis
- **Icons**: Lucide React
- **Confetti**: Canvas-Confetti

---

## 🚀 Getting Started

### 1. Run the Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) with your browser.

### 2. Build for Production
```bash
npm run build
npm run start
```

---

## 🌐 Deploying to samueloluolamideadebanjo.com

### Deploy on Vercel (Recommended):
1. Push your repository to GitHub:
   ```bash
   git init
   git add .
   git commit -m "feat: initial interactive portfolio"
   git remote add origin https://github.com/<your-username>/samuel-adebanjo-portfolio.git
   git push -u origin main
   ```
2. Import the project in [Vercel](https://vercel.com).
3. In **Project Settings &gt; Domains**, add:
   - `samueloluolamideadebanjo.com`
   - `www.samueloluolamideadebanjo.com`
4. Update your DNS records at your domain registrar (Namecheap, GoDaddy, Porkbun, etc.):
   - **A Record**: `@` &rarr; `76.76.21.21`
   - **CNAME Record**: `www` &rarr; `cname.vercel-dns.com`
