# Reinstall Wordpress Core using CLI

::: tip 
We recommend creating a back-up of your website before proceeding.
:::

<br>

1. Login to your terminal/SSH. If you do not know how - you can [follow the guide here](#)
2. Navigate to the root directory of your WordPress installation by using the following command:

```ssh
cd public_html
```

3. Verify that you're in the correct directory by checking for the presence of the wp-config.php file.
   **Optionally, but recommended.** - You can remove these directories before reinstalling the core. This will help eliminate any unwanted or malicious code from your website. 
  
```ssh
rm -rf wp-admin
rm -rf wp-includes
```

4. Reinstall WordPress Core Files by executing the following command.
   
```ssh
wp core download --force
```


5. Update database if needed.

```ssh
wp core update-db
```



That's all! Your core files have been successfully reinstalled.
