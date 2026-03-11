#!/bin/bash

echo "🚀 Preparing project for Hostinger deployment..."

# Create a clean deployment directory
rm -rf hostinger-deploy
mkdir hostinger-deploy

# Copy the web app to root level for Hostinger
echo "📁 Copying web app files..."
cp -r apps/web/* hostinger-deploy/
cp -r apps/web/.* hostinger-deploy/ 2>/dev/null || true

# Copy root level files that Hostinger needs
cp package.json hostinger-deploy/package-root.json
cp hostinger.json hostinger-deploy/

# Create a simple package.json for Hostinger
cat > hostinger-deploy/package.json << 'EOF'
{
  "name": "international-kidz-world",
  "version": "1.0.0",
  "private": true,
  "type": "module",
  "scripts": {
    "dev": "vite --host :: --port 3000",
    "build": "node tools/generate-llms.js || true && vite build --config vite.config.production.js",
    "start": "vite preview --config vite.config.production.js --host :: --port 3000",
    "lint": "eslint . --quiet"
  },
  "engines": {
    "node": ">=18.0.0"
  },
  "dependencies": {
    "@radix-ui/react-alert-dialog": "^1.1.4",
    "@radix-ui/react-avatar": "^1.1.2",
    "@radix-ui/react-checkbox": "^1.1.3",
    "@radix-ui/react-dialog": "^1.1.4",
    "@radix-ui/react-dropdown-menu": "^2.1.4",
    "@radix-ui/react-label": "^2.1.1",
    "@radix-ui/react-slider": "^1.2.2",
    "@radix-ui/react-slot": "^1.1.1",
    "@radix-ui/react-tabs": "^1.1.2",
    "@radix-ui/react-toast": "^1.2.4",
    "class-variance-authority": "^0.7.1",
    "clsx": "^2.1.1",
    "framer-motion": "^11.15.0",
    "lucide-react": "^0.469.0",
    "react": "^18.3.1",
    "react-dom": "^18.3.1",
    "react-helmet": "^6.1.0",
    "react-router-dom": "^7.13.0",
    "tailwind-merge": "^2.6.0",
    "tailwindcss-animate": "^1.0.7"
  },
  "devDependencies": {
    "@babel/generator": "^7.26.3",
    "@babel/parser": "^7.26.3",
    "@babel/traverse": "^7.26.4",
    "@babel/types": "^7.26.3",
    "@types/node": "^20.17.10",
    "@types/react": "^18.3.18",
    "@types/react-dom": "^18.3.5",
    "@vitejs/plugin-react": "^5.1.4",
    "autoprefixer": "^10.4.20",
    "eslint": "^8.57.1",
    "eslint-import-resolver-alias": "^1.1.2",
    "eslint-plugin-import": "^2.31.0",
    "eslint-plugin-react": "^7.37.3",
    "eslint-plugin-react-hooks": "^5.1.0",
    "globals": "^15.14.0",
    "postcss": "^8.4.49",
    "tailwindcss": "^3.4.17",
    "terser": "^5.37.0",
    "vite": "^7.3.1"
  }
}
EOF

echo "✅ Hostinger deployment package ready!"
echo "📁 Upload the contents of 'hostinger-deploy' folder to your GitHub repository"
echo "🌐 Then connect that repository to Hostinger"

echo ""
echo "📋 Hostinger Configuration:"
echo "Framework: Vite"
echo "Build Command: npm run build"
echo "Output Directory: dist"
echo "Node Version: 20"