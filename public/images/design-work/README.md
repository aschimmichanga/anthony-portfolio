# Design Work Images

Place your design work images in this directory.

## Image Specifications

- **Format**: PNG, JPG, or WebP
- **Recommended Size**: 800-1200px width (height can vary)
- **Aspect Ratio**: Flexible (masonry grid supports various sizes)
- **File Naming**: Use descriptive names like `brand-identity.png`, `ui-components.png`, etc.

## How to Add Your Designs

1. Add your images to this folder (`public/images/design-work/`)
2. Update the `designWork` array in `src/components/CaseStudies.js`:
   - Replace placeholder image paths with your actual image filenames
   - Update titles, descriptions, and tags to match your work

## Example

```javascript
{
  title: 'Your Project Name',
  description: 'Brief description of the design work',
  image: `${process.env.PUBLIC_URL}/images/design-work/your-image.png`,
  tags: ['Tag1', 'Tag2'],
  link: 'https://example.com' // Optional: add URL if project has a live link (or null if no link)
}
```

**Note:** If a `link` is provided, the card becomes clickable and opens in a new tab. An external link icon (↗) will appear in the hover overlay.

## Tips

- Use high-quality images for best display
- Vary image sizes for visual interest in the masonry grid
- Keep descriptions concise (1-2 sentences)
- Use 2-3 relevant tags per project
