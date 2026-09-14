import os
import glob
from PIL import Image

PUBLIC_DIR = r"c:\Users\karim\Desktop\ruh-alquran\public"

def optimize_image(filepath):
    rel_path = os.path.relpath(filepath, PUBLIC_DIR)
    ext = os.path.splitext(filepath)[1].lower()
    if ext not in ['.png', '.jpg', '.jpeg']:
        return None
    
    # Do not convert SVGs or already webp
    dest_path = os.path.splitext(filepath)[0] + ".webp"
    
    orig_size = os.path.getsize(filepath)
    
    try:
        with Image.open(filepath) as img:
            # Preserve transparency if RGBA / P mode
            has_alpha = img.mode in ('RGBA', 'LA') or (img.mode == 'P' and 'transparency' in img.info)
            
            if has_alpha:
                img_conv = img.convert('RGBA')
            else:
                img_conv = img.convert('RGB')
            
            # Max dimension constraint if unnecessarily giant (e.g. > 1920px for hero / > 1200px for cards)
            w, h = img_conv.size
            max_dim = 1920
            if "avatar" in rel_path:
                max_dim = 400
            elif "courses" in rel_path:
                max_dim = 1280
            elif "qr" in rel_path.lower():
                max_dim = 800
            elif "logo" in rel_path.lower():
                max_dim = 600
                
            if max(w, h) > max_dim:
                scale = max_dim / max(w, h)
                new_w, new_h = int(w * scale), int(h * scale)
                img_conv = img_conv.resize((new_w, new_h), Image.Resampling.LANCZOS)
            
            # Test different quality levels to find optimal < 100KB with highest possible visual fidelity
            best_quality = 85
            for q in [92, 88, 85, 82, 78, 72, 65]:
                img_conv.save(dest_path, "WEBP", quality=q, method=6)
                cur_size = os.path.getsize(dest_path)
                if cur_size < 100 * 1024 or q == 65:
                    best_quality = q
                    break
            
            final_size = os.path.getsize(dest_path)
            reduction = (1 - (final_size / orig_size)) * 100
            
            return {
                "file": rel_path,
                "orig_kb": orig_size / 1024,
                "final_kb": final_size / 1024,
                "reduction": reduction,
                "quality": best_quality,
                "dest": os.path.relpath(dest_path, PUBLIC_DIR)
            }
    except Exception as e:
        print(f"Error optimizing {filepath}: {e}")
        return None

def main():
    print("Starting WebP Image Optimization...")
    all_files = []
    for root, dirs, files in os.walk(PUBLIC_DIR):
        # skip node_modules or git if any
        if '.git' in root or 'node_modules' in root:
            continue
        for file in files:
            ext = os.path.splitext(file)[1].lower()
            if ext in ['.png', '.jpg', '.jpeg']:
                all_files.append(os.path.join(root, file))
                
    results = []
    for f in all_files:
        res = optimize_image(f)
        if res:
            results.append(res)
            print(f"✓ {res['file']} -> {res['dest']} | {res['orig_kb']:.1f} KB -> {res['final_kb']:.1f} KB (-{res['reduction']:.1f}%, q={res['quality']})")
            
    print("\n" + "="*60)
    total_orig = sum(r['orig_kb'] for r in results)
    total_final = sum(r['final_kb'] for r in results)
    print(f"Total Original Size: {total_orig/1024:.2f} MB")
    print(f"Total WebP Size:     {total_final/1024:.2f} MB")
    print(f"Overall Reduction:   {(1 - total_final/total_orig)*100:.1f}% savings!")
    print("="*60)

if __name__ == "__main__":
    main()
