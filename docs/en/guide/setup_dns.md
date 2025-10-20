# Setup DNS records

Every domain name relies on DNS (Domain Name System) to connect visitors to the right server. When you register a domain, it initially points to the nameservers of your domain registrar. To make your domain function properly with our services, you need to change the nameservers to ours or setup dns records. This ensures that all web traffic is directed correctly to our servers, enabling your website and email services to operate properly.



When connecting your domain you have **2 options.**

1. **Change Nameservers Completely**. If you want everything (website, mail, subdomains) to work automatically with our system.
EV Cloud will handle all DNS records for you — fully managed and ready to go. 
2. **Manage DNS Separately**. Ideal if you want more control: for example, you use email services from another provider (like Google Workspace or Microsoft 365) but still want to host your website with EV Cloud.



## Op. 1: Nameservers


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


## Op. 2: DNS records

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





