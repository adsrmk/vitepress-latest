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
      '/guide/': { base: '/guide/', items: sidebarGuide() },
      '/reference/': { base: '/reference/', items: sidebarReference() }
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
      text: 'test',
      link: '/email/',
      activeMatch: '/email/'
    },
    {
      text: 'Reference',
      link: '/reference/site-config',
      activeMatch: '/reference/'
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
        { text: 'Add Domain', link: 'add_domain.md' },
        { text: 'Setup DNS records', link: 'setup_dns.md' },
        { text: 'Setup Mail DNS', link: 'setup_mail_records.md' }
      ]
    },


        {
      text: 'Platform',
      collapsed: false,
      items: [
         { text: 'Users', link: 'users.md' },
         { text: 'Redirects', link: 'redirect.md' }
      ]
    },


{
  text: 'Level 1',
  items: [
   
        {
          text: 'Level 3',
          items: [
             { text: 'Users', link: 'users.md' },
    { text: 'Redirects', link: 'redirect.md' },
          ]
        }
      ]
    
  ]
},
    


    
    
    {
      text: 'Security',
      collapsed: false,
      items: [
         { text: 'Setup 2FA', link: '2FA.md' },
         { text: 'DNSSEC', link: 'dnssec.md' },
         { text: 'ModSec', link: 'modsec.md' }
      ]
    },


        {
      text: 'Wordpress appcd',
      collapsed: false,
      items: [
         { text: 'Increase WP memory limit', link: 'wp_memory.md' },
         { text: 'Configure Redis', link: 'redis.md' },
         { text: 'Reinstall WP core using cli', link: 'wp_cli.md' },
         { text: 'Reset WP password', link: 'reset_admin_pass.md' },   
         { text: 'Create or restore backup', link: 'ai1wm.md' }
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
        { text: 'Markdown Extensions', link: 'markdown' },
        { text: '502: Bad Gateway', link: '502.md' },
       { text: 'Requesting SSL', link: 'SSL.md' },
        { text: 'Elementor 500', link: 'elementor_500.md' },
        { text: 'Unable to access FTP', link: 'SFTP.md' },
        { text: '400: Bad Request', link: '400.md' },
        { text: 'Internationalization', link: 'i18n' }
      ]
    },


    {
      text: 'Email(s)',
      collapsed: false,
      items: [
        { text: 'Setup email', link: 'email_smtp.md' },
        { text: 'Block e-mails', link: 'block_emails.md' },
        { text: 'Create an email account', link: 'email_account.md' },
        { text: 'Change e-mail password', link: 'email_password.md' },
        { text: 'Email forwarding', link: 'forwarding.md' },
        { text: 'File attachments', link: 'file_attachment.md' }
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


