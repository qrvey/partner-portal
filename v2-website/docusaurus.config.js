module.exports = {
  "title": "Qrvey Documentation",
  "tagline": "Qrvey Documentation",
  "url": "http://http://partners-staging.qrvey.com/",
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
          "versions": {
            "current": {
              "label": '7.0',
              "path": '7.0',
            },
          }
        },
        "blog": {
          "path": "blog"
        },
        "theme": {
          "customCss": "../src/css/customTheme.css"
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
        indexDocs: true,
        indexBlog: false,
        docsRouteBasePath: '/docs',
        blogRouteBasePath: '/blogs',
        docsDir: 'docs',
        blogDir: 'blogs',
        searchResultLimits: 100,
        highlightSearchTermsOnTargetPage: true,
        searchResultContextMaxLength: 200,


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
        "href": "/"
      },
      "items": [
        {
          "type": 'docsVersionDropdown',
          "position": 'right',
          "dropdownActiveClassDisabled": true,
        },
        {
          "label": "Docs",
          "href": "docs",
          "position": "right",
          "items": [{
              "label": "Getting Started",
              "to": "/docs/get-started/get-started-intro",
            },
            {
              "label": "Qrvey Composer",
              "to": "/docs/ui-docs/basics/logging-in"
            },
            {
              "label": "Admin Docs",
              "to": "/docs/admin/admin-intro"
            },
            {
              "label": "Developer Docs",
              "to": "/docs/get-started/get-started-architecture"
            },
            {
              "label": "Release Notes",
              "to": "/docs/release-notes/release-last"
            },
          ]
        },
        {
          "href": "/docs/video-training/building-qrvey-sample/multi-tenancy-architecture",
          "label": "Videos",
          "position": "right"
        },
        {
          "href": "/docs/faqs/ask-us/",
          "label": "FAQS",
          "position": "right"
        },
      ]
    },
    "image": "img/Qrvey.png",
    "footer": {
      "links": [],
      "copyright": "Copyright © 2022 Qrvey",
    },
  },
}