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
