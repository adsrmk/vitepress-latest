

# Databases

A database is a structured system used to store and organize information, enabling fast and efficient data retrieval.
WordPress depends on such a system to manage your website’s content — including posts, pages, comments, and other data. While WordPress traditionally uses MySQL, a widely adopted open-source database management system, our servers operate on the latest stable release of MariaDB (version 11+), a fork of MySQL.

MariaDB Server is an open-source relational database that provides an SQL-compatible interface for data access and management. Initially developed as a fully compatible, drop-in replacement for MySQL, MariaDB has since expanded with advanced capabilities such as GIS and JSON support. Renowned for its speed, scalability, and reliability, MariaDB offers a rich ecosystem of storage engines, plugins, and tools—making it an ideal choice for a wide range of web and enterprise applications.



---

## Create a database

To store and maintain data, you need to create a database first.

<div class="info custom-block" style="padding-top: 8px">
If you have installed Wordpress, then a new database will be automatically created and linked to your site.
</div>

1. Click on the **"Add Database"** button located at the top right of the page.
2. Enter your desired database name.
3. <i>Optionally</i>, you can create or add additional users, adjust permissions, or skip this step entirely.
4. Press **"Add"**, and the database will be created and listed.


---


## Manage an database

To access your database, return to the main page, select the desired database, and click the <b>PhpmyAdmin</b> button at the top-right of the page. Note that <i>PhpmyAdmin is an advanced MySQL database management tool</i> and is recommended only for experienced users.

<Note>Only access your database if you are confident in what you are doing, as incorrect settings may damage your website or business. If you encounter any issues, use the backup feature to restore your database. <i>Please make sure your website was functioning correctly within the last 24 hours.</i></Note>


### Users

If you want users to access your database, you can add them or create one at once.

1. Select your database.
2. Under "Database users" - Click <b>Add database user</b>
3. Select a existing user or create a new one.
4. Set database priviliges or grant full access.


### Import SQL file

You can import an SQL file directly into the database, which is useful for when you've migrated your website. The file must be either a compressed format (.gz or .zip) or an uncompressed .sql file, and it should be 500MB or less in size.

1. Click the <b>upload button</b>
2. Browse and select the desired file - Then upload

### Export SQL file

Similarly to importing, you can export the database to save all its data. The export will be downloaded as a .sql.gz file. While not strictly necessary, it is recommended to periodically download a backup of your database. This practice ensures you have a reliable data backup and recovery option in case of data loss or corruption, providing essential protection for your information. 

1. Click the <b>Download</b> button to export an sql.gz file for your database.

---

## Database users

Database users can interact with data, and their access levels and rights vary depending on their roles and tasks. As the owner, you can configure these rights, including permissions to create, insert, or delete data. 

### Add a user

1. At the top-right corner; click <b>Add user.</b>
2. Fill in the username and password for the new user.
3. At the bottom of the form, you’ll find the "Database Access" section. Here, you can specify the user’s privileges and permissions. You can assign these rights to a specific database and define roles by unchecking "All Database Privileges," or you can simply grant all privileges if needed.
4. When finished click the <b>Add</b> button. 


### Change priviliges or revoke access

1. Switch to the <b>Users</b> tab.
2. Click on the user you wish to delete or edit.
3. Locate the user in the "Database Users" section, and click the three vertical dots on the right side of their row.
4. Select <b>Edit priviliges</b> from the dropdown menu or <b>Revoke access</b>
5. Uncheck <b>All database privileges</b> and select only the specific permissions you wish to grant the user.


---

## Delete database or users

if you wish to delete a database or users you can do simply so by clicking on the desired user or db and then scroll to the bottom of the page - then click <b>Delete</b>

<Note>This action is inreversivle and once deleted, all data is lost </Note>







