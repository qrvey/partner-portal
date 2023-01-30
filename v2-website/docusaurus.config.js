module.exports = {
  "title": "Qrvey Documentation",
  "tagline": "Qrvey Documentation",
  "url": "http://partners-staging.qrvey.com/",
  "baseUrl": "/",
  "organizationName": "qrvey",
  "projectName": "docs-site",
  "onBrokenLinks": 'ignore',
  "onBrokenMarkdownLinks": 'ignore',
  "scripts": [
    "/js/custom.js",
    "/js/user.js",
    'https://www.gstatic.com/firebasejs/7.2.3/firebase-app.js',
    'https://www.gstatic.com/firebasejs/7.2.3/firebase-auth.js',
    '/js/firebase.js',
    '/js/homepage.js'
  ],
  "stylesheets": [
    "https://fonts.googleapis.com/css?family=Montserrat:400,600&display=swap",
  ],
  "favicon": "img/Qrvey.png",
  "customFields": {
    "homeTitle": "Begin your journey with our Detailed Documents",
    "blogSidebarTitle": {
      "default": "Newsletters",
      "all": "Newsletters"
    },
    "users": [{
      "caption": "User1",
      "image": "/img/qrvey-logo.png",
      "infoLink": "https://www.qrvey.com",
      "pinned": true
    }],
    "fonts": {
      "myFont": [
        "Roboto-Regular",
        "Serif"
      ],
      "myOtherFont": [
        "-apple-system",
        "system-ui"
      ]
    },
    homepagescripts: [
      "/js/homepage.js",
    ],
    rules: [{
      test: /\.css$/,
      use: ["style-loader", "css-loader", "postcss-loader"]
    }]
  },
  "presets": [
    [
      "@docusaurus/preset-classic",
      {
        "docs": {
          "showLastUpdateAuthor": true,
          "showLastUpdateTime": true,
          "path": "../docs",
          sidebarPath: require.resolve('../v2-website/sidebars.json'),
          "lastVersion": "current",
          "versions": {
            "current": {
              "label": '8.0',
            },
            '6.5': {
              "label": '6.5 and earlier',
              "path": 'version-6.5',
            },
          },
        },
        "blog": {
          "path": "blog"
        },
        "theme": {
          "customCss": require.resolve('./src/css/customTheme.css')
        }
      }
    ]
  ],
  "plugins": [
    [
      require.resolve("@easyops-cn/docusaurus-search-local"),
      {
        // ... Your options.
        // `hashed` is recommended as long-term-cache of index file is possible.
        hashed: true,
        // For Docs using Chinese, The `language` is recommended to set to:
        // ```
        // language: ["en", "zh"],
        // ```
        // When applying `zh` in language, please install `nodejieba` in your project.
        indexPages: false,
        indexBlog: false,
        searchResultLimits: 50,
        searchResultContextMaxLength: 200,
        explicitSearchResultPath: true,
        highlightSearchTermsOnTargetPage: true
      },
    ],
  ],
  "themeConfig": {
    "colorMode": {
      "defaultMode": 'light',
      "disableSwitch": true,
      "respectPrefersColorScheme": false,
    },
    "navbar": {
      "title": "",
      "logo": {
        "src": "img/qrvey_footer_logo.svg",
        "alt": ''
      },
      "items": [
        {
          "type": 'docsVersionDropdown',
          "position": 'right',
          "dropdownActiveClassDisabled": true,
        },
        {
          "type": 'dropdown',
          "label": "Docs",
          "position": "right",
          "items": [
            {
              "type": 'doc',
              "docId": "get-started/get-started-intro",
              "label": "Getting Started",
            },
            {
              "type": 'doc',
              "docId": "ui-docs/qrvey-composer-overview",
              "label": "Qrvey Composer",
            },
            {
              "label": "Admin Docs",
              "type": 'doc',
              "docId": "admin/admin-intro"
            },
            {
              "label": "Developer Docs",
              "type": 'doc',
              "docId": "dev-docs/dev-docs-overview"
            },
            {
              "label": "Special Features",
              "type": 'doc',
              "docId": "special-features/special-features-overview"
            },
            {
              "label": "Release Notes",
              "type": 'doc',
              "docId": "release-notes/release-last"
            },
          ]
        },
        {
          "type": 'doc',
          "position": 'right',
          "docId": "video-training/building-qrvey-sample/multi-tenancy-architecture",
          "label": "Videos"
        },
        {
          "type": 'doc',
          "docId": "faqs/ask-us",
          "label": "FAQS",
          "position": "right"
        },
      ]
    },
    "image": "img/Qrvey.png",
    "footer": {
      "links": [],
      "copyright": "Copyright © 2023 Qrvey",
    },
  },
}