# Jamia Masjid West Drayton - Website

Modern mosque website with GitHub Blog-inspired design, featuring prayer times, events, services, and donation integration.

🌐 **Live Site**: https://www.jamiamasjidwestdrayton.com/

## 🚀 Quick Start

### Development

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Open http://localhost:3000
```

### Production Build

```bash
# Create production build
npm run build

# Start production server
npm start
```

## 📦 Deployment

### Quick Deploy Steps

1. **Build the project**: `npm run build`
2. **Upload files** to your hosting:
   - `.next/` folder (build output)
   - `public/` folder (static assets)
   - `app/` folder (source files - if using Node.js)
   - `Salah_Timings.json` (prayer times data)
   - `.htaccess` (for static hosting)
   - `package.json` and `next.config.js`
3. **Configure** `.htaccess` for routing (included)
4. **Enable SSL** in cPanel
5. **Test** all pages and functionality

**Note**: If your hosting doesn't support Node.js, update `next.config.js` to enable static export:
```javascript
output: 'export',
trailingSlash: true,
```
Then rebuild and upload the `out/` folder contents.

## 📁 Project Structure

```
├── app/                    # Next.js app directory
│   ├── components/         # React components
│   ├── config/             # Configuration files
│   ├── about/              # About page
│   ├── contact/            # Contact page
│   ├── donate/             # Donation page
│   ├── events/             # Events page
│   ├── resources/          # Resources page
│   ├── services/           # Services page
│   └── page.tsx            # Homepage
├── public/                 # Static assets
│   └── favicon.svg         # Site favicon
├── Salah_Timings.json       # Prayer times data
├── .htaccess               # Apache configuration
├── next.config.js          # Next.js configuration
└── package.json            # Dependencies
```

## ✨ Features

- 🎨 **GitHub Blog Design**: Modern glassmorphism effects and typography
- 🌓 **Dark/Light Mode**: Theme toggle with system preference detection
- 📱 **Mobile-First**: Fully responsive design
- 🕌 **Prayer Times**: Interactive prayer times widget with calendar
- 📅 **Date Range Selection**: View prayer times for any date range
- 📄 **PDF Export**: Export prayer timetables as PDF
- 💰 **Donation Integration**: SumUp payment links integration
- ⏰ **Live Clock**: Multi-timezone clock widget
- 🎯 **SEO Optimized**: Static site generation for performance

## 📝 Content Management

To update content, edit the page files directly:

- **Events**: `app/events/page.tsx` - Edit the `upcomingEvents` array
- **Services**: `app/services/page.tsx` - Edit service descriptions
- **Resources**: `app/resources/page.tsx` - Update links and content
- **About**: `app/about/page.tsx` - Update history, mission, leadership
- **Contact**: `app/contact/page.tsx` - Update contact information

## 🛠️ Technology Stack

- **Framework**: Next.js 14+ (React)
- **Styling**: Tailwind CSS
- **Language**: TypeScript
- **PDF Generation**: jsPDF + jsPDF-AutoTable

## 📋 Requirements

- Node.js 18+ 
- npm 9+

## 🔧 Configuration

### SumUp Payment Links

Edit `app/config/sumup-links.ts` to update payment links.

### Prayer Times Data

The `Salah_Timings.json` file contains prayer times for the entire year. Update this file annually or as needed.

## 🎨 Customization

### Colors & Themes

Edit `app/globals.css` to customize:
- Light theme colors
- Dark theme colors
- Glassmorphism effects

### Typography

Fonts are configured in `app/globals.css` and `tailwind.config.ts`.

## 📄 License

Private project for Jamia Masjid West Drayton.

---

**Built with ❤️ for the Muslim community in West London**
