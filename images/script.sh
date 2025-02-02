#!/usr/bin/env bash

count=1

# Loop through all files that contain 'pexel' in their name
for file in *wedding*; do
  # Make sure it's a regular file (not a directory, symlink, etc.)
  if [ -f "$file" ]; then
    
    # Extract the extension (everything after the last '.')
    extension="${file##*.}"
    
    # Construct the new filename
    new_name="wedding_${count}.${extension}"
    
    # Rename the file
    mv -- "$file" "$new_name"
    
    # Increment the counter
    ((count++))
  fi
done

echo "Renamed $((count - 1)) files."
