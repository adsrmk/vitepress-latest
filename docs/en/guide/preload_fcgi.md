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

<br>

4. You can verify the functionality by accessing the file through its public URL. Such as https://yourdomain.com/preload.php

   
