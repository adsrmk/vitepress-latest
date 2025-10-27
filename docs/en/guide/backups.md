# Backups

Our systems automatically generate daily backups of all available resources — including email accounts, websites, and databases (where applicable) — every 24 hours around midnight to ensure the integrity and security of your data.
All backups are securely stored on an external S3 object storage platform, providing reliable data management and seamless scalability.


<div class="tip custom-block" style="padding-top: 8px">
Backups from previous versions are <b>retained for up to 7 days.</b> Older backups are automatically overridden by newer versions, with a maximum of 7 backups being kept at any time. 
This policy ensures that our storage servers remain manageable, preventing overflow from unused data accumulating over months or years.
</div>




## Restore or rollback

To restore or rollback to a previous version

1. Navigate to your website and click on the <b>Backups</b> tab.
2. Find the restore point you wish to use, then click on <b>Recover</b> located on the right side of the column. <i>A dropdown menu will appear.</i>
3. You can choose to directly restore either your email, your website, or manually select the specific components you'd like to restore.

