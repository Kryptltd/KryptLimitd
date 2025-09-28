# Krypt Investments Website

A modern, responsive website built with React, TypeScript, and Tailwind CSS. This website is completely free from copyrighted materials and safe for public hosting.

## 🚀 Features

- **Modern Design**: Clean, professional interface with responsive design
- **React + TypeScript**: Built with latest web technologies
- **Tailwind CSS**: Utility-first styling with custom theme
- **FAQ Slider**: Interactive vertical auto-scrolling FAQ section
- **Mobile Optimized**: Perfect experience on all devices
- **SEO Ready**: Optimized meta tags and structure
- **Open Source**: 100% free from copyrighted content

## 📦 Technologies Used

All technologies and libraries used are open-source and safe for commercial use:

- **React 18** (MIT License)
- **TypeScript** (Apache 2.0)
- **Vite** (MIT License)
- **Tailwind CSS** (MIT License)
- **Radix UI** (MIT License)
- **Lucide React Icons** (MIT License)
- **Inter Font** (Google Fonts - SIL Open Font License)

## 🛠️ Installation & Setup

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation Steps

1. **Clone the repository:**
   ```bash
   git clone [your-repo-url]
   cd krypt
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start development server:**
   ```bash
   npm run dev
   ```

4. **Build for production:**
   ```bash
   npm run build
   ```

## 🌐 GitHub Pages Deployment

### Option 1: GitHub Actions (Recommended)

1. Create `.github/workflows/deploy.yml`:
   ```yaml
   name: Deploy to GitHub Pages

   on:
     push:
       branches: [ main ]

   jobs:
     deploy:
       runs-on: ubuntu-latest
       steps:
         - uses: actions/checkout@v3
         
         - name: Setup Node.js
           uses: actions/setup-node@v3
           with:
             node-version: '18'
             cache: 'npm'
             
         - name: Install dependencies
           run: npm ci
           
         - name: Build
           run: npm run build
           
         - name: Deploy to GitHub Pages
           uses: peaceiris/actions-gh-pages@v3
           with:
             github_token: ${{ secrets.GITHUB_TOKEN }}
             publish_dir: ./dist
   ```

2. Go to repository Settings → Pages → Source → GitHub Actions

### Option 2: Manual Deployment

1. Build the project: `npm run build`
2. Push the `dist` folder contents to `gh-pages` branch
3. Enable GitHub Pages in repository settings

## ✏️ Customization Guide

### 1. Replace Placeholder Content

**Testimonials** (in `src/pages/Index.tsx` and HTML files):
```typescript
// Replace these placeholders with real customer feedback
{
  name: "[Customer Name 1]",           // → "John Smith"
  role: "[Customer Role]",             // → "Facility Manager"  
  company: "[Customer Company]",       // → "ABC Corporation"
  content: "[Customer testimonial...]" // → Real testimonial text
}
```

**Images**:
- All image placeholders are marked with descriptive text
- Add your actual product images to replace the placeholder containers
- Consider using free stock photos from [Unsplash](https://unsplash.com) or [Pexels](https://pexels.com)

### 2. Update Company Information

Update the following files with your actual business details:
- Contact information (phone, email, address)
- Company description and history
- Product details and pricing
- Social media links

### 3. Color Scheme & Branding

The website uses CSS custom properties for easy theming. Update in `src/index.css`:

```css
:root {
  --primary: 214 84% 56%;     /* Main brand color */
  --secondary: 214 100% 97%;  /* Light accent */
  --accent: 205 100% 50%;     /* Highlight color */
  /* ... more variables */
}
```

### 4. Content Management

- **Pages**: Edit React components in `src/pages/`
- **Components**: Modify reusable components in `src/components/`
- **Styling**: Global styles in `src/index.css`
- **Static HTML**: Alternative HTML files in root directory

## 📁 Project Structure

```
krypt/
├── src/
│   ├── components/         # Reusable React components
│   │   ├── ui/            # UI component library
│   │   └── layout/        # Layout components
│   ├── pages/             # Page components
│   ├── hooks/             # Custom React hooks
│   └── lib/               # Utility functions
├── public/                # Static assets
├── dist/                  # Build output (generated)
└── *.html                 # Static HTML versions
```

## 🔒 Legal & Licensing

This website is completely free from copyrighted materials:

- ✅ All images are placeholders or open-source
- ✅ All fonts are from Google Fonts (SIL Open Font License)
- ✅ All libraries are open-source (MIT/Apache licenses)
- ✅ All code is original or based on open-source examples
- ✅ Testimonials are clearly marked as placeholders

See [LICENSES.md](./LICENSES.md) for complete third-party license information.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Run tests: `npm run lint`
5. Submit a pull request

## 📧 Support

If you need help customizing or deploying this website:
1. Check the [Issues](../../issues) section
2. Review the documentation above
3. Create a new issue with your question

## 📄 License

This project is open source and available under the MIT License. See LICENSE file for details.

---

**Note**: Remember to replace all placeholder content (marked with `[brackets]`) with your actual business information before deploying to production!
