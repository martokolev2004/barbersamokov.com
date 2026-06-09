# Gallery Images

Add actual barbershop photos here to replace the placeholder slots in the Gallery section.

## Instructions

1. Get photos from Instagram: @barber_shop_samokov_
2. Recommended sizes:
   - Portrait/tall: 800×1000px minimum
   - Square: 800×800px minimum
3. Format: WebP preferred for performance, JPEG acceptable
4. Naming: `gallery-01.webp`, `gallery-02.webp`, ... `gallery-09.webp`

## How to use in Gallery.tsx

In `components/sections/Gallery.tsx`, replace the `PlaceholderPattern` component with actual `<Image>` tags:

```tsx
import Image from 'next/image'

// Replace PlaceholderPattern with:
<Image
  src={`/images/gallery-${item.id.toString().padStart(2, '0')}.webp`}
  alt={item.label}
  fill
  className="object-cover"
  sizes="(max-width: 768px) 50vw, 33vw"
/>
```

## OG Image

Also add `og-image.jpg` (1200×630px) to this `public/` folder for social sharing previews.
