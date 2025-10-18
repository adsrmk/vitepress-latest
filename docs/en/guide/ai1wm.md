# Create website backup

All-in-One WP Migration is a WordPress plugin that enables you to easily export and back up your site's content, media, plugins, and themes into a single file. 
You can then upload this file to a local or cloud storage location with just one click. 

## Create backup

1. Install the “All-In-One WP Migration” plugin and activate it.
2. On the **Dashboard**, in the left sidebar click on All in One WP Migration, and then click Backups
3. Select **Create Backup** 
4. Download the backup to your local device and save it (for ex. online drive storage)



## Restore a backup

1. Head back to the All-In-One WP Migration on the left sidebar.
2. Select **import**
3. Drag and drop your file, or select "File" from the dropdown menu to browse and choose the downloaded export from your local files.
4. Our platform has a file upload limit of 100MB. If you encounter any issues during the upload, such as the process getting stuck, we recommend uploading your file directly via FTP.


### Upload file with SFTP

If your exported file is larger than 100MB, you will need to **manually upload** it to the "ai1wm-backups" folder.

1. Access your website with SFTP (Secure File Transfer Protocol)
2. Navigate to `public_html/wp-content/ai1wm-backups`
3. Place your exported .wpress file here.


Once the file is uploaded, it will automatically appear in the **Backups** section. Simply select "Restore" from the vertical menu, and your website along with all its contents will be restored.
