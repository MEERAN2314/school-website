#!/bin/bash

echo "🚀 Building International Kidz World website for Hostinger deployment..."

# Clean previous builds
echo "🧹 Cleaning previous builds..."
rm -rf dist

# Install dependencies
echo "📦 Installing dependencies..."
npm install

# Build the project
echo "🔨 Building the project..."
npm run build:hostinger

# Check if build was successful
if [ -d "dist" ]; then
    echo "✅ Build completed successfully!"
    echo "📁 Build output is in the 'dist' folder"
    echo "🌐 Ready for Hostinger deployment!"
    
    # List the contents of dist folder
    echo "📋 Build contents:"
    ls -la dist/
else
    echo "❌ Build failed!"
    exit 1
fi