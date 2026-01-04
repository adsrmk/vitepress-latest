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
3. In developer tools, create a new cron job w/ **execution command**. Make sure to replace the **UUID** (Universally Unique Identifier) with your website's directory.
In this case its `5e43c690-1937-47aa-9ff5-e1c2d7daebb7`
   <br>
   
```php
/usr/bin/php /var/www/5e43c690-1937-47aa-9ff5-e1c2d7daebb7/public_html/preload.php > /dev/null 2>&1
```



   /usr/bin/php /var/www/5e43c690-1937-47aa-9ff5-e1c2d7daebb7/public_html/preload.php > /dev/null 2>&1

   
