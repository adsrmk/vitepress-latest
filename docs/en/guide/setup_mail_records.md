# Setup Mail DNS

Email DNS records ensure that your email communication is delivered correctly and securely. Just as you configure records for your website, it’s equally important to configure them for your email services.
E-Mail systems rely on several important records — including **SPF, DKIM, DMARC, and MX.** If these are not configured correctly, your emails may not be delivered or could be marked as spam by other mail providers.


## Adding records

Make sure to set the correct IPv4 to ensure access to your webmail. Let's start with A record (IPV4)
For hostname change the **"youdomain.com"** and for search your email IP under the cloud panel in the main dashboard "At a glance" 

| Variable | Hostname | Value |
|-----------|:-----------:|:-----------|
| A | mail.`yourdomain.com` | See **IP mail server** in cloud panel |
| AAAA | Input `IPv6` from the cloud panel | Points domain to IPv6 address |
