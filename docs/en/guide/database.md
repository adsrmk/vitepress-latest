# Databases

Databases are structured systems designed to store, organize, and retrieve information efficiently. WordPress relies on a database to manage your website’s core architecture—including posts, pages, comments, metadata, and user configurations. 

While WordPress traditionally utilizes MySQL, our infrastructure operates on the latest stable release of **MariaDB**. MariaDB is a highly optimized, open-source relational database developed as a performance-oriented alternative to MySQL. It is renowned for its speed, scalability, and advanced features such as enhanced GIS and JSON support.

<br>


## Creating a Database

A database must be initialized before it can store or maintain data.

<div class="tip custom-block" style="padding-top: 8px">
If you use our automated WordPress installer, a database will be created and configured for your site automatically.
</div>

1. Click the **Add Database** button located in the top-right corner of the panel.
2. Enter a unique name for your database.
3. **Optional:** You may create a new database user or assign existing users and permissions during this step.
4. Click **Add** to finalize the creation. Your new database will now appear in the list.

<br>

## Managing a Database

To manage your data directly, navigate to the database list, select your target database, and click the **phpMyAdmin** button. 

<div class="warning custom-block" style="padding-top: 8px">
phpMyAdmin is an advanced administrative tool. Direct database manipulation is recommended for experienced users only. Incorrect configurations can cause critical site failures. We strongly recommend verifying that your website has been functioning correctly within the last 24 hours before making changes. If a manual error occurs, utilize the backup feature to restore your database. 
</div>

<br>

### Managing Users
To grant specific individuals or applications access to your database:

1. Select your database from the list.
2. Under the **Database Users** section, click **Add Database User**.
3. Select an existing user from the dropdown or create a new profile.
4. Define the specific database privileges or grant **Full Access**.

<br>


### Importing an SQL File
Importing is essential for site migrations. Supported formats include uncompressed `.sql` files or compressed `.gz` and `.zip` archives. The maximum upload limit is **500MB**.

1. Click the **Upload** icon.
2. Browse your local files, select the desired SQL archive, and confirm the upload.

<br>

### Exporting an SQL File
Exporting creates a comprehensive backup of your data, downloaded as a compressed `.sql.gz` file. 

1. Select your database.
2. Click the **Download** button to generate and save the export.
*Periodic manual exports are recommended as a secondary safety measure alongside automated backups.*

<br>


## Database User Management

Database users interact with your data based on defined "privileges." As the administrator, you can control whether a user can only read data or if they have the authority to insert, modify, or delete records.

<br>

### Adding a New User

1. In the top-right corner of the Users section, click **Add User**.
2. Provide a secure username and password.
3. Under **Database Access**, define the user's scope. You can grant access to all databases or restrict the user to a specific one.
4. Refine permissions by toggling **All Database Privileges** or selecting specific roles.
5. Click **Add** to save the user profile.

<br>

### Modifying Privileges or Revoking Access

1. Navigate to the **Users** tab.
2. Locate the target user and click the **three vertical dots** (kebab menu) on the right side of their row.
3. Select **Edit Privileges** to adjust permissions or **Revoke Access** to remove the user from a specific database.
4. If editing, uncheck **All Database Privileges** to manually select specific rights (e.g., SELECT, INSERT, UPDATE).

<br>

### Deleting Databases or Users

To permanently remove a database or user:

1. Select the desired database or user profile.
2. Scroll to the bottom of the management page.
3. Click the **Delete** button.

<div class="warning custom-block" style="padding-top: 8px">
This action is irreversible. Once deleted, all associated data is permanently purged from the server.
</div>

<br>
