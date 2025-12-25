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


<div class="warning custom-block" style="padding-top: 8px">
You must still enable redis on wordpress to make a direct connection with the application. [Please follow this guide to do so.](#)
</div>
