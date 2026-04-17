# Preload FCGI cache

We have examined the internal workings of FastCGI caching and its operational behavior. While FastCGI cache is highly efficient and performant, it has a key limitation: cached content is generated only after an actual user requests a page, and cached entries typically expire after one hour.

This means that the first visitor to a page may not benefit from cached performance.

To mitigate this, a cache warm-up process can be implemented. This process periodically requests website URLs using an anonymous user agent, ensuring cached content is generated in advance. This allows pages to be served from cache immediately, maintaining consistent performance for all visitors.


## How to
1. Create a new file named **preload.php** in the public_html directory.
2. Paste the code below into the file.
3. Update the sitemap URL to match your website configuration.
   
```php
<?php

error_reporting(E_ALL);
ini_set('display_errors', 1);

$sitemap = 'https://yoursite.com/sitemap.xml';

function fetchUrl($url) {
    $ch = curl_init($url);

    curl_setopt_array($ch, [
        CURLOPT_RETURNTRANSFER => true,
        CURLOPT_FOLLOWLOCATION => true,
        CURLOPT_TIMEOUT => 15,
        CURLOPT_USERAGENT => 'Mozilla/5.0',
    ]);

    $data = curl_exec($ch);

    if (curl_error($ch)) {
        die("CURL ERROR: " . curl_error($ch) . "\n");
    }


    return $data;
}

function getUrlsFromSitemap($sitemapUrl) {
    $xmlString = fetchUrl($sitemapUrl);

    $xml = simplexml_load_string($xmlString);

    if ($xml === false) {
        die("XML parsing failed\n");
    }

    $urls = [];

    foreach ($xml->url as $url) {
        $urls[] = (string)$url->loc;
    }

    return $urls;
}

function warmUrl($url) {
    $ch = curl_init($url);

    curl_setopt_array($ch, [
        CURLOPT_RETURNTRANSFER => true,
        CURLOPT_FOLLOWLOCATION => true,
        CURLOPT_TIMEOUT => 10,

        CURLOPT_USERAGENT => 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)',

        CURLOPT_HTTPHEADER => [
            'Accept: text/html',
            'Accept-Language: nl-NL,nl;q=0.9',
        ],
    ]);

    $start = microtime(true);
    curl_exec($ch);

    $code = curl_getinfo($ch, CURLINFO_HTTP_CODE);
    $time = round(microtime(true) - $start, 2);

    echo date('H:i:s') . " [$code] ($time s) $url\n";
}

$urls = getUrlsFromSitemap($sitemap);

if (empty($urls)) {
    die("Geen URLs gevonden\n");
}

foreach ($urls as $url) {
    warmUrl($url);
    usleep(200000);
}
```
3. In the Developer Tools, create a new cron job using an execution command. Replace the UUID (Universally Unique Identifier) with your website’s directory name — in this example: `5e43c690-1937-47aa-9ff5-e1c2d7daebb7`.
   
Because all files are cached for one hour, we recommend setting the execution interval to 1 hour. Running the cron job more frequently has no effect due to cache freshness, while longer intervals may negatively impact performance.

<br>

```php
/usr/bin/php /var/www/5e43c690-1937-47aa-9ff5-e1c2d7daebb7/public_html/preload.php > /dev/null 2>&1
```

<br>

3a. If you are unsure of your website’s unique identifier, navigate to the File Manager, right-click on any file, and select **Get Info** to view UUID.

<img width="755" height="333" alt="image" src="https://github.com/user-attachments/assets/c8d5c85e-e041-431d-b332-cf6aa1157b54" />

<br>


4. You can verify the functionality by accessing the file through its public URL. Such as *https://yourdomain.com/preload.php*. If the output completes successfully, cache warming for FastCGI has been enabled.

   
