# Error Establishing a Database Connection

This error indicates that WordPress is unable to establish a database connection. This is typically caused by incorrect credentials, database corruption, or server-side issues.
Follow the troubleshooting steps below to identify and resolve the problem.


## Verify the Database Credentials in the wp-config.php file
Begin by checking the credentials stored in your WordPress configuration file


1. Login to EVCloud
2. In the Websites section, select your website and open File Manager.
3. Navigate to your WordPress root directory (usually located in /public_html/).
4. Find and open the `wp-config.php` file for editing, you will find entries like:


   ```php [/public_html/wp-config.php]
define('DB_NAME', 'your_database_name'); 
define('DB_USER', 'your_database_user'); 
define('DB_PASSWORD', 'your_database_password'); 
define('DB_HOST', 'localhost');
    }
}



## Verify Database Details in the EVC panel
Once you've reviewed the database credentials in the wp-config.php file, verify that they match the correct details for your actual database.

5. In the panel, head to your website and select databases
6. Verify that all details such as DB_NAME, DB_USER and DB_PASSWORD, from `wp-config.php` matches an existing database in this list.

If any of these details doesn't match, you’ll need to update them in the `wp-config.php` file to reflect the correct database name and username.
You can also create new users under the database users section if neccessary.

<br>

## Reset the MySQL user password
If the database details are accurate, the most common issue could be related to the database password. In this case, you can reset the MySQL user's password and update it in the wp-config.php file accordingly.

7. Navigate back to **Database users** section
8. Choose the user for whom you wish to change the password

<img width="1790" height="670" alt="image" src="https://github.com/user-attachments/assets/3908df5b-f0fc-4f32-90e1-2f1f549ae5b8" />

9. Click reset on the top-right of the block, and choose a new password in the input field

<img width="1810" height="910" alt="image" src="https://github.com/user-attachments/assets/fa55452d-5198-4051-a50a-467b26ff512d" />

10. When done, select "Change password". Then update the DB_PASSWORD in your wp-config.php file with the new password.



## Ensure MySQL user has proper permissions

11. Go back to the Database users section
12. Select the user you wish to edit priviliges for.
13. Scroll down and find the Database access section
14. Click the kebab menu (three vertical dots) on the right side and select "Edit privileges"

<img width="1788" height="458" alt="image" src="https://github.com/user-attachments/assets/43bbb6bf-ba83-4a35-9a98-5d73c81d86d4" />

15. Tick the box **"All database privileges"**

<img width="1352" height="586" alt="image" src="https://github.com/user-attachments/assets/66b68a5e-740e-4959-9642-641d6cee5ae9" />

16. Save and exit

<br>


This grants the MySQL user full access to the database, ensuring everything functions correctly.




