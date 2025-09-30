# ERR_SSL_PROTOCOL_ERROR

An SSL protocol error occurs when a website’s SSL certificate is misconfigured, invalid, or cannot be verified. 
This prevents the browser from establishing a secure connection with the site.
The browser may display this as ERR_PROTOCOL_ERROR, 
a generic error (commonly seen in Chrome) indicating that something went wrong in the communication between your browser and the server—most often related to SSL issues.

Common causes can be
- SSL/TLS issues (wrong certificate setup or protocol mismatch).
- Browser extensions interfering with the request.


## Troubleshoot

On EVCloud, this error is most likely caused by the SSL certificate being invalid or not yet requested. 
Please follow [this guide](#) to request a free SSL certificate for your website.

If you are using managed cloud services and move a website to another server, this will be resolved automatically.
