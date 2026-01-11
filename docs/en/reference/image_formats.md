# Image Formatting

Modern web development requires balancing visual fidelity with performance. 
Utilizing next-gen image formats is the most effective way to **reduce page weight**, improve Largest Contentful Paint (LCP), and **save user bandwidth**.

| Format           | Extension | Strength                                      | Browser Support / Notes              |
| ---------------- | --------- | --------------------------------------------- | ----------------------------------- |
| AVIF             | .avif     | Highest compression ratio; HDR support       | High (Chrome, Firefox, Safari)      |
| WebP             | .webp     | Excellent balance of speed and size          | Universal                           |
| JPEG XL          | .jxl      | Progressive loading; lossless JPEG transcoding | Emerging (Safari, Chrome)          |
| JPEG / PNG       | .jpg / .png | Universal compatibility                        | Legacy fallback                     |

<br>


## Formats

### AVIF (AV1 Image File Format)

AVIF offers the most significant byte savings, often reducing file sizes by 50% or more compared to JPEG.
- Best For: High-quality photography, hero banners, and complex graphics where file size is the priority.
- Cons: Higher CPU usage for encoding and decoding; lacks progressive rendering (loads top-to-bottom or all at once).

### WebP

WebP is the industry workhorse. It supports both lossy and lossless compression, as well as alpha transparency.
- Best For: General UI elements, product thumbnails, and replacing transparent PNGs.
- Cons: While better than JPEG, it is generally outperformed by AVIF in high-detail scenarios.

### JPEG XL (JXL)

The newest standard designed to eventually replace all previous formats.
- Best For: Large-scale image libraries (due to lossless transcoding) and responsive web design (due to superior progressive loading).
- New tech: It can “shrink” existing JPEGs by 35% without any generation loss, and you can reconstruct the original JPEG bit-for-bit if needed.

## Auto conversion 
By default, if you upload a JPEG, WordPress keeps it as a JPEG. However, you can use a filter to tell WordPress to convert every upload into a next-gen format automatically.

**code snippet**
```php
// Output AVIFs for newly uploaded JPEGs
function filter_image_editor_output_format( $formats ) {
    $formats['image/jpeg'] = 'image/avif';
    return $formats;
}
add_filter( 'image_editor_output_format', 'filter_image_editor_output_format' );
```
