# Art Master Website

A beautiful, responsive Next.js website for Art Master - a creative arts and crafts studio specializing in wool painting, macrame, and children's art projects.

## Features

- **Responsive Design**: Fully responsive across all devices
- **Next.js 14**: Built with the latest Next.js features
- **TypeScript**: Type-safe development
- **Tailwind CSS**: Modern, utility-first styling
- **Static Export**: Optimized for Vercel hosting
- **SEO Optimized**: Meta tags and proper structure

## Sections

- **Wool Painting for Adults**: Therapeutic art classes for adults
- **Wool Painting for Kids**: Fun, age-appropriate wool art projects
- **Macrame**: Traditional knotting techniques and modern applications
- **Kids Art Projects**: Creative craft activities for children
- **FAQ**: Comprehensive answers to common questions
- **About**: Studio story, mission, and team information

## Getting Started

### Prerequisites

- Node.js 18 or later
- npm or yarn

### Installation

1. Clone the repository or create a new Next.js project
2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

### Building for Production

```bash
npm run build
```

This creates an optimized static export ready for deployment.

## Deployment on Vercel

1. Push your code to a Git repository (GitHub, GitLab, or Bitbucket)
2. Connect your repository to Vercel
3. Vercel will automatically detect Next.js and deploy
4. The site will be available at your Vercel URL

## Customization

### Adding Images

Replace placeholder images in the `public/images/` directory:
- `wool-adult-1.jpg` through `wool-adult-6.jpg`
- `wool-kids-1.jpg` through `wool-kids-6.jpg`
- `macrame-1.jpg` through `macrame-6.jpg`
- `kids-craft-1.jpg` through `kids-craft-8.jpg`

### Styling

- Colors can be customized in `tailwind.config.js`
- Global styles are in `app/globals.css`
- Component-specific styles use Tailwind utility classes

### Content

- Update text content in each component file
- Modify FAQ questions and answers in `components/FAQ.tsx`
- Update team information in `components/About.tsx`

## Project Structure

```
art-master/
├── app/
│   ├── globals.css
│   ├── layout.tsx
│   ├── page.tsx
│   └── [sections]/
├── components/
│   ├── Navbar.tsx
│   ├── Footer.tsx
│   ├── Hero.tsx
│   └── [section-components]/
├── public/
│   └── images/
├── package.json
├── tailwind.config.js
└── next.config.js
```

## Technologies Used

- **Next.js 14**: React framework with App Router
- **TypeScript**: Type safety and better development experience
- **Tailwind CSS**: Utility-first CSS framework
- **React 18**: Latest React features and optimizations

## License

This project is created for Art Master studio. All rights reserved.