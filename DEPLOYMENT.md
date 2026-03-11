# 🚀 Hostinger Deployment Guide

## ✅ Project Status: Ready for Deployment!

Your International Kidz World website is now fully configured and ready for Hostinger deployment.

## 📋 Pre-Deployment Checklist

- ✅ **Build System**: Vite with production configuration
- ✅ **Assets**: All school images properly placed in `/assets/` folder
- ✅ **Routing**: SPA routing configured with `.htaccess`
- ✅ **SEO**: Meta tags, structured data, and sitemap included
- ✅ **Performance**: Code splitting and optimization enabled
- ✅ **Node.js**: Compatible with Node.js 20 (as specified in `.nvmrc`)

## 🏗️ Build Process

The project uses a monorepo structure with the main web app in `apps/web/`. 

### Quick Build
```bash
./build.sh
```

### Manual Build
```bash
npm install
npm run build:hostinger
```

## 📁 Deployment Files

After building, upload the contents of the `dist/` folder to your Hostinger public_html directory:

```
dist/
├── index.html          # Main HTML file
├── .htaccess          # Apache configuration for SPA routing
├── robots.txt         # SEO robots file
├── sitemap.xml        # SEO sitemap
└── assets/            # All CSS, JS, and image files
    ├── *.css          # Compiled stylesheets
    ├── *.js           # Compiled JavaScript bundles
    └── *.jpeg         # School photos and images
```

## 🌐 Hostinger Deployment Steps

### Method 1: File Manager (Recommended)
1. Log into your Hostinger control panel
2. Open **File Manager**
3. Navigate to `public_html/`
4. Delete any existing files (if this is a fresh install)
5. Upload all contents from the `dist/` folder
6. Ensure `.htaccess` file is uploaded (it handles routing)

### Method 2: FTP/SFTP
1. Connect to your Hostinger server via FTP
2. Navigate to the `public_html/` directory
3. Upload all files from `dist/` folder
4. Set proper permissions (755 for folders, 644 for files)

### Method 3: Git Deployment (Advanced)
1. Push your code to a Git repository
2. Use Hostinger's Git deployment feature
3. Set build command: `npm run build:hostinger`
4. Set publish directory: `dist`

## ⚙️ Server Configuration

### Apache (.htaccess)
The `.htaccess` file is already configured for:
- SPA routing (all routes redirect to index.html)
- Asset caching (1 week for static assets)
- Proper headers for performance

### PHP Compatibility
This is a static React application - no PHP required.

### Node.js Requirements
- **Node.js Version**: 20.x (specified in `.nvmrc`)
- **Build Time Only**: Node.js is only needed for building, not runtime

## 🔧 Environment Variables

No environment variables are required for production deployment.

## 📊 Performance Features

- **Code Splitting**: Separate bundles for vendor, router, and UI components
- **Asset Optimization**: Images and CSS are optimized
- **Caching**: Proper cache headers for static assets
- **Compression**: Gzip compression enabled via .htaccess

## 🔍 SEO Features

- **Meta Tags**: Complete Open Graph and Twitter Card meta tags
- **Structured Data**: JSON-LD schema for local business
- **Sitemap**: XML sitemap for search engines
- **Robots.txt**: Proper robots file for crawlers

## 🚨 Troubleshooting

### Common Issues:

1. **404 on page refresh**
   - Ensure `.htaccess` file is uploaded and Apache mod_rewrite is enabled

2. **Images not loading**
   - Check that all files in `dist/assets/` are uploaded
   - Verify file permissions (644 for files, 755 for folders)

3. **CSS/JS not loading**
   - Ensure all files from `dist/assets/` are uploaded
   - Check browser console for 404 errors

### Testing Deployment:
1. Visit your domain
2. Test navigation between pages
3. Refresh pages to ensure routing works
4. Check that all images load in the gallery
5. Verify contact form functionality

## 📞 Support

If you encounter issues:
1. Check Hostinger's error logs in the control panel
2. Verify all files are uploaded correctly
3. Ensure `.htaccess` file is present and readable

## 🎉 Success!

Once deployed, your website will be available at your Hostinger domain with:
- Fast loading times
- Mobile-responsive design
- SEO optimization
- Professional gallery with your school photos
- Contact forms and information pages

Your International Kidz World Montessori website is ready to welcome new students and parents!