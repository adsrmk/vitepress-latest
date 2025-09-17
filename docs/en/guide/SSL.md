# Requesting SSL Certificates

Some customers may experience issues when requesting an SSL certificate for their website. This most often occurs shortly after transferring a domain or updating nameservers/DNS records.

Below, we have outlined the most common causes and their respective solutions.


## Troubleshoot


### 1. Error 400: Timeout during connect
```
Failed to issue a Let's Encrypt certificate for example.site.com: LetsEncrypt challenge failed for example.site.com: Some(ServerError { type: Some("urn:ietf:params:acme:error:connection"),
title: None, status: Some(400), detail: Some("91.98.61.44: Fetching http://example.site.com/.well-known/acme-challenge/S2MRYRq83Hi7ADEzBii1fko-ZGuNzp-I73BLyzFYJ28:
Timeout during connect (likely firewall problem)") })
```

This error typically occurs when the firewall (ModSecurity) is active, preventing the request from passing through the WAF. It shares the same status code as a Bad Request (400).
Solution: temporarily disable ModSecurity as described [here](#) and try again.


<br>


### 2. Error 403: Unauthorized
```
Failed to issue a Let's Encrypt certificate for example.site.com: LetsEncrypt challenge failed for example.site.com: Some(ServerError { type: Some("urn:ietf:params:acme:error:unauthorized"), title: None, status: Some(403), detail: Some("2a01:4f2:1c1e:51c7::1: Invalid response from http://example.site.com/.well-known/acme-challenge/ybh4LsRVboU-qkGSJE3s3ElIYu1_5kFT78c9cL3LKuY: 404") })
```
Happens (mostly) short after adding a domain to the panel and updating nameservers or DNS records. In most cases, the issue is related to DNS propagation and will resolve automatically within approximately one hour.

If the problem persists after this period:

1. Select your domain.
2. Open the **Security** tab
3. Try disabling Force HTTPS.
	

<br>


### 3. Error 429: Rate limited
```
Failed to issue a Let's Encrypt certificate for example.site.com: SSL error: Server(ServerError { type: Some("urn:ietf:params:acme:error:rateLimited"), title: None, status: Some(429), detail: Some("too many certificates (5) already issued for this exact set of identifiers in the last 168h0m0s, retry after 2025-09-18 09:13:16 UTC: see https://letsencrypt.org/docs/rate-limits/#new-certificates-per-exact-set-of-identifiers") })
```

If you request more than three certificates within a short period, you may encounter a rate limit error (429). This means Let’s Encrypt has temporarily blocked further certificate requests for your domain or server due to rate limits. The restriction is temporary and will usually lift after a few hours.


<br>

::: tip
If you encounter a different error status code, please contact us. This allows us to resolve the issue and update our support documentation to assist others in the future.
:::

