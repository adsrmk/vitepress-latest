# Debug

The Debug section provides specialized tools to identify and resolve site errors by controlling WordPress’s built-in troubleshooting modes.

### Troubleshooting Tools

- **WP_DEBUG:** Toggle 'debug' mode on WordPress to catch underlying code issues.
- **WP_DEBUG_LOG:** Save all errors to a specific log file located at wp-content/debug.log for later review or off-screen notice tracking.
- **WP_DEBUG_DISPLAY:** Enable this to show debug messages directly within the page's HTML.

Use WP_DEBUG_LOG for production sites to track errors silently without disrupting the visitor experience. Reserved WP_DEBUG_DISPLAY for development environments only, as it can expose code details to the public.
