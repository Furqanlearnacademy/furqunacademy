import os
import re

SRC_DIR = r"c:\Users\karim\Desktop\furqanlearn\src"
PUBLIC_DIR = r"c:\Users\karim\Desktop\furqanlearn\public"

pattern = re.compile(r'["\'](/images/[^"\']+|/[a-zA-Z0-9_\-]+\.(?:svg|png|jpg|jpeg|webp|ico))["\']')

found = set()
for root, dirs, files in os.walk(SRC_DIR):
    for f in files:
        if f.endswith(('.ts', '.tsx', '.js', '.jsx', '.css', '.html')):
            with open(os.path.join(root, f), 'r', encoding='utf-8', errors='ignore') as fp:
                for match in pattern.finditer(fp.read()):
                    found.add(match.group(1))

print("=== ACTUAL ASSETS REFERENCED IN SRC ===")
total_referenced_kb = 0
for item in sorted(found):
    rel = item.lstrip('/')
    full_path = os.path.join(PUBLIC_DIR, rel)
    exists = os.path.exists(full_path)
    size_kb = os.path.getsize(full_path) / 1024 if exists else 0
    if exists:
        total_referenced_kb += size_kb
    print(f"  {item:55} | exists={str(exists):5} | {size_kb:7.1f} KB")

print(f"\nTotal Referenced Assets: {len(found)} files, {total_referenced_kb/1024:.2f} MB")
