# Setup Mail DNS

Email DNS records ensure that your messages are delivered correctly, securely, and reliably.
Just like with your website, it’s essential to configure the proper DNS records for your email services.


## Adding records

Email systems rely on several key records — **SPF, DKIM, DMARC, and MX.**
If these are not set up correctly, your emails may fail to deliver or be flagged as spam by other mail providers.

### A record (IPv4)

To ensure proper access to your webmail, make sure you configure the correct IPv4 address.

Start by creating an A record for your mail service.
Replace **yourdomain.com** with your actual domain name, and find your email server IP in the Cloud Panel under the **“At a glance”** section of your dashboard or under domain settings.

| Variable | Hostname | Value |
|-----------|:-----------:|:-----------|
| A | mail.`yourdomain.com` | See **mail server IP** in cloud panel |

<br>


### SPF

SPF (*Sender Policy Framework*) specifies which mail servers are authorized to send emails on behalf of your domain. It helps prevent email spoofing and improves deliverability.
At EVCloud, we use [Mailgun](https://www.mailgun.com/) API and SMTP relay services to send and receive emails. To ensure your emails are delivered reliably, it is important to include Mailgun in your SPF record as an authorized sender.


| Variable | Hostname | Value |
|-----------|:-----------:|:-----------|
| A | @ | v=spf1 include:mailgun.org ~all |

<br>

### DKIM

DKIM (DomainKeys Identified Mail) is an authentication method that uses cryptographic signatures to verify the sender’s identity and ensure that emails haven’t been tampered with during delivery. DKIM is stored as a TXT record.

To enable DKIM for a domain:

1. Go to Websites in the left sidebar.
2. Select the website you wish to configure.
3. Open Domains in the top menu and select the domain to enable DKIM for.
4. Scroll to Email Authentication and toggle DKIM to On.
5. If you are using EV Cloud nameservers, wait for validation.

<div class="info custom-block" style="padding-top: 8px">
If your DNS is hosted elsewhere, follow the on-screen instructions. 
Your record wil look something like this.
</div>


| Variable | Hostname | Value |
|-----------|:-----------:|:-----------|
| TXT | hostingcp._domainkey | Paste the generated DKIM |

<br>

### DMARC

DMARC (*Domain-based Message Authentication, Reporting, and Conformance*) is a protocol that protects your domain from email phishing and spoofing.
It works alongside **SPF and DKIM** to improve email security and ensure that only authorized servers send emails on your behalf.

| Variable | Hostname | Value |
|-----------|:-----------:|:-----------|
| TXT | _dmarc |  v=DMARC1; p=none; rua=mailto:example@yourdomain.com |


DMARC uses three key tags:
- v – Specifies the DMARC version (always DMARC1, at the moment there's no other)
- p – Defines the policy for failed emails:
   - **none** (*no action taken for failed messages*),
   - **quarantine** (*messages that fail DMARC checks are sent to the spam/junk folder*)
   - or **reject** (*blocks delivery and never reaches the recipient*)
- rua – The email address where DMARC reports are sent (e.g., your DNS registrar or business/personal email address).


<div class="tip custom-block" style="padding-top: 8px">
You can configure these values to control what happens with emails that fail authentication checks. But be cautious with 'too strict' policies, as they may block legitimate emails.
</div>



