# What is FastCGI Cache?

FastCGI Cache is a server-side system that makes your website faster by saving ready-made versions of your pages. 
The first time someone visits a page, the server builds it as normal. Once the page is fully generated, the server stores that result. 
Every visitor after that receives this saved version instead of the server rebuilding the page again.
Because the server skips a lot of work, pages load much faster and the website can handle more visitors at the same time.

<img width="1296" height="748" alt="image" src="https://github.com/user-attachments/assets/ca7fdbfb-a17d-47b5-b875-d5944b880544" />


## Enable FCGI

We do not recommend enabling FastCGI cache while you are still developing your website, as updated content may continue to be served from cache. If this happens, simply purge the cache so NGINX can generate a new version with the latest data.

1. Go to your Developer Tools.
2. In the **NGINX** section, use the toggle to enable FastCGI cache. *If you have multiple domains, select the correct one from the dropdown first.*

<img width="806" height="310" alt="image" src="https://github.com/user-attachments/assets/63f3b2d5-4d25-4ab8-acca-88434075d383" />
