# Disable file editing

WordPress includes a built-in code editor that enables editing of theme and plugin files directly from the admin dashboard. 
While convenient, this functionality can pose a significant security risk if misused. 
For this reason, it is recommended to disable the editor to maintain a secure environment.

```php [/public_html/wp-config.php]
// Disallow file edit
define( 'DISALLOW_FILE_EDIT', true )
```
