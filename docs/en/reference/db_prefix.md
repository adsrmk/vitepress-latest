# Change Database Prefix

By default, WordPress uses the `wp_` prefix for all of its database tables (e.g., `wp_posts`, `wp_users`). Because this prefix is so widely known, it is frequently targeted by automated SQL injection attacks that are specifically looking for `wp_` tables.  

Changing the prefix to something unique and random (e.g., `wp_a7d3f8_`) is a simple and effective way to prevent a large class of these automated attacks.  

This process involves **four main steps**:  
1. Updating `wp-config.php`  
2. Renaming the tables in the database  
3. Updating the `wp_options` table  
4. Updating the `wp_usermeta` table

::: warning
This is a sensitive database operation. Always create a full backup of your database before you begin. A single mistake can bring your entire site down. This procedure should be performed during a low-traffic period.
:::


