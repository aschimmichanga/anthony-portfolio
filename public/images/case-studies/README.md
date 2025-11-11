# Case Study Images

## 📁 How to Add Your Design Images

### Step 1: Add Your Images Here

Place your design thumbnails in this folder:

```
public/images/case-studies/
  ├── bambu-lab.png (or .jpg)
  ├── onchain-pets.png
  ├── klativa.png
  └── ...
```

### Step 2: Recommended Image Specs

- **Size**: 1600x1200px or 1920x1080px (16:9 or 4:3 ratio)
- **Format**: PNG (with transparency) or JPG
- **File Size**: Keep under 500KB for fast loading
- **Quality**: High resolution for Retina displays

### Step 3: Reference in Code

The images are already configured in `src/components/CaseStudies.js`:

```javascript
thumbnail: "/images/case-studies/bambu-lab.png";
```

### Current Setup

✅ Folder created
✅ Component updated to show thumbnails
✅ Gradient overlay applied (30% opacity, increases to 40% on hover)
✅ Works as background behind your design cards

### Tips

- Export your Figma designs at 2x resolution
- Use descriptive filenames (lowercase, no spaces)
- Images show at 30% opacity behind your card content
- Remove the `thumbnail` property if you want just the gradient background
