import os
from PIL import Image, ImageOps

SRC_LOGO = r"c:\Users\karim\Desktop\ruh-alquran\public\images\ruh-logo.png"
APP_DIR = r"c:\Users\karim\Desktop\ruh-alquran\src\app"
PUBLIC_DIR = r"c:\Users\karim\Desktop\ruh-alquran\public"

def inspect_and_fix_favicon():
    with Image.open(SRC_LOGO) as img:
        img = img.convert("RGBA")
        w, h = img.size
        print(f"Original Logo Size: {w}x{h}, aspect ratio: {w/h:.3f}")
        
        # Get bounding box of non-transparent pixels
        bbox = img.getbbox()
        if bbox:
            print(f"Non-transparent BBox: {bbox} (width: {bbox[2]-bbox[0]}, height: {bbox[3]-bbox[1]})")
            cropped = img.crop(bbox)
        else:
            cropped = img
            
        cw, ch = cropped.size
        
        # Create a square canvas of size max(cw, ch) + padding
        max_side = max(cw, ch)
        # Add 6% padding for aesthetics inside browser tab circle/square
        pad = int(max_side * 0.06)
        square_size = max_side + (pad * 2)
        
        square_img = Image.new("RGBA", (square_size, square_size), (0, 0, 0, 0))
        # Center the cropped logo on the square canvas perfectly
        offset_x = (square_size - cw) // 2
        offset_y = (square_size - ch) // 2
        square_img.paste(cropped, (offset_x, offset_y), cropped)
        
        print(f"Created Perfect Square Canvas: {square_size}x{square_size} with zero distortion!")
        
        # Generate multi-size ICO
        ico_sizes = [(16, 16), (32, 32), (48, 48), (64, 64), (128, 128), (256, 256)]
        
        app_ico_path = os.path.join(APP_DIR, "favicon.ico")
        public_ico_path = os.path.join(PUBLIC_DIR, "favicon.ico")
        
        square_img.save(app_ico_path, format="ICO", sizes=ico_sizes)
        square_img.save(public_ico_path, format="ICO", sizes=ico_sizes)
        print("✓ Saved un-distorted multi-size favicon.ico")
        
        # Next.js App Router icon.png (32x32)
        icon_32 = square_img.resize((32, 32), Image.Resampling.LANCZOS)
        icon_32.save(os.path.join(APP_DIR, "icon.png"), "PNG")
        
        # Next.js App Router icon.ico or additional icon sizes
        icon_48 = square_img.resize((48, 48), Image.Resampling.LANCZOS)
        icon_48.save(os.path.join(PUBLIC_DIR, "favicon-32x32.png"), "PNG")
        
        # Apple Touch Icon (180x180)
        apple_icon = square_img.resize((180, 180), Image.Resampling.LANCZOS)
        apple_icon.save(os.path.join(APP_DIR, "apple-icon.png"), "PNG")
        apple_icon.save(os.path.join(PUBLIC_DIR, "apple-touch-icon.png"), "PNG")
        
        # High-res PWA icons
        icon_192 = square_img.resize((192, 192), Image.Resampling.LANCZOS)
        icon_192.save(os.path.join(PUBLIC_DIR, "icon-192.png"), "PNG")
        
        icon_512 = square_img.resize((512, 512), Image.Resampling.LANCZOS)
        icon_512.save(os.path.join(PUBLIC_DIR, "icon-512.png"), "PNG")
        print("✓ All icons generated with preserved aspect ratio!")

if __name__ == "__main__":
    inspect_and_fix_favicon()
