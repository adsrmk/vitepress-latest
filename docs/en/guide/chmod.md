# Secure file and directory permissions

Proper file and directory permissions are essential to prevent unauthorized access or modifications to your WordPress site. Incorrect permissions can allow attackers to overwrite files, 
inject malicious code, or take control of your site.

<div class="info custom-block" style="padding-top: 8px">
While the panel assigns suggested permissions by default, we recommend setting wp-config.php to 440 to enhance your site's security
</div>

<br>

**Recommended Permissions:**

- Files: **644** — Owner can read/write; group and public can only read.
- Directories: **755** — Owner can read/write/execute; group and public can read/execute.
- wp-config.php: **440** — Restricts access to sensitive configuration details.


Tips:

- Avoid using 777 permissions; it grants write access to everyone and is a major security risk.
- Regularly audit permissions, especially after installing plugins or themes.

Correct permissions help ensure that WordPress runs smoothly while minimizing the risk of unauthorized changes.

<br>

## Set wp-includes directory to 444

Setting file permissions to 444 on the wp-includes directory is a simple but effective hardening step for WordPress.

The wp-includes folder contains core libraries that WordPress needs to **read and execute**, but never modify during normal operation. By making these files read-only, you prevent malicious code, vulnerable plugins, or compromised admin accounts from injecting or altering core functionality.

This approach significantly reduces the risk of persistent malware infections and protects the integrity of WordPress core files. 


<div class="warning custom-block" style="padding-top: 8px">
You must not set 444 on the wp-includes directory. Directories need the execute permission to be accessed. If this permission was removed by mistake, reconnect via SFTP and restore the directory permissions to 755 to regain access.
</div>

**To set a secure permission accross all wp-includes files:**

1. Login through [SSH](#)
2. Go into the main website's directory
```ssh
cd public_html
```
3. Execute the following command
```ssh [.vitepress/theme/index.js]
find wp-includes -type f -exec chmod 444 {} \;
```

<br>



## How do edit permissions?
You can change how files and folders are shared by **right-clicking** them and selecting **'Permissions'** from the menu.

<br>

<img width="935" height="491" alt="image" src="https://github.com/user-attachments/assets/30334757-0643-425e-941d-27d0ad63e458" />
<br>
