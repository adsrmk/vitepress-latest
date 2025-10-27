# Modsec

ModSecurity (ModSec) is an open-source Web Application Firewall (WAF) that helps protect web servers and applications from attacks such as SQL injection, cross-site scripting (XSS), and other common web exploits.

It functions as a module for web servers like Apache, Nginx, and IIS, analyzing incoming HTTP requests to log, block, or filter suspicious activity based on predefined security rules.
Our servers include ModSecurity by default, but it must be manually enabled in your cloud panel. Once activated, it enhances your website’s security by mitigating potential threats and attacks.

<div class="warning custom-block" style="padding-top: 8px">
⚠️ Note: Enabling ModSecurity is not recommended for websites still under development. It may block backend requests or cause certain pages to load incorrectly.
</div>

<br>

To enable ModSec, go to the **Security section** in the top navigation of your website’s dashboard, then use the **toggle** switch to activate it.
