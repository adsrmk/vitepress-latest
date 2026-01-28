# Idle users and session time-out

By default, a WordPress user session can last for a very long time (up to **14 days**), depending on whether the user checks the **“Remember Me”** box. If a user logs in from a public computer (like at a library or co-working space) and forgets to log out, their account remains accessible and vulnerable.

Implementing an **automatic idle session timeout** is a security best practice that mitigates this risk. We can achieve this with a combination of **PHP** for setting the session duration and **JavaScript** for monitoring user activity.


##  The Interactive Idle Timeout (JavaScript + PHP)

This script is loaded on all admin pages and monitors user activity (mouse movement and key presses).

If no activity is detected for a defined period, a warning message is shown.  
If inactivity continues, the user is automatically redirected to the logout URL.

Create a new JavaScript file, for example:
`/js/idle-logout.js`

```js
(function() {
    // Set the inactivity timeout in milliseconds. 15 minutes = 900000 ms.
    const IDLE_TIMEOUT = 900000; 
    // Set the warning time in milliseconds. 1 minute = 60000 ms.
    const WARNING_TIME = 60000;

    let idleTimer;
    let warningTimer;
    let isWarningVisible = false;

    // Function to reset the timers
    function resetTimers() {
        if (isWarningVisible) {
            return; // Don't reset if the warning is already up
        }
        clearTimeout(idleTimer);
        clearTimeout(warningTimer);

        idleTimer = setTimeout(showWarning, IDLE_TIMEOUT - WARNING_TIME);
    }

    // Function to show the warning
    function showWarning() {
        isWarningVisible = true;
        
        // Create and show a simple warning dialog
        const dialog = document.createElement('div');
        dialog.id = 'idle-warning-dialog';
        dialog.style.cssText = 'position: fixed; top: 50%; left: 50%; transform: translate(-50%, -50%); background: #fff; padding: 40px; border: 1px solid #ccc; z-index: 9999; text-align: center;';
        
        const message = document.createElement('p');
        message.innerHTML = 'You have been idle for a while. You will be logged out in <span id="idle-countdown">60</span> seconds.';
        
        const button = document.createElement('button');
        button.textContent = 'Stay Logged In';
        button.onclick = function() {
            isWarningVisible = false;
            document.body.removeChild(dialog);
            resetTimers();
        };

        dialog.appendChild(message);
        dialog.appendChild(button);
        document.body.appendChild(dialog);

        // Start the final countdown
        let countdown = WARNING_TIME / 1000;
        const countdownElement = document.getElementById('idle-countdown');
        warningTimer = setInterval(function() {
            countdown--;
            if (countdown > 0) {
                countdownElement.textContent = countdown;
            } else {
                logoutUser();
            }
        }, 1000);
    }

    // Function to log the user out
    function logoutUser() {
        // The 'logout_url' will be provided by wp_localize_script
        window.location.href = idle_logout_vars.logout_url;
    }

    // Start listening for activity
    window.onload = resetTimers;
    document.onmousemove = resetTimers;
    document.onkeypress = resetTimers;
    document.onclick = resetTimers;
    document.onscroll = resetTimers;
})();
```

<br>

Now, we need to load this script on admin pages and give it the correct logout URL.
**Add this code to your functions.php**

```php
/**
 * Enqueue the idle logout script on admin pages.
 */
add_action( 'admin_enqueue_scripts', 'enqueue_idle_logout_script' );

function enqueue_idle_logout_script( $hook ) {
    // Do not load on login page
    if ( $hook === 'wp-login.php' ) {
        return;
    }
$script_path = site_url('/js/idle-logout.js');

    wp_enqueue_script(
        'idle-logout',
        $script_path,
        [ 'jquery' ], // ensures proper load order
        '1.0',
        true
    );
    wp_localize_script( 'idle-logout', 'idle_logout_vars', [
        'logout_url' => wp_logout_url( home_url() )
    ]);
}
```

<br>

## End result

1. The idle-logout.js script is loaded on the admin page.
2. If X minutes pass with no activity (IDLE_TIMEOUT - WARNING_TIME), the warning dialog appears, and a countdown begins.
3. If the user clicks "Stay Logged In," the dialog disappears, and the main timer restarts.
4. If the user does nothing for several seconds, the script redirects them to the WordPress logout URL, effectively ending their session.

This system provides a robust and user-friendly way to enforce session timeouts, improving the security posture of your site.



