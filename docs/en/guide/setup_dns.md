# Setup DNS records

Every domain name relies on the Domain Name System (DNS) to connect visitors to the correct server. It acts as the internet’s address book, translating your domain name into the location of your website. When you register a domain, it initially points to the nameservers of your registrar. To make a domain fully functional with our services, you can either update the nameservers or configure DNS records manually. Doing so ensures that all web (and email) traffic is routed correctly to our infrastructure, allowing your website and related services to operate smoothly.



When connecting your domain to EV Cloud, you have **two options** depending on how you prefer to manage your DNS settings.
<br>

1. **Change Nameservers Completely**. Choose this option if you want everything — your website, email, and subdomains — to work automatically with our system.
EV Cloud will manage all DNS records for you, ensuring a fully configured setup.
2. **Manage DNS Separately**. This option is ideal if you prefer more control over your DNS configuration. For example, you may want to keep your email services with another provider (such as Google Workspace or Microsoft 365) while hosting your website with EV Cloud. In this case, you’ll manually add the necessary DNS records to route traffic correctly.


## Option 1: Nameservers


1. Login and search for the DNS settings at your registrar.
2. Find nameservers and update them to the following:
   
 ```
ns1.envision.nl
ns2.envision.nl
```

::: tip info
Typically, there are four input fields for nameserver information, but you only need to fill in two of them. This is sufficient for proper configuration.
:::
<br>


## Option 2: DNS records

DNS records are individual entries that define how your domain behaves.
For example, if you wish to keep your nameservers with your registrar, you’ll need to add a DNS record to route traffic correctly.

Each customer’s website runs in an isolated container within our clustered hosting environment, which means every site has its own unique IP address. The following records must be added for website routing: A (IPv4) and AAAA (IPv6). You can find these IP's under your website’s **“At a glance”** section in the EV Cloud panel. 

1. Login to your DNS registrar
2. Under your domain, search for DNS records or settings
3. Add the following records


| Variable | Value |
|-----------|:-----------:|
| A | Input `IPv4` from the cloud panel |
| AAAA | Input `IPv6` from the cloud panel |





