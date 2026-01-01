# Preload FCGI cache

You can warmup a cache by fetching your websites URL's with a anonymous agent every hour or so.

## How to
1. Create a new file called preload.php under your public_html
2. paste the following code, and change your sitemap URL
   
```php
<?php
$sitemap = 'https://evworkspace.nl/sitemap.xml';
$xml = simplexml_load_file($sitemap);

if (!$xml) {
    die("Failed to load sitemap\n");
}

foreach ($xml->url as $url) {
    $loc = (string) $url->loc;

    $ch = curl_init($loc);
    curl_setopt_array($ch, [
        CURLOPT_RETURNTRANSFER => true,
        CURLOPT_FOLLOWLOCATION => true,
        CURLOPT_TIMEOUT => 10,
        CURLOPT_USERAGENT => 'Nginx-FastCGI-Cache-Warmer',
    ]);

    curl_exec($ch);
    $code = curl_getinfo($ch, CURLINFO_HTTP_CODE);
    curl_close($ch);

    echo date('Y-m-d H:i:s') . " $code $loc\n";

    usleep(200000); // 200ms
}
```

   
