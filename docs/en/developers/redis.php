# Redis

Redis (Remote Dictionary Server) is a high-performance Object Cache that makes your website or application faster.

While a standard database (like MySQL) stores information on a hard drive, Redis stores frequently accessed data in the server's RAM (Memory). 
Because reading from memory is much faster than reading from a disk, your site can serve content to visitors quicker.
<br>

**How It Helps You**
- Faster Load Times: Redis reduces the time it takes for your server to "think" by remembering previous database queries
- Handles High Traffic: It acts as a buffer, allowing your site to handle many more simultaneous visitors without crashing
- Better User Experience: Features like shopping carts, user sessions, and live notifications run smoother and faster.


## Enable redis

Redis can be enabled within the control panel under the developer tools like so;

1. Log in to your Hosting Control Panel.
2. Scroll down to the Developer Tools section at the bottom of the page.
3. Locate the Redis section at the bottom
4. Toggle the slider to **"On."**

Once enabled, the Redis application will begin running automatically within your PHP container.
<img width="805" height="174" alt="image" src="https://github.com/user-attachments/assets/7928cc33-b0b7-427d-9b48-a3816489d2cb" />


### Connect w/ Wordpress

If your website is running Wordpress. There is one more step to to make redis work.

1. Log in to WordPress and go to **Plugins.** In the library, search for Redis and install it.

<img width="828" height="375" alt="image" src="https://github.com/user-attachments/assets/a2632e91-fb09-420b-9739-19bc4eaa6638" />

2. In WordPress, go to **Settings → Redis**
3. Click on **Enable Object Cache.**
4. In your `wp-config.php` file add the following and give **my_unique_site_name** a custom name (or leave as default)

```php [/public_html/wp-config.php]
define( 'WP_REDIS_HOST', '127.0.0.1' );
define( 'WP_REDIS_PORT', 6379 );
// Optional: Give this site a unique prefix if you have multiple sites
define( 'WP_CACHE_KEY_SALT', 'my_unique_site_name' );
```


<br>

<div class="warning custom-block" style="padding-top: 8px">
You may get a 502: Bad Gateway error after activating Redis. This is usually caused because the Redis configuration is not yet correctly connected to the application server. This is easily solved by restarting your PHP container. At Advanced → Developer Tools, select the first Restart button under .PHP
</div>


## Tuning Redis

Once you have toggled Redis on, it will run with standard settings. However, fine-tuning your configuration ensures that Redis stays fast while staying within your container’s resource limits. We have prepared a **best practice** configuration below. You can copy and paste this directly into your **redis.conf** file. These settings are optimized for stability and performance in a containerized environment.

**Note:** Only adjust these values if you know what you're doing. 


```ts
bind 127.0.0.1

maxmemory 128mb
maxmemory-policy allkeys-lru

lazyfree-lazy-eviction yes
lazyfree-lazy-expire yes

no-appendfsync-on-rewrite yes

rdbcompression no
rdbchecksum no

save 900 1
save 300 10
save 60 10000
```



