# Error Establishing a Database Connection

This error indicates that WordPress is unable to establish a database connection. This is typically caused by incorrect credentials, database corruption, or server-side issues.
Follow the troubleshooting steps below to identify and resolve the problem.


## Verify the Database Credentials in the wp-config.php file
Begin by checking the credentials stored in your WordPress configuration file


1. Login to EVCloud
2. In the Websites section, select your website and open File Manager.
3. Navigate to your WordPress root directory (usually located in /public_html/).
4. Find and open the wp-config.php file for editing, you will find entries like:


   ```php [/public_html/wp-config.php]
define('DB_NAME', 'your_database_name'); 
define('DB_USER', 'your_database_user'); 
define('DB_PASSWORD', 'your_database_password'); 
define('DB_HOST', 'localhost');
    }
}
```


## Verify Database Details in the EVC panel

