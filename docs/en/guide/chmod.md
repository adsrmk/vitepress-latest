# Secure file and directory permissions

Proper file and directory permissions are essential to prevent unauthorized access or modifications to your WordPress site. Incorrect permissions can allow attackers to overwrite files, 
inject malicious code, or take control of your site.

By default, the panel automatically gives files and directories the correct permissions. However, we do recommend setting wp-config.php to 440 for increase security measures.


**Recommended Permissions:**

- Files: **644** — Owner can read/write; group and public can only read.
- Directories: **755** — Owner can read/write/execute; group and public can read/execute.
- wp-config.php: **600 or 440** — Restricts access to sensitive configuration details.


Tips:

- Avoid using 777 permissions; it grants write access to everyone and is a major security risk.
- Regularly audit permissions, especially after installing plugins or themes.
- Use your hosting control panel, FTP client, or SSH commands like chmod to adjust permissions.

Correct permissions help ensure that WordPress runs smoothly while minimizing the risk of unauthorized changes.

<br>

## How do edit permissions?
You can change how files and folders are shared by **right-clicking** them and selecting **'Permissions'** from the menu
<br>
<img width="935" height="491" alt="image" src="https://github.com/user-attachments/assets/30334757-0643-425e-941d-27d0ad63e458" />

