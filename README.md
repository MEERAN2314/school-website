# International Kidz World Montessori Play School Website

A modern, vibrant React-based website for International Kidz World Montessori Play School in Adambakkam, Chennai. Built with Vite, React Router, Tailwind CSS, and Framer Motion for smooth animations and an engaging user experience.

## Features

- **Multi-page Application**: Home, About, Courses, Events, Albums, and Contact pages
- **Responsive Design**: Mobile-first approach with beautiful animations
- **Montessori-focused Content**: Showcases programs, philosophy, and educational approach
- **Custom Color Palette**: Vibrant, child-friendly colors (purples, oranges, yellows, pinks)
- **Interactive Components**: Testimonials, event cards, program cards, and image galleries
- **Visual Editor (Dev Mode)**: Custom Vite plugins for inline editing during development

## Tech Stack

- **Frontend Framework**: React 18
- **Build Tool**: Vite 7
- **Routing**: React Router DOM 7
- **Styling**: Tailwind CSS 3 with custom configuration
- **Animations**: Framer Motion 11
- **UI Components**: Radix UI primitives
- **Icons**: Lucide React
- **SEO**: React Helmet

## Project Structure

```
school-website/
├── apps/
│   └── web/
│       ├── src/
│       │   ├── pages/          # Route pages
│       │   ├── components/     # Reusable components
│       │   │   └── ui/        # Radix UI components
│       │   ├── lib/           # Utility functions
│       │   ├── App.jsx        # Main app with routing
│       │   ├── main.jsx       # Entry point
│       │   └── index.css      # Global styles
│       ├── plugins/           # Custom Vite plugins
│       ├── public/            # Static assets
│       ├── vite.config.js     # Vite configuration
│       ├── tailwind.config.js # Tailwind configuration
│       └── package.json       # Web app dependencies
├── package.json               # Root package (monorepo)
└── README.md
```

## Prerequisites

- Node.js (version specified in `.nvmrc`)
- npm (comes with Node.js)

## Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd school-website
```

2. Install dependencies:
```bash
npm install
```

## Development

Start the development server:
```bash
npm run dev
```

The application will be available at `http://localhost:3000`

### Development Features

- Hot Module Replacement (HMR)
- Custom visual editor plugins (dev mode only)
- Error overlay with parent window messaging
- CORS enabled for development

## Building for Production

Build the application:
```bash
npm run build
```

The production-ready files will be generated in `dist/apps/web`

## Preview Production Build

Preview the production build locally:
```bash




npm run start
```

## Linting

Run ESLint to check code quality:
```bash
npm run lint
```

Run with warnings visible:
```bash
npm run lint:warn
```

## Custom Vite Plugins

The project includes several custom development plugins (active only in dev mode):

1. **Visual Editor Plugin**: Enables inline editing of JSX elements
2. **Edit Mode Plugin**: Development mode for visual editing
3. **Selection Mode Plugin**: Element selection in browser
4. **Iframe Route Restoration**: Maintains routing in iframe contexts
5. **PocketBase Auth Plugin**: Authentication integration

## Color Palette

The website uses a vibrant, child-friendly color scheme:

- Vibrant Purple: `#7C3AED`
- Bright Orange: `#FF8C42`
- Sunny Yellow: `#FFD60A`
- Hot Pink: `#EC4899`
- Sky Blue: `#0EA5E9`
- Fresh Lime Green: `#22C55E`
- Turquoise: `#06B6D4`
- Mint Green: `#10B981`

## Pages

- **Home**: Hero section, highlights, programs, testimonials, gallery preview, events
- **About**: Vision, mission, principal's message, Montessori philosophy, achievements
- **Courses**: Detailed program information (Play Group, Pre-KG, LKG, UKG)
- **Events**: Upcoming and past events with details
- **Albums**: Photo gallery showcasing school activities
- **Contact**: Contact form and school information

## Scripts Reference

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run start` | Preview production build |
| `npm run lint` | Run ESLint (quiet mode) |
| `npm run lint:warn` | Run ESLint (show warnings) |

## Environment Variables

For production builds, the following environment variables can be set:

- `NODE_ENV`: Set to `production` for production builds
- `TEMPLATE_BANNER_SCRIPT_URL`: Optional banner script URL
- `TEMPLATE_REDIRECT_URL`: Optional redirect URL

## Browser Support

- Modern browsers (Chrome, Firefox, Safari, Edge)
- Mobile browsers (iOS Safari, Chrome Mobile)

## License

Private - All rights reserved

## Contact

International Kidz World Montessori Play School
Adambakkam, Chennai

---

Built with ❤️ for nurturing young minds
