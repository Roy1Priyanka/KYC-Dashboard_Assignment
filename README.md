**# KYC Dashboard**

A modern, responsive Know Your Customer (KYC) dashboard built with Next.js 14, featuring real‑time style analytics, interactive charts, and a professional UI.

**✨ Highlights**

Modern UI: Clean, professional interface powered by Tailwind CSS.

Responsive: Mobile‑first layout with a collapsible sidebar and adaptive content.

Interactive Charts: Visualizations via Recharts (bar & pie) with tooltips.

Real‑time Style Stats: Trend indicators for New/Modified KYC counts.

End‑to‑End Status Tracking: Clear visibility into each KYC stage.

Progress Indicators: Category progress (RI/NRI) with accessible bars.

Mock API/Data: Self‑contained demo data shipped in the repo.

**🧱 Tech Stack**

Framework: Next.js 14 (App Router)

Language: TypeScript

Styling: Tailwind CSS

Charts: Recharts

Icons: lucide-react

Dev Server: Turbopack (fast HMR)

**📦 Getting Started**

Prerequisites

Node.js 18+

Package Manager: npm, yarn, pnpm, or bun

Installation

**# Clone the repo**

git clone <your-repository-url>
cd assignment

**# Install dependencies**

npm install
- or: yarn install
- or: pnpm install
- or: bun install

Development

npm run dev
- or: yarn dev / pnpm dev / bun dev

Open your browser at http://localhost:3000.

Production build

npm run build
npm run start

Tip: Next.js 14 with the App Router uses file‑based routing under src/app. Turbopack powers the dev server by default.

**🧭 App Overview**

1) Sidebar Navigation

Project logo (top)

Menu: Dashboard, Applications, Billing, Rate Card, Agreement Copy, Notices

Active item highlighting

Collapsible on smaller screens

2) Top Navigation Bar

Breadcrumbs

Search input

Time range selector (Today / This Month / Custom) + date picker

Notification bell

User profile (avatar + menu)

3) Main Dashboard

Total KYCs: "New KYC" and "Modified KYC" statistic cards with trend arrows

Bar Chart: Individual vs Non‑Individual comparison

Circular/Pie Chart: Solicited vs Unsolicited breakdown

Status Cards: Overview of KYC process states

Categories: RI & NRI progress bars

PAN & Data Stats: Solicited, Received, Consumed & related figures

**📈 Data Visualization**

Bar Chart: Compare Individual vs Non‑Individual

Pie Chart: Solicited vs Unsolicited

Progress Bars: Category‑wise progress

Trend Indicators: Percentage change with colored arrows

Mock Data

KYC Stats: total/new/modified

Statuses: six KYC status types

Chart Series: sample datasets

PAN Stats: solicited/received/consumed


**🔧 Project Structure**

src/
├── app/
│   ├── page.tsx          # Main dashboard page
│   ├── layout.tsx        # Root layout
│   └── globals.css       # Global styles
├── components/
│   ├── Sidebar.tsx       # Navigation sidebar
│   ├── TopNav.tsx        # Top navigation bar
│   ├── StatsCard.tsx     # KYC statistics cards
│   ├── BarChartComponent.tsx    # Bar chart component
│   ├── CircularChart.tsx        # Pie chart component
│   ├── StatusCard.tsx           # Status overview cards
│   └── ProgressBar.tsx          # Progress bar component
└── lib/
    ├── data.ts           # Mock data and types
    └── utils.ts          # Utility functions


**🎨 Design System**

Palette: Professional blues & neutral grays

Typography: Clear hierarchy, readable sizes

Spacing: Consistent padding & margins; roomy cards

Depth: Subtle shadows & rounded corners for separation

Motion: Smooth hover/focus/press transitions

Accessibility: Focus rings, semantic HTML, alt text on icons where needed


**📊 Visuals**

![KYC Dashboard Screenshot 1](https://github.com/Roy1Priyanka/KYC-Dashboard_Assignment/blob/main/Webpage1.png)
![KYC Dashboard Screenshot 2](https://github.com/Roy1Priyanka/KYC-Dashboard_Assignment/blob/main/Webpage2.png)

📱 Responsive Behavior

Desktop: Full sidebar & dense content layout

Tablet: Collapsible sidebar with overlay

Mobile: Hidden sidebar; hamburger menu + stacked cards

🚀 Roadmap

Planned enhancements:

Dark Mode (theme toggle)

Real API Integration (REST/GraphQL)

Export to PDF/Excel

Richer Tooltips + drill‑downs

Skeleton Loading states

Friendly Error boundaries

Authentication & role‑based access

Live Updates via WebSockets
