import os
import re

SRC_DIR = r"c:\Users\karim\Desktop\ruh-alquran\src"
PUBLIC_DIR = r"c:\Users\karim\Desktop\ruh-alquran\public"

# Replace .png / .jpg / .jpeg with .webp if the corresponding .webp file exists in public/
image_pattern = re.compile(r'["\'](/[^"\']+\.(png|jpg|jpeg))["\']', re.IGNORECASE)

modified_files = []

for root, dirs, files in os.walk(SRC_DIR):
    for file in files:
        if file.endswith(('.ts', '.tsx', '.js', '.jsx', '.css')):
            filepath = os.path.join(root, file)
            with open(filepath, 'r', encoding='utf-8') as f:
                content = f.read()
            
            new_content = content
            matches = list(image_pattern.finditer(content))
            
            for m in matches:
                full_match = m.group(0)
                img_path = m.group(1)
                
                # Check if webp counterpart exists in public/
                webp_rel = img_path.rsplit('.', 1)[0] + '.webp'
                local_webp_path = os.path.normpath(os.path.join(PUBLIC_DIR, webp_rel.lstrip('/\\')))
                
                if os.path.exists(local_webp_path):
                    quote = full_match[0]
                    new_ref = f"{quote}{webp_rel}{quote}"
                    new_content = new_content.replace(full_match, new_ref)
                    print(f"In {file}: {full_match} -> {new_ref}")
            
            if new_content != content:
                with open(filepath, 'w', encoding='utf-8') as f:
                    f.write(new_content)
                modified_files.append(filepath)

print(f"\nDone! Modified {len(modified_files)} files with updated WebP paths.")
