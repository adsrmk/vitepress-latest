import { createRequire } from 'module'
import { defineAdditionalConfig, type DefaultTheme } from 'vitepress'

const require = createRequire(import.meta.url)
const pkg = require('vitepress/package.json')

export default defineAdditionalConfig({
  lang: 'en-US',
  description: 'Vite & Vue powered static site generator.',

  themeConfig: {
    nav: nav(),

    sidebar: {
      '/guide/': { base: '/guide/', 
       items: sidebarGuide() },
      '/reference/': { base: '/reference/', 
      items: sidebarReference() }
    },

        editLink: {
      pattern: 'https://github.com/adsrmk/vitepress-latest/edit/main/docs/:path',
      text: 'Edit this page on GitHub'
    },
   

    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2019-present Evan You'
    }
  }
})

function nav(): DefaultTheme.NavItem[] {
  return [
    {
      text: 'Guide',
      link: '/guide/what-is-vitepress',
      activeMatch: '/guide/'
    },
    {
      text: 'Developers',
      link: '/reference/site-config',
      activeMatch: '/reference/'
    },
     {
      text: 'Whatsapp',
      link: 'https://api.whatsapp.com/send/?phone=31613332490',
    },
      {
      text: 'Status',
      link: 'https://evcloud.hyperping.app/'
    },
    {
      text: pkg.version,
      items: [
        {
          text: 'Changelog',
          link: 'https://github.com/vuejs/vitepress/blob/main/CHANGELOG.md'
        },
        
        {
          text: 'Contributing',
          link: 'https://github.com/vuejs/vitepress/blob/main/.github/contributing.md'
        }
      ]
    }
  ]
}

