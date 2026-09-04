#!/usr/bin/env bash
set -euo pipefail

echo "Available songs in songs/:"
ls -1 songs
echo

read -p "Enter directory under songs/: " DIR

if [ -z "$DIR" ]; then
  echo "No directory entered"
  exit 1
fi

if [ ! -d "songs/$DIR" ]; then
  echo "Directory not found: songs/$DIR"
  exit 1
fi

WAV_FILE="$DIR.wav"
TAG="$(echo "$DIR" | tr ' ' '-' | tr '[:upper:]' '[:lower:]')-$(date +%Y-%m-%d)"

echo "Rendering $WAV_FILE from songs/$DIR/main.ts..."
deno run -A "songs/$DIR/main.ts" perform -o "$WAV_FILE"

echo "Creating git tag $TAG..."
git tag "$TAG"
git push origin "$TAG"

echo "Creating GitHub release $TAG..."
gh release create "$TAG" "$WAV_FILE" --title "$DIR" --generate-notes

echo "Done: $TAG -> $WAV_FILE"
