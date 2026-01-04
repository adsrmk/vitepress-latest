# Preload FCGI cache

We’ve taken a look behind the curtain and explored how FastCGI cache works under the hood. It’s efficient, and powerful—but it has one important limitation: the cache is only generated when a real visitor requests a page and remains in cache for only a hour.

But what if you didn’t want to wait for that first visitor?
What if every page of your website was already cached, instantly ready to load, every single time?

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
3. In the Developer Tools, create a new cron job using an execution command. Replace the UUID (Universally Unique Identifier) with your website’s directory name — in this example: `5e43c690-1937-47aa-9ff5-e1c2d7daebb7`.
   
Because all files are cached for one hour, we recommend setting the execution interval to 1 hour. Running the cron job more frequently has no effect due to cache freshness, while longer intervals may negatively impact performance.

<br>

```php
/usr/bin/php /var/www/5e43c690-1937-47aa-9ff5-e1c2d7daebb7/public_html/preload.php > /dev/null 2>&1
```

<br>

3a. If you are unsure of your website’s unique identifier, navigate to the File Manager, right-click on any file, and select **Get Info** to view UUID.

<img width="755" height="333" alt="image" src="https://github.com/user-attachments/assets/c8d5c85e-e041-431d-b332-cf6aa1157b54" />


   
