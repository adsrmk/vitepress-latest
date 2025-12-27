# Disable REST-API


The WordPress REST API allows applications and services to interact with your site programmatically. While it’s powerful, 
it can also expose data to unauthenticated users if left unrestricted. 
In many setups—especially brochure sites or classic CMS-driven websites—public REST access is unnecessary and increases the attack surface.

<br>

<div class="warning custom-block" style="padding-top: 8px">
Do not restrict the REST API if your site uses Headless WordPress, mobile apps, advanced page builders, or external integrations such as WooCommerce or third-party services, as this may break functionality.
</div>



**Why Restrict REST API Access?**

By default, parts of the REST API are accessible to anonymous visitors. This can allow attackers to:

- Enumerate users and content
- Gather site structure and metadata
- Probe endpoints for vulnerabilities

Restricting access ensures that only authenticated users or trusted services can interact with the API.


```php
add_filter('rest_authentication_errors', function ($result) {
    if (!is_user_logged_in()) {
        return new WP_Error(
            'rest_forbidden',
            'REST API access is restricted.',
            ['status' => 401]
        );
    }
    return $result;
});
```


