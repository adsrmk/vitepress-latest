# Schema Markup

Schema markup is a standardized vocabulary of microdata that you add to your HTML to help search engines understand the meaning of your content. 
It tells Google not just that a page has a block of text, but that the text is a recipe, the number `5` is the star rating, and the name **“Jane Doe”** is the author.

This context allows search engines to display your content as a **Rich Snippet** in search results, leading to higher click-through rates.

<img width="1050" height="501" alt="image" src="https://github.com/user-attachments/assets/6d53baa1-101a-4231-b287-629deb9d4941" />


## Why It’s a Developer’s Job

While some SEO plugins can add basic schema, the most valuable and specific schema often requires custom implementation. You need to programmatically add the correct **JSON-LD** data based on the content of the page.

## How to Implement It: JSON-LD

The preferred method for implementing schema is **JSON-LD**. It’s a JavaScript object embedded in a `<script>` tag in the `<head>` or `<body>` of the page. It’s separate from your display HTML, making it cleaner to manage.

## Example: Schema for a “Product” Page in WooCommerce

```php
add_action('wp_head', 'add_product_schema');

function add_product_schema() {
    // Only run on single product pages
    if (!is_product()) {
        return;
    }

    global $product;

    // Ensure we have a valid product object
    if (!is_a($product, 'WC_Product')) {
        return;
    }

    $schema = [
        '@context'    => 'https://schema.org/',
        '@type'       => 'Product',
        'name'        => $product->get_name(),
        'sku'         => $product->get_sku(),
        'description' => wp_strip_all_tags($product->get_short_description()),
        'image'       => wp_get_attachment_url($product->get_image_id()),
        'brand'       => [
            '@type' => 'Brand',
            'name'  => 'Your Brand Name'
        ],
        // Add offers, aggregateRating, etc.
    ];

    // Add review data if available
    if ($product->get_review_count() > 0) {
        $schema['aggregateRating'] = [
            '@type'       => 'AggregateRating',
            'ratingValue' => $product->get_average_rating(),
            'reviewCount' => $product->get_review_count()
        ];
    }

    // Add offer data (price)
    if ($product->get_price()) {
        $schema['offers'] = [
            '@type'         => 'Offer',
            'price'         => $product->get_price(),
            'priceCurrency' => get_woocommerce_currency(),
            'availability'  => $product->is_in_stock()
                ? 'https://schema.org/InStock'
                : 'https://schema.org/OutOfStock',
            'url'           => $product->get_permalink()
        ];
    }
    echo '<script type="application/ld+json">' . json_encode($schema) . '</script>';
}
```

## Common & Important Schema Types

- **Article / NewsArticle**  
  For blog posts and news. Include `author`, `datePublished`, `headline`.

- **Organization**  
  For your main homepage. Include `name`, `logo`, `address`, `sameAs` (social profile links).

- **BreadcrumbList**  
  Defines the breadcrumb trail for a page.

- **FAQPage**  
  For FAQ pages. Can result in rich snippets with expandable questions in search results.

- **LocalBusiness**  
  For businesses with a physical location.



<div class="tip custom-block" style="padding-top: 8px">
[Use this](https://search.google.com/test/rich-results) to validate your schema markup.
</div>




