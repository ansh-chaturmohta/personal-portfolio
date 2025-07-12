# Ansh Chaturmohta - Personal Portfolio

A stunning, interactive portfolio website built with modern web technologies, featuring 3D animations, smooth transitions, and responsive design.

## 🚀 Features

- **3D Interactive Elements** - Three.js powered 3D animations and interactions
- **Modern Design** - Glass morphism, gradients, and smooth animations
- **Responsive Layout** - Optimized for all devices and screen sizes
- **Smooth Scrolling** - Seamless navigation with scroll-based animations
- **Performance Optimized** - Built with Next.js 14 and TypeScript

## 🛠️ Tech Stack

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **3D Graphics**: Three.js with React Three Fiber
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Development**: ESLint, Prettier

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/ansh-chaturmohta/personal-portfolio.git
   cd personal-portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🎨 Customization

### Personal Information
Update the following files with your information:
- `src/components/Hero.tsx` - Name and tagline
- `src/components/About.tsx` - Education and interests
- `src/components/Experience.tsx` - Work experience and skills
- `src/components/Projects.tsx` - Your projects
- `src/components/Contact.tsx` - Contact information

### Styling
- Colors and gradients: `tailwind.config.js`
- Global styles: `src/app/globals.css`
- Component-specific styles: Individual component files

## 📁 Project Structure

```
src/
├── app/
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── About.tsx
│   ├── Contact.tsx
│   ├── Experience.tsx
│   ├── Hero.tsx
│   ├── Hero3D.tsx
│   ├── Hobbies.tsx
│   ├── Navigation.tsx
│   └── Projects.tsx
└── lib/
    └── utils.ts
```

## 🚀 Deployment

### Vercel
```bash
npm run build
npx vercel --prod
```

### Other Platforms
```bash
npm run build
npm run start
```

## 🤝 Contributing

Feel free to fork this project and customize it for your own portfolio!

---

Built with ❤️ by Ansh Chaturmohta
