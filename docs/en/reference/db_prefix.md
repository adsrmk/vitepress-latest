# Change Database Prefix

By default, WordPress uses the `wp_` prefix for all database tables. Changing it to a unique and random prefix improves security by blocking automated SQL injection attacks that target the default prefix. This guide walks you through the process in **four steps**.

<br>

::: warning
This is a `sensitive database operation.` Always create a full backup of your database before you begin. A single mistake can bring your entire site down. This procedure should be performed during a low-traffic period.
:::



### 1. Update Your `wp-config.php` File

This is the first and simplest step.

1. Connect to your site via **FTP or SSH** and open your `wp-config.php` file.
2. Locate the line that defines the table prefix. It will look like this:

```php
$table_prefix = 'wp_';
```

3.	Change 'wp_' to your new, unique prefix. It should end with an underscore. Use a random string of letters and numbers.

```php
// Example of a new, secure prefix
$table_prefix = 'wp_a7d3f8_';
```

4.	Save the file.

> At this point, your site will be broken and will show a database connection error. This is expected. Do not panic. We will now fix it by renaming the database tables to match.

<br>

### 2. Rename All Database Tables

You need to rename all the core WordPress tables and any tables created by plugins that use the old prefix. The easiest way to do this is with a series of SQL queries.  

1. Log in to your database using a tool like **phpMyAdmin** or the command-line client.  
2. Generate `RENAME` queries for each table. You can do this manually, or run a query that generates the queries for you.

```sql
SELECT CONCAT(
  'RENAME TABLE ', table_name, ' TO ', 
  REPLACE(table_name, 'wp_', 'wp_a7d3f8_'), ';'
)
FROM information_schema.tables
WHERE table_name LIKE 'wp_%';
```

> Remember to replace wp_ and wp_a7d3f8_ with your old and new prefixes.
This query will output a list of RENAME commands. Copy this list and run it as a new SQL query. It will look something like this:

```sql
RENAME TABLE wp_commentmeta TO wp_a7d3f8_commentmeta;
RENAME TABLE wp_comments TO wp_a7d3f8_comments;
RENAME TABLE wp_links TO wp_a7d3f8_links;
RENAME TABLE wp_options TO wp_a7d3f8_options;
RENAME TABLE wp_postmeta TO wp_a7d3f8_postmeta;
RENAME TABLE wp_posts TO wp_a7d3f8_posts;
RENAME TABLE wp_termmeta TO wp_a7d3f8_termmeta;
RENAME TABLE wp_terms TO wp_a7d3f8_terms;
RENAME TABLE wp_term_relationships TO wp_a7d3f8_term_relationships;
RENAME TABLE wp_term_taxonomy TO wp_a7d3f8_term_taxonomy;
RENAME TABLE wp_usermeta TO wp_a7d3f8_usermeta;
RENAME TABLE wp_users TO wp_a7d3f8_users;
-- ...and so on for any plugin tables...
```

After running these commands, your site should start working again for the most part, but there are two more critical places where the old prefix is stored.


### 3. Update wp_options table

The wp_options table (which is now named wp_a7d3f8_options) contains a field called wp_user_roles. This field name is based on the old prefix and must be updated.

**Run the following SQL query:**
```sql
UPDATE wp_a7d3f8_options SET option_name = 'wp_a7d3f8_user_roles' WHERE option_name = 'wp_user_roles';
```
> Again, replace the prefixes with your new and old ones.

This ensures that WordPress can still correctly identify user roles and permissions. If you skip this step, all users, including administrators, may lose their permissions.


### 4. Update the wp_usermeta table

Finally, the wp_usermeta table contains multiple rows that use the old prefix as part of the meta_key. These also need to be updated.

**Run the following SQL query:**
```sql
UPDATE wp_a7d3f8_usermeta SET meta_key = REPLACE(meta_key, 'wp_', 'wp_a7d3f8_');
```

This query will find all occurrences of the old prefix in the meta_key column and replace them with the new one. This fixes things like user capabilities, dashboard settings, and other user-specific metadata.



## Final Check

After completing all four steps, clear any caching on your site (object cache, page cache, etc.) and test thoroughly.

- Can you log in and out?
- Do administrator users still have their privileges?
- Are posts, pages, and media loading correctly?
- Do your plugins still function as expected?
  
If everything works, the procedure is complete. You have successfully hardened your database against a common vector of attack.


