# 502 Bad Gateway

A Bad Gateway occurs when the PHP-FPM container fails to respond. While server-side resource issues are common, 502s can also happen due to front-end or development changes.

**Common causes**
1. Code or script errors – poorly written scripts, infinite loops, or heavy database queries can block the backend.
2. Heavy queries or scripts – new theme, features or plugins may generate long-running requests that exceed timeouts.
3. Resource limitations – insufficient CPU, RAM, or disk I/O on the backend server. (Mostly happens when site(s) grow in demand and current plan is too low)
   


## Troubleshooting

To re-enable connection with the PHP container, you need to restart it. 

1. Access the cloud panel and head to your [Website↗](https://cloud.envision.nl/websites)
2. In the horizontal menu bar at the top, click **Advanced** and select **Developer tools**
3. In the first section and third row under `Restart PHP container` press **Restart**.

