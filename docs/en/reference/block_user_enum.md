# Block user enumeration

User enumeration is a common technique attackers use to discover valid WordPress usernames. 
By default, WordPress can expose usernames through author archive URLs, such as ?author=1. Once a valid username is known, attackers can focus brute-force or credential-stuffing attacks more effectively.

**Why Block User Enumeration?**

If user enumeration is left enabled, attackers can:

- Identify valid usernames
- Reduce the time needed to break into accounts
- Target administrators specifically

Blocking this behavior limits the information exposed to anonymous visitors and increases overall site security.
<br>
Add the following code to your `wp-config.php` file to enable this security feature.

```php
if (!is_admin() &&
    isset($_SERVER['QUERY_STRING']) &&
    preg_match('/author=([0-9]*)/i', $_SERVER['QUERY_STRING'])
) {
    wp_die('Access denied');
}
```


