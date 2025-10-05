# Configure email for Wordpress

To enable your website to send and receive emails — for example, from contact or order forms — you’ll need to configure **SMTP (Simple Mail Transfer Protocol)**.  
Several plugins make this process easy. In this guide, we’ll use [Easy WP SMTP](https://wordpress.org/plugins/easy-wp-smtp/).
<br>

## Why SMTP is Important
By default, WordPress uses the PHP `mail()` function to send emails. Many providers block or limit this function, which can cause delivery issues. Using SMTP allows your website to send emails through a trusted mail server — improving deliverability and ensuring that messages are properly authenticated.

## Install

1. Choose Your SMTP Mailer
After installing and activating the plugin, go to **WP Mail SMTP → Settings** in your WordPress dashboard.  
Scroll down to the **Mailer** section and select **Other SMTP** (bottom-right corner).  
This option allows you to manually enter your email provider’s SMTP details.

<br>

2. Configure SMTP Settings
Next, enter the SMTP details from your **Email Client Settings** in the **EVC Panel**. These values ensure your website connects securely to your mail server. Make sure to replace `yourdomain.com` with your actual domain name.

| Variable | Value |
|-----------|:-----------:|
| **SMTP Host** | `mail.yourdomain.com` |
| **Encryption** | TLS (Port 587) |
| **SMTP Auth** | Enabled |
| **SMTP Username** | Your full email address |
| **SMTP Password** | Your email password |


<br>

In the final two input fields (name and email), specify how you'd like your customers to receive and interact with the emails you send.

<br>


3. Finish Setup and Send a Test Email

If you’d like extra features such as weekly reports, detailed logs, or email alerts (Pro version), you can enable them during setup.  
If not, simply click **Next** or **Skip** to continue.

Once the configuration is complete, send a **test email** to verify that everything is working correctly.  
You should see a success message confirming that your SMTP setup is active and functional.



