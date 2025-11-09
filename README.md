# Next.js MVP Template

A production-ready Next.js template featuring a landing page, dashboard, dark mode support, and smooth animations. Built with TypeScript and Tailwind CSS.

## ✨ Features

- 🌓 **Dark Mode** - Built-in theme management with smooth transitions
- 📱 **Responsive Design** - Mobile-first approach with Tailwind CSS
- 🎨 **Smooth Animations** - Powered by Framer Motion
- 🎯 **Landing Page** - Hero section, features, pricing, and CTAs
- 📊 **Dashboard** - Clean dashboard with stats and activity feed
- 🛡️ **TypeScript** - Full type safety
- ⚡ **Next.js 15** - Latest App Router features
- 🎭 **Modern UI** - Beautiful components and gradients

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- npm, yarn, or pnpm

### Installation

1. Clone the repository:
```bash
git clone https://github.com/filiksyos/launch-mvp-nextjs-supabase.git
cd launch-mvp-nextjs-supabase
```

2. Install dependencies:
```bash
npm install
# or
yarn install
# or
pnpm install
```

3. Start the development server:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📖 Project Structure

```
├── app/
│   ├── dashboard/        # Dashboard page
│   ├── globals.css       # Global styles and theme
│   ├── layout.tsx        # Root layout
│   └── page.tsx          # Landing page
├── components/
│   ├── TopBar.tsx        # Navigation with theme toggle
│   ├── PricingSection.tsx # Pricing cards
│   ├── TypewriterEffect.tsx # Animated typewriter
│   └── VideoModal.tsx    # YouTube video modal
├── hooks/
│   └── useLocalStorage.ts # Theme persistence
└── public/               # Static assets
```

## 🎨 Customization

### Theme Colors

Edit `tailwind.config.ts` to customize your color palette:

```typescript
colors: {
  primary: {
    DEFAULT: '#3B82F6',
    light: '#60A5FA',
    dark: '#2563EB',
  },
  // Add your custom colors
}
```

### Dark Mode

The template uses Tailwind's class-based dark mode. Toggle implementation is in `components/TopBar.tsx`.

## 🛠️ Built With

- [Next.js 15](https://nextjs.org/) - React framework
- [TypeScript](https://www.typescriptlang.org/) - Type safety
- [Tailwind CSS](https://tailwindcss.com/) - Styling
- [Framer Motion](https://www.framer.com/motion/) - Animations
- [Lucide React](https://lucide.dev/) - Icons
- [React Icons](https://react-icons.github.io/react-icons/) - Additional icons

## 📝 Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 🚀 Deploy

The easiest way to deploy is with [Vercel](https://vercel.com):

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/filiksyos/launch-mvp-nextjs-supabase)

## 📄 License

This project is open source and available under the MIT License.

## 🙏 Acknowledgments

Based on [launch-mvp-stripe-nextjs-supabase](https://github.com/ShenSeanChen/launch-mvp-stripe-nextjs-supabase) by [@ShenSeanChen](https://github.com/ShenSeanChen)

---

Built with ❤️ using Next.js
