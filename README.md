# Aryan Raj - Resume Website

A modern, minimalistic portfolio website built with Next.js, Tailwind CSS, and glassmorphism design.

## Features

- 🎨 Modern glassmorphism design
- 📱 Fully responsive layout
- ⚡ Built with Next.js 14 and Tailwind CSS
- 🎯 Professional resume layout
- 🌙 Dark theme with gradient accents
- ✨ Smooth animations and transitions

## Getting Started

### Prerequisites

- Node.js 18.17 or later
- npm or yarn package manager

### Installation

1. Clone the repository or download the files
2. Install dependencies:

```bash
npm install
# or
yarn install
```

3. Run the development server:

```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

```
├── app/
│   ├── layout.tsx          # Root layout component
│   ├── page.tsx            # Main page with resume content
│   └── globals.css         # Global styles with glassmorphism
├── components/
│   └── ui/
│       └── card.tsx        # Card component (optional for future use)
├── lib/
│   └── utils.ts            # Utility functions
├── package.json            # Dependencies and scripts
├── tailwind.config.js      # Tailwind CSS configuration
└── tsconfig.json          # TypeScript configuration
```

## Technologies Used

- **Next.js 14** - React framework with App Router
- **Tailwind CSS** - Utility-first CSS framework
- **TypeScript** - Type-safe JavaScript
- **Glassmorphism** - Modern UI design trend

## Customization

To customize the resume content:

1. Edit the content in `app/page.tsx`
2. Modify the colors and styling in `app/globals.css`
3. Update personal information and links

## Deployment

The easiest way to deploy is to use [Vercel](https://vercel.com/):

1. Push your code to a GitHub repository
2. Connect your repository to Vercel
3. Deploy with zero configuration

## License

This project is open source and available under the [MIT License](LICENSE). 