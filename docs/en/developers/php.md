# Configure and edit PHP 

PHP (Hypertext Preprocessor) is a server-side scripting language used for web development. 
With EVC, you have limited options to customize your website's functionality and performance.


## PHP Version 

We recommend using the latest stable PHP version for optimal performance and security. 
But, if you prefer a different version, you can switch the PHP engine in the Advanced section under Developer Tools.

<div class="warning custom-block" style="padding-top: 8px">
We do not support PHP versions older than 8.0 due to security and performance reasons. However, if you require an older version, you may request it. 
Please note that we are not responsible for any issues or vulnerabilities that may arise from using outdated PHP versions.
</div>

<img width="844" height="105" alt="image" src="https://github.com/user-attachments/assets/a52a0028-9a8b-4593-9e2e-14de3ad5c608" />


## Extensions

PHP extensions are additional modules that extend the core functionality of PHP. 
They provide extra features such as database connections, image processing, encryption, and more. Extensions can be enabled or disabled within the panel.

You have the option to enable five additional extensions. We suggest activating **brotli** and **apcu** by default.

- **Brotli** – A compression algorithm developed by Google, used for faster and more efficient data compression compared to Gzip. Helps reduce bandwidth usage and improve load times.
- Xmlrpc – Enables XML-RPC (Remote Procedure Call) functionality, allowing PHP applications to communicate with remote servers using XML-based messages.
- Oauth – Provides OAuth authentication support, allowing secure authorization between applications without sharing credentials (commonly used for social logins).
- PdoDblib – A PDO driver for Microsoft SQL Server and Sybase databases using the FreeTDS library. Useful for connecting PHP applications to these database systems.
- **Apcu** – APC User Cache, an in-memory caching solution that speeds up PHP applications by storing frequently accessed data in RAM, reducing the need for repeated database queries.


## PHP error log

A PHP error log is a file that records warnings, errors, and issues occurring in a PHP application. It helps developers debug problems by providing detailed error messages and timestamps.
You can find the PHP error log in your website's home directory, named **php-error.log**

**Since panel version 12.0+ its also possible to view the log directly under the PHP section.**
<br>
<img width="836" height="436" alt="image" src="https://github.com/user-attachments/assets/2e767c22-cd56-463e-aca0-dce89e52263d" />


## PHP.ini editor  <Badge type="info" text="Enterprise" />

<div class="tip custom-block" style="padding-top: 8px">
This feature is only available for enterprise customers on the Managed VPS plan. We recommend editing it only if you are experienced, as the default values are optimized for most of our services.
</div>

It is possible to override and customize PHP values based on your website's needs. For example, if a website requires more resources, you may need to increase the maximum memory limit to ensure smooth performance.
In the developer's tools, under php.ini editor (second block). You can choose to add a new directive

<img width="844" height="166" alt="image" src="https://github.com/user-attachments/assets/5a06a9b1-01fb-42b8-9dfd-ee8a533fc05b" />

You can find possible **PHP directives** on the official site here: https://www.php.net/manual/en/ini.list.php