function sidebarGuide(): DefaultTheme.SidebarItem[] {
  return [
    {
      text: 'Getting started',
      collapsed: false,
      items: [
        { text: 'What is EVCloud?', link: 'what-is-vitepress' },
        { text: 'Onboarding', link: 'what-is-vitepress' },
        { text: 'Credentials', link: 'credentials.md' },
        { text: 'Add Domain', link: 'add_domain.md' },
        { text: 'Setup DNS records', link: 'setup_dns.md' }
      ]
    },



{
  text: 'Project(s)',
  collapsed: false,
  items: [
       { text: 'Users', link: 'users.md' },
       { text: 'File Manager', link: 'file_manager.md' },
      { text: 'Redirects', link: 'redirect.md' },
      { text: 'Backups', link: 'backups.md' },
      { text: 'Database', link: 'database.md' },

    
      {
      text: 'Applications',
      items: [
        { text: 'General', link: 'general.md' },
        { text: 'Plugins', link: 'plugins.md' },
        { text: 'Themes', link: 'themes.md' },
        { text: 'Users', link: 'wp_users.md' },
        { text: 'Debug', link: 'debug.md' }
      ]
    },

    
    {
      text: 'Email',
      items: [
        { text: 'Setup Mail DNS', link: 'setup_mail_records.md' },
        { text: 'Mailbox', link: 'mailbox.md' },
        { text: 'Forwarders', link: 'forwarders.md' },
        { text: 'Catch All', link: 'catchall.md' },
        { text: 'Spam Settings', link: 'spam_settings.md' },
        { text: 'Out of office', link: 'out_of_office.md' },
        { text: 'File Attachments', link: 'file_attachment.md' },
        { text: 'Add Mailbox to Gmail', link: 'gmail.md' },
        { text: 'Webmail', link: 'webmail.md' }
      ]
    }
  ]
},

    
    {
      text: 'Security',
      collapsed: false,
      items: [
         { text: 'Setup 2FA', link: '2FA.md' },
         { text: 'DNSSEC', link: 'dnssec.md' },
         { text: 'ModSec', link: 'modsec.md' },
        {
      text: 'Wordpress',
      items: [
        { text: 'Obfuscate Version(s)', link: 'hide_wp.md' },
        { text: 'Disable WP-Login', link: 'backend.md' },
        { text: 'Disable REST-API', link: 'rest-api.md' },
        { text: 'Disable File Editing', link: 'disable_file.md' },
        { text: 'Block User Enumeration', link: 'block_user_enum.md' },
        { text: 'File Permissions', link: 'chmod.md' }
        
      ]
    }
  ]
},









    


    
       {
      text: ' Web Performance',
      collapsed: false,
      items: [
         { text: 'Preload fcgi cache', link: 'preload_fcgi.md' }
      ]
    },





    
       {
      text: 'Billing',
      collapsed: false,
      items: [
         { text: 'Invoices', link: 'invoices.md' },
         { text: 'Payment methods', link: 'payments.md' },
         { text: 'Failed payment', link: 'failed-payment.md' },
         { text: 'VAT', link: 'VAT.md' }
      ]
    },

           {
      text: 'Infrastructure',
      collapsed: false,
      items: [
        { text: 'Resource Monitoring', link: 'monitoring.md' },
        { text: 'DDoS Protection', link: 'DDoS.md' },
        { text: 'Uptime Status', link: 'uptime.md' },
        { text: 'Containerization', link: 'containers.md' },
        { text: 'Enterprise Plan', link: 'enterprise.md' }
      ]
    },

           {
      text: 'Developer Tools',
      collapsed: false,
      items: [
         { text: 'IonCube loader', link: 'ioncube.md' },
         { text: 'PHP', link: 'php.md' },
         { text: 'FastCGI', link: 'fastcgi.md' },
         { text: 'SSH Keys', link: 'SSH.md' },
         { text: 'Redis', link: 'redis.md' }
      ]
    },


        {
      text: 'Wordpress app',
      collapsed: false,
      items: [
         { text: 'Increase WP memory limit', link: 'wp_memory.md' },
        { text: 'Setup WP mail', link: 'wp_mail.md' },
         { text: 'Reinstall WP core using cli', link: 'wp_cli.md' },
         { text: 'Reset WP password', link: 'reset_admin_pass.md' },   
         { text: 'Create or restore backup', link: 'ai1wm.md' },
         { text: 'Disable Cron jobs', link: 'cronjobs.md' }
      ]
    },


    
    
    {
      text: 'Issues',
      collapsed: false,
      items: [
         { text: 'ERR_CONN_REFUSED', link: 'ERR_CONNECTION_REFUSED.md' },
        { text: 'ERR_NOT_RESOLVED', link: 'ERR_NAME_NOT_RESOLVED.md' },
       { text: 'ERR_SSL_PROTOCOL', link: 'ERR_SSL_PROTOCOL_ERROR.md' },
        { text: 'Image upload error', link: 'Upload.md' },
         { text: 'Error Database Conn.', link: 'connection_db.md' },
        { text: 'ERR_502: Bad Gateway', link: '502.md' },
        { text: 'ERR_1015: Rate Limited', link: '1015.md' },
       { text: 'Requesting SSL', link: 'SSL.md' },
        { text: 'Elementor 500', link: 'elementor_500.md' },
        { text: 'Unable to access FTP', link: 'SFTP.md' },
        { text: '400: Bad Request', link: '400.md' },
        { text: 'Internationalization', link: 'i18n' }
      ]
    },



    
    {
      text: 'Customization',
      collapsed: false,
      items: [
        { text: 'Using a Custom Theme', link: 'custom-theme' },
        {
          text: 'Extending the Default Theme',
          link: 'extending-default-theme'
        },
        { text: 'Build-Time Data Loading', link: 'data-loading' },
        { text: 'SSR Compatibility', link: 'ssr-compat' },
        { text: 'Connecting to a CMS', link: 'cms' }
      ]
    },
    {
      text: 'Experimental',
      collapsed: false,
      items: [
        { text: 'MPA Mode', link: 'mpa-mode' },
        { text: 'Sitemap Generation', link: 'sitemap-generation' }
      ]
    },
    { text: 'Config & API Reference', base: '/reference/', link: 'site-config' }
  ]
}

function sidebarReference(): DefaultTheme.SidebarItem[] {
  return [
    {
      text: 'Reference',
      items: [
        { text: 'Site Config', link: 'site-config' },
        { text: 'Frontmatter Config', link: 'frontmatter-config' },
        { text: 'Runtime API', link: 'runtime-api' },
        { text: 'CLI', link: 'cli' },
        {
          text: 'Default Theme',
          base: '/reference/default-theme-',
          items: [
            { text: 'Overview', link: 'config' },
            { text: 'Nav', link: 'nav' },
            { text: 'Sidebar', link: 'sidebar' },
            { text: 'Home Page', link: 'home-page' },
            { text: 'Footer', link: 'footer' },
            { text: 'Layout', link: 'layout' },
            { text: 'Badge', link: 'badge' },
            { text: 'Team Page', link: 'team-page' },
            { text: 'Prev / Next Links', link: 'prev-next-links' },
            { text: 'Edit Link', link: 'edit-link' },
            { text: 'Last Updated Timestamp', link: 'last-updated' },
            { text: 'Search', link: 'search' },
            { text: 'Carbon Ads', link: 'carbon-ads' }
          ]
        }
      ]
    }
  ]
}


