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
              "label": '8.2',
            }
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
        highlightSearchTermsOnTargetPage: true,
        searchBarShortcut: false
      },
    ],
  ],
  "themeConfig": {
    "home": {
      "navbar": {
        "logo": {
          "src": "img/banne_home.png",
          "alt": ''
        }
    }
  },
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
          "type": 'doc',
          "position": 'right',
          "docId": "getting-started/intro-to-qrvey",
          "label": "Documentation"
        },
        {
          "label": "API Reference",
          "type": 'doc',
          "position": 'right',
          "docId": "software-developer/Working with Qrvey APIs/api-intro"
        },
        {
          "label": "Release Notes",
          "type": 'doc',
          "position": 'right',
          "docId": "release-notes/v8/release-last"
        },
        {
          "type": 'dropdown',
          "label": "User Persona",
          "position": "right",
          "items": [
            {
              "type": 'doc',
              "docId": "admin/admin-center-intro",
              "label": "Solution Architects"
            },
            {
              "type": 'doc',
              "docId": "composer/introduction-to-qrvey-composer",
              "label": "Data Analysts"
            },
            {
              "type": 'doc',
              "docId": "software-developer/introduction-to-software-development",
              "label": "Software Developers"
            },
            {
              "type": 'doc',
              "docId": "deployment/introduction-to-deployment",
              "label": "CloudOps Engineers"
            },
          ],
        },
        {
          "type": 'doc',
          "position": 'right',
          "docId": "video-training/videos-home",
          "label": "Knowledge Base"
        },
       {
          "type": 'docsVersionDropdown',
          "position": 'right',
          "dropdownActiveClassDisabled": true,
        }
      ]
    },
    "image": "img/Qrvey.png",
    "footer": {
      "links": [],
      "copyright": "Copyright © 2023 Qrvey",
    },
  },
}