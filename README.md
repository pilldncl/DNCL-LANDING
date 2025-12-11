# DNCL-TECHZONE Landing Page

A modern, dynamic ecommerce landing page for DNCL-TECHZONE built with Next.js, TypeScript, and Tailwind CSS.

## Features

- **Dynamic UI**: Modern, responsive design with Tailwind CSS
- **Three Main Pages**:
  - Landing Page: Impressive hero section with stats, categories, process, and testimonials
  - About Page: Company mission, values, and why choose us
  - Contact Page: Contact form and company information
- **Admin Control**: Foundation structure ready for future admin panel integration
- **Responsive Design**: Mobile-first approach with full desktop support
- **TypeScript**: Type-safe development
- **Component-Based**: Reusable, modular components

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

## Project Structure

```
├── app/
│   ├── about/          # About page
│   ├── contact/        # Contact page
│   ├── layout.tsx      # Root layout with Navbar and Footer
│   ├── page.tsx        # Landing page
│   └── globals.css     # Global styles
├── components/
│   ├── About/          # About page components
│   ├── Contact/        # Contact page components
│   ├── Landing/        # Landing page components
│   ├── Footer.tsx      # Site footer
│   └── Navbar.tsx      # Navigation bar
└── admin/              # Admin panel (future implementation)
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## Tech Stack

- **Next.js 14** - React framework with App Router
- **TypeScript** - Type safety
- **Tailwind CSS** - Utility-first CSS framework
- **React Icons** - Icon library

## Future Enhancements

- Admin panel for content management
- Dynamic content loading from CMS/API
- Product catalog integration
- User authentication
- Analytics integration

## License

Private - DNCL-TECHZONE

