import os
from PIL import Image

BASE_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
SRC_LOGO = os.path.join(BASE_DIR, "public", "images", "furqan-logo-transparent.webp")
APP_DIR = os.path.join(BASE_DIR, "src", "app")
PUBLIC_DIR = os.path.join(BASE_DIR, "public")

def generate_favicons():
    print(f"Loading official logo from: {SRC_LOGO}")
    if not os.path.exists(SRC_LOGO):
        raise FileNotFoundError(f"Source logo not found: {SRC_LOGO}")

    with Image.open(SRC_LOGO) as img:
        img = img.convert("RGBA")
        
        # Extract the brand emblem portion (Al-Furqan calligraphy + Quran stand, y <= 950)
        # This produces the crispest, most legible icon at favicon resolutions.
        emblem_box = (0, 0, img.width, 950)
        emblem = img.crop(emblem_box)
        ebbox = emblem.getbbox()
        cropped = emblem.crop(ebbox)
        cw, ch = cropped.size
        print(f"Cropped emblem dimensions: {cw}x{ch}")
        
        # Create a square 1024x1024 master canvas with balanced optical padding
        max_dim = max(cw, ch)
        pad = int(max_dim * 0.06)
        sq_size = max_dim + pad * 2
        square = Image.new("RGBA", (sq_size, sq_size), (0, 0, 0, 0))
        offset_x = (sq_size - cw) // 2
        offset_y = (sq_size - ch) // 2
        square.paste(cropped, (offset_x, offset_y), cropped)
        
        # Resize to standard 1024x1024 master icon
        master_icon = square.resize((1024, 1024), Image.Resampling.LANCZOS)
        print("✓ Created master 1024x1024 icon canvas with optical centering")
        
        # 1. Multi-size ICO for src/app/favicon.ico and public/favicon.ico
        ico_sizes = [(16, 16), (32, 32), (48, 48), (64, 64), (128, 128), (256, 256)]
        app_ico_path = os.path.join(APP_DIR, "favicon.ico")
        public_ico_path = os.path.join(PUBLIC_DIR, "favicon.ico")
        
        master_icon.save(app_ico_path, format="ICO", sizes=ico_sizes)
        master_icon.save(public_ico_path, format="ICO", sizes=ico_sizes)
        print("✓ Generated multi-size favicon.ico in src/app/ and public/")
        
        # 2. Next.js App Router dynamic icon (32x32)
        icon_32 = master_icon.resize((32, 32), Image.Resampling.LANCZOS)
        icon_32.save(os.path.join(APP_DIR, "icon.png"), "PNG")
        icon_32.save(os.path.join(PUBLIC_DIR, "favicon-32x32.png"), "PNG")
        print("✓ Generated icon.png (32x32) and favicon-32x32.png")
        
        # 3. Apple Touch Icon (180x180)
        apple_icon = master_icon.resize((180, 180), Image.Resampling.LANCZOS)
        apple_icon.save(os.path.join(APP_DIR, "apple-icon.png"), "PNG")
        apple_icon.save(os.path.join(PUBLIC_DIR, "apple-touch-icon.png"), "PNG")
        print("✓ Generated apple-icon.png (180x180) in src/app/ and public/")
        
        # 4. Standard PWA / High-Res icons (192x192 and 512x512)
        icon_192 = master_icon.resize((192, 192), Image.Resampling.LANCZOS)
        icon_192.save(os.path.join(PUBLIC_DIR, "icon-192.png"), "PNG")
        
        icon_512 = master_icon.resize((512, 512), Image.Resampling.LANCZOS)
        icon_512.save(os.path.join(PUBLIC_DIR, "icon-512.png"), "PNG")
        print("✓ Generated icon-192.png and icon-512.png in public/")

if __name__ == "__main__":
    generate_favicons()
