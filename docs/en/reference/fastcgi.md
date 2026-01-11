# What is FastCGI Cache?

FastCGI Cache is a server-side caching mechanism at the NGINX level. Instead of executing PHP and database queries on every request, NGINX stores the fully rendered HTML output of a page after the first request.

On subsequent visits, NGINX serves this cached HTML directly, bypassing PHP-FPM and the database entirely. This drastically reduces server load, lowers response times, and allows the server to handle significantly more concurrent visitors.

<img width="1296" height="748" alt="image" src="https://github.com/user-attachments/assets/ca7fdbfb-a17d-47b5-b875-d5944b880544" />


## Enable FCGI

1. Go to your Developer Tools.
2. In the **NGINX** section, use the toggle to enable FastCGI cache. *If you have multiple domains, select the correct one from the dropdown first.*

<img width="806" height="310" alt="image" src="https://github.com/user-attachments/assets/63f3b2d5-4d25-4ab8-acca-88434075d383" />


<br>

We do not recommend enabling FastCGI cache while you are still developing your website, as updated content may continue to be served from cache. If this happens, simply purge the cache so NGINX can generate a new version with the latest data.
