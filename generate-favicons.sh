#!/bin/bash

# BioVault Favicon Generator
# Generates all necessary favicon formats from a single source PNG

set -e

SOURCE_IMAGE="assets/bv-icon-1024.png"
OUTPUT_DIR="src/images"

# Check if source image exists
if [ ! -f "$SOURCE_IMAGE" ]; then
    echo "Error: Source image not found at $SOURCE_IMAGE"
    exit 1
fi

# Check for required tools
if ! command -v convert &> /dev/null && ! command -v sips &> /dev/null; then
    echo "Error: Neither ImageMagick (convert) nor macOS sips found"
    echo "Install ImageMagick with: brew install imagemagick"
    exit 1
fi

# Create output directory if it doesn't exist
mkdir -p "$OUTPUT_DIR"

echo "Generating favicons from $SOURCE_IMAGE..."

# Function to generate PNG using available tool
generate_png() {
    size=$1
    output=$2

    if command -v convert &> /dev/null; then
        # Use ImageMagick
        convert "$SOURCE_IMAGE" -resize "${size}x${size}" "$output"
    else
        # Use macOS sips
        sips -z "$size" "$size" "$SOURCE_IMAGE" --out "$output" > /dev/null
    fi
    echo "  ✓ Generated $output (${size}x${size})"
}

# Generate standard favicon.ico (multi-size ICO file)
if command -v convert &> /dev/null; then
    convert "$SOURCE_IMAGE" \
        \( -clone 0 -resize 16x16 \) \
        \( -clone 0 -resize 32x32 \) \
        \( -clone 0 -resize 48x48 \) \
        -delete 0 \
        "$OUTPUT_DIR/favicon.ico"
    echo "  ✓ Generated favicon.ico (16, 32, 48)"
fi

# Generate PNG favicons
generate_png 16 "$OUTPUT_DIR/favicon-16x16.png"
generate_png 32 "$OUTPUT_DIR/favicon-32x32.png"
generate_png 48 "$OUTPUT_DIR/favicon-48x48.png"
generate_png 180 "$OUTPUT_DIR/apple-touch-icon.png"
generate_png 192 "$OUTPUT_DIR/android-chrome-192x192.png"
generate_png 512 "$OUTPUT_DIR/android-chrome-512x512.png"

# Copy original as bv-icon.png for use on website
cp "$SOURCE_IMAGE" "$OUTPUT_DIR/bv-icon.png"
echo "  ✓ Copied original as bv-icon.png"

echo ""
echo "✨ All favicons generated successfully!"
echo ""
echo "Add these to your HTML <head>:"
echo '<link rel="icon" type="image/png" sizes="32x32" href="/images/favicon-32x32.png">'
echo '<link rel="icon" type="image/png" sizes="16x16" href="/images/favicon-16x16.png">'
echo '<link rel="apple-touch-icon" sizes="180x180" href="/images/apple-touch-icon.png">'
echo '<link rel="manifest" href="/images/site.webmanifest">'
