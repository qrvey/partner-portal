/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

// See https://docusaurus.io/docs/site-config for all the possible
// site configuration options.

// List of projects/orgs using your project for the users page.
const users = [
  {
    caption: 'User1',
    // You will need to prepend the image path with your baseUrl
    // if it is not '/', like: '/test-site/img/docusaurus.svg'.
    image: '/img/qrvey-logo.png',
    infoLink: 'https://www.qrvey.com',
    pinned: true,
  },
];

const siteConfig = {
  homeTitle:'Begin your journey with our Detailed Documents',
  title: '', // Title for your website.
  tagline: 'Qrvey Documentation',
  url: 'http://partners-staging.qrvey.com.s3-website-us-east-1.amazonaws.com', // Your website URL
  baseUrl: '/', // Base URL for your project */
  // For github.io type URLs, you would set the url and baseUrl like:
  //   url: 'https://facebook.github.io',
  //   baseUrl: '/test-site/',

  // Used for publishing and more
  projectName: 'docs-site',
  organizationName: 'qrvey',
  // For top-level user or org sites, the organization is still the same.
  // e.g., for the https://JoelMarcey.github.io site, it would be set like...
  //   organizationName: 'JoelMarcey'

  // For no header links in the top nav bar -> headerLinks: [],
  headerLinks: [
    // IF YOU CHANGE DOCS LABEL YOU MUST UPDATE CUSTOM JS DROPDOWN(It's the id)
    {
      href: '',
      label: 'DOCS',
    },
    {
      href: '/docs/tutorials/first-analytic-app',
      label: 'TUTORIALS',
    },
    {
      href: '/docs/video-training/analytics/intro-analytics-apps',
      label: 'VIDEOS',
    },
    {
      href: '/docs/faqs/faqs-intro',
      label: 'FAQS',
    },
    { blog: true, label: 'NEWSLETTERS' },
  ],

  algolia: {
    apiKey: '7799174e3198189be19d4bcfa852f9f6',
    appId:'FKFO2CGR6S',
    indexName:'dev_qrvey',
    algoliaOptions: {} // Optional, if provided by Algolia
  },

  blogSidebarTitle: { default: 'Newsletters', all: 'Newsletters' },

  // If you have users set above, you add it here:
  users,

  /* path to images for header/footer */
  headerIcon: 'img/qrvey_footer_logo.svg',
  footerIcon: 'img/qrvey_logo.png',
  favicon: 'img/Qrvey.png',

  /* Colors for website */
  colors: {
    primaryColor: '#0B111A',
    secondaryColor: '#2d476c',
  },

  /* Custom fonts for website */
  
  fonts: {
    myFont: [
      "Roboto-Regular",
      "Serif"
    ],
    myOtherFont: [
      "-apple-system",
      "system-ui"
    ]
  },
  

  // This copyright info is used in /core/Footer.js and blog RSS/Atom feeds.
  copyright: `Copyright © ${new Date().getFullYear()} Qrvey`,

  highlight: {
    // Highlight.js theme to use for syntax highlighting in code blocks.
    theme: 'default',
  },

  // Add custom scripts here that would be placed in <script> tags.
  scripts: [
    '/js/user.js',
  ],
  footerscripts:[
    '/js/custom.js',
    'https://www.gstatic.com/firebasejs/7.2.3/firebase-app.js',
    'https://www.gstatic.com/firebasejs/7.2.3/firebase-auth.js',
    '/js/firebase.js',
    '/js/login.js',
  ],
  homepagescripts:[
    '/js/homepage.js',
  ],
  stylesheets: [
    "https://fonts.googleapis.com/css?family=Montserrat:400,600&display=swap",
  ],
  // On page navigation for the current documentation page.
  onPageNav: 'separate',
  // No .html extensions for paths.
  cleanUrl: true,

  // Open Graph and Twitter card images.
  ogImage: 'img/Qrvey.png',
  twitterImage: 'img/Qrvey.png',
  docsSideNavCollapsible: true

  // Show documentation's last contributor's name.
  // enableUpdateBy: true,

  // Show documentation's last update time.
  // enableUpdateTime: true,

  // You may provide arbitrary config keys to be used as needed by your
  // template. For example, if you need your repo's URL...
  //   repoUrl: 'https://github.com/facebook/test-site',
};

module.exports = siteConfig;
