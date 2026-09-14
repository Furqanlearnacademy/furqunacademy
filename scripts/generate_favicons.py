import os
from PIL import Image

SRC_LOGO = r"c:\Users\karim\Desktop\ruh-alquran\public\images\ruh-logo.png"
APP_DIR = r"c:\Users\karim\Desktop\ruh-alquran\src\app"
PUBLIC_DIR = r"c:\Users\karim\Desktop\ruh-alquran\public"

def generate_favicons():
    print(f"Loading logo from: {SRC_LOGO}")
    with Image.open(SRC_LOGO) as img:
        img = img.convert("RGBA")
        
        # 1. Multi-size ICO for src/app/favicon.ico and public/favicon.ico
        ico_sizes = [(16, 16), (32, 32), (48, 48), (64, 64), (128, 128), (256, 256)]
        
        app_ico_path = os.path.join(APP_DIR, "favicon.ico")
        public_ico_path = os.path.join(PUBLIC_DIR, "favicon.ico")
        
        img.save(app_ico_path, format="ICO", sizes=ico_sizes)
        img.save(public_ico_path, format="ICO", sizes=ico_sizes)
        print("✓ Generated multi-size favicon.ico in src/app/ and public/")
        
        # 2. Next.js App Router dynamic icon (icon.png / icon.ico)
        icon_32 = img.resize((32, 32), Image.Resampling.LANCZOS)
        icon_32.save(os.path.join(APP_DIR, "icon.png"), "PNG")
        print("✓ Generated src/app/icon.png (32x32)")
        
        # 3. Apple Touch Icon (180x180)
        apple_icon = img.resize((180, 180), Image.Resampling.LANCZOS)
        apple_icon.save(os.path.join(APP_DIR, "apple-icon.png"), "PNG")
        apple_icon.save(os.path.join(PUBLIC_DIR, "apple-touch-icon.png"), "PNG")
        print("✓ Generated apple-icon.png in src/app/ and public/")
        
        # 4. Standard PWA / High-Res icons
        icon_192 = img.resize((192, 192), Image.Resampling.LANCZOS)
        icon_192.save(os.path.join(PUBLIC_DIR, "icon-192.png"), "PNG")
        
        icon_512 = img.resize((512, 512), Image.Resampling.LANCZOS)
        icon_512.save(os.path.join(PUBLIC_DIR, "icon-512.png"), "PNG")
        print("✓ Generated icon-192.png and icon-512.png in public/")

if __name__ == "__main__":
    generate_favicons()
