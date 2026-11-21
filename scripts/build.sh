#!/bin/bash
set -e

DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
echo "Building Transmissionic for webOS..."

mkdir -p "$DIR/dist"
ares-package "$DIR/app" -o "$DIR/dist"

echo "Build complete: $(ls -lh "$DIR/dist/"*.ipk)"
