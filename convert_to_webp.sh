#!/bin/bash

# Loop through all PNG files in the current directory
for img in *.png; do
  # Convert PNG to WebP with the same file name, replacing the .png extension
  ffmpeg -i "$img" -qscale 75 "${img%.png}.webp"
done

for img in images/*.png; do
  # Convert PNG to WebP with the same file name, replacing the .png extension
  ffmpeg -i "$img" -qscale 75 "${img%.png}.webp"
done

for img in *.jpg; do
  # Convert PNG to WebP with the same file name, replacing the .png extension
  ffmpeg -i "$img" -qscale 75 "${img%.jpg}.webp"
done

for img in images/*.jpg; do
  # Convert PNG to WebP with the same file name, replacing the .png extension
  ffmpeg -i "$img" -qscale 75 "${img%.jpg}.webp"
done

for img in images/*.JPG; do
  # Convert PNG to WebP with the same file name, replacing the .png extension
  ffmpeg -i "$img" -qscale 75 "${img%.JPG}.webp"
done

echo "Conversion complete! All WebP images have been saved in the current folder."
