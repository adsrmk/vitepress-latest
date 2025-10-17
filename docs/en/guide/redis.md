# Configuring Redis

Redis is a open-source in-memory database that is excellent for caching, session management and speeding up data processing. Our servers make use of Redis software to improve performance, and this technology can also be easily integrated with your WordPress website. Activating Redis requires only a few simple steps and can be completed within minutes.


1. Make sure Redis is enabled in the cloud panel. Go to **Advanced → Developer Tools** and activate (toggle) the last option, Redis.
2. Install the [Redis plugin](https://wordpress.org/plugins/redis-cache/) 
3. In WordPress, go to Settings → Redis and click on **Enable Object Cache.**

<br>

::: tip Note
You may get a 502: Bad Gateway error after activating Redis. This is usually caused because the Redis configuration is not yet correctly connected to the application server. 
This is easily solved by restarting your PHP container. In Advanced → Developer Tools, select the first Restart button under .PHP 
:::

If all the previous steps have been performed correctly, you can check that the client has successfully connected to the server. Redis is now active.

