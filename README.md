# PPIF 2025 Website

A modern, interactive website for PPIF (Perkenalan Prodi Informatika) 2025 built with Next.js, featuring immersive animations, 3D elements, and a film-inspired design.

## ✨ Features

- **Interactive 3D Elements** - Built with React Three Fiber and Spline
- **Smooth Animations** - Powered by Framer Motion and Anime.js
- **Film-Inspired UI** - Custom film strip carousel and cinematic transitions
- **Responsive Design** - Optimized for all devices with Tailwind CSS
- **Audio Integration** - Background music and sound effects
- **Modern Stack** - Next.js 15 with React 19 and Turbopack

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ 
- npm, yarn, pnpm, or bun

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd ppif-2025-website
```

2. Install dependencies:
```bash
npm install
# or
yarn install
# or
pnpm install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📁 Project Structure

```
ppif-2025-website/
├── app/
│   ├── Components/          # Reusable React components
│   │   ├── Games/          # Game-related components
│   │   ├── Groups/         # Group/team components
│   │   └── Pages/          # Page-specific components
│   ├── globals.css         # Global styles and animations
│   ├── layout.js          # Root layout component
│   └── page.js            # Home page
├── public/
│   ├── Assets/            # UI assets and icons
│   ├── Audio/             # Sound effects and music
│   ├── Fonts/             # Custom fonts
│   ├── Images/            # Images and graphics
│   └── Models/            # 3D models and videos
└── package.json
```

## 🛠️ Tech Stack

### Core
- **Next.js 15** - React framework with App Router
- **React 19** - UI library
- **Tailwind CSS 4** - Utility-first CSS framework

### UI & Animation
- **Framer Motion** - Animation library
- **Anime.js** - Lightweight animation library
- **Swiper** - Touch slider component
- **React Fast Marquee** - Scrolling text effects

### 3D & Graphics
- **React Three Fiber** - React renderer for Three.js
- **React Three Drei** - Useful helpers for R3F
- **Spline** - 3D design tool integration

### UI Components
- **Material-UI** - React component library
- **Material Tailwind** - Tailwind + Material Design
- **React Parallax Tilt** - Tilt hover effects

## 🎨 Key Components

- **WebLayout** - Main layout wrapper
- **IntroScreen** - Landing page with animations
- **Navigation** - Interactive navigation system
- **DiagonalSwiper** - Custom swiper implementation
- **GlitchTransition** - Cinematic transition effects
- **SoundPlayer** - Audio management
- **Html5ModalWrapper** - Modal system

## 🎵 Audio Features

The website includes:
- Background music (`bg-music.mp3`)
- Interactive sound effects (clicking, page-flip, spinning)
- Glitch transition audio
- Audio controls with on/off toggle

## 📱 Responsive Design

- Desktop-first approach with mobile optimization
- Custom breakpoints for different screen sizes
- Aspect ratio locked content for consistent experience
- Touch-friendly interactions on mobile devices

## 🎬 Film-Inspired Design

- Custom film strip carousel
- Cinematic transitions and effects
- Film roll navigation elements
- Movie-like loading screens

## 🚀 Deployment

### Build for Production

```bash
npm run build
npm start
```

### Deploy on Vercel

The easiest way to deploy is using the [Vercel Platform](https://vercel.com/new):

1. Connect your GitHub repository
2. Vercel will automatically detect Next.js and configure build settings
3. Deploy with zero configuration

## 📄 Scripts

- `npm run dev` - Start development server with Turbopack
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is private and proprietary.

## 🎯 About PPIF

PPIF (Pekan Perangkat Lunak dan Informatika) is an annual software and informatics week event showcasing the latest in technology, programming, and digital innovation.

---

Built with ❤️ for PPIF 2025