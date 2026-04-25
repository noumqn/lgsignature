#!/bin/bash
echo "Starting conversion..."
find img -type f \( -iname "*.jpg" -o -iname "*.jpeg" -o -iname "*.png" \) -print0 | while IFS= read -r -d '' file; do
  filename="${file%.*}"
  out_file="${filename}.webp"
  
  if [ ! -f "$out_file" ] || [ "$file" -nt "$out_file" ]; then
    cwebp -q 80 -resize 1920 0 "$file" -o "$out_file" > /dev/null 2>&1
  fi
done
echo "Conversion complete."
