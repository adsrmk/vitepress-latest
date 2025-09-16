# Requesting SSL Certificates

We noticed some customers having issues when requesting their SSL certificate for their website(s). 
This mostly happens shortly after they transferred their domain or changed name servers/dns records.

We've listed common causes and how to fix these below

## Troubleshoot


### 1. 400: Timeout during connect
```
Failed to issue a Let's Encrypt certificate for example.site.com: LetsEncrypt challenge failed for example.site.com: Some(ServerError { type: Some("urn:ietf:params:acme:error:connection"),
title: None, status: Some(400), detail: Some("91.98.61.44: Fetching http://example.site.com/.well-known/acme-challenge/S2MRYRq83Hi7ADEzBii1fko-ZGuNzp-I73BLyzFYJ28:
Timeout during connect (likely firewall problem)") })
```

Occurs because firewall (ModSec) is most likely active. It cannot get past the WAF to fulfill the request. It shares the same status code as bad request (400)
The solution is to turn of ModSec, just as described [here](#hello).

<br>


### 2. 404: Unauthorized
```
Failed to issue a Let's Encrypt certificate for example.site.com: LetsEncrypt challenge failed for example.site.com: Some(ServerError { type: Some("urn:ietf:params:acme:error:unauthorized"), title: None, status: Some(403), detail: Some("2a01:4f2:1c1e:51c7::1: Invalid response from http://example.site.com/.well-known/acme-challenge/ybh4LsRVboU-qkGSJE3s3ElIYu1_5kFT78c9cL3LKuY: 404") })
```
This error commonly occurs shortly after adding a domain to the panel and updating nameservers or DNS records. In most cases, the issue is related to DNS propagation and will resolve automatically within approximately one hour.

If the problem persists after this period:
	1.	Select your domain.
	2.	Open the **Security** tab
	3.	Try disabling Force HTTPS.
	4.	Attempt to provision a new SSL certificate.


<br>


### 3. 429: Rate limited
```
Failed to issue a Let's Encrypt certificate for example.site.com: SSL error: Server(ServerError { type: Some("urn:ietf:params:acme:error:rateLimited"), title: None, status: Some(429), detail: Some("too many certificates (5) already issued for this exact set of identifiers in the last 168h0m0s, retry after 2025-09-18 09:13:16 UTC: see https://letsencrypt.org/docs/rate-limits/#new-certificates-per-exact-set-of-identifiers") })
```

If you have requested more then 3+ certificates in a short amount of time. You get rate limited (429). it means Let’s Encrypt has temporarily blocked further certificate requests from your domain or server because you’ve hit their rate limits. Try again in a few hours.


