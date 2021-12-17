module.exports={
  "title": "Qrvey Documentation",
  "tagline": "Qrvey Documentation",
  "url": "http://http://partners-staging.qrvey.com/",
  "baseUrl": "/",
  "organizationName": "qrvey",
  "projectName": "docs-site",
  "onBrokenLinks":'ignore',
  "onBrokenMarkdownLinks":'ignore',
  "scripts": [
    "/js/custom.js",
    "/js/user.js",
    'https://www.gstatic.com/firebasejs/7.2.3/firebase-app.js',
    'https://www.gstatic.com/firebasejs/7.2.3/firebase-auth.js',
    '/js/firebase.js',
    '/js/login.js',
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
    "users": [
      {
        "caption": "User1",
        "image": "/img/qrvey-logo.png",
        "infoLink": "https://www.qrvey.com",
        "pinned": true
      }
    ],
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
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader", "postcss-loader"]
      }
    ]
  },
  "presets": [
    [
      "@docusaurus/preset-classic",
      {
        "docs": {
          "homePageId": "index",
          "showLastUpdateAuthor": true,
          "showLastUpdateTime": true,
          "path": "../docs",
          sidebarPath:require.resolve('../v2-website/sidebars.json'), 
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
  "plugins":   [
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

      },
    ],
  ],
  "themeConfig": {
    "navbar": {
      "title": "",
      "logo": {
        "src": "img/qrvey_footer_logo.svg"
      },
      "items": [
        {
          "label": "Docs",
          "href": "/docs/get-started/get-started-intro",
          "position": "right"
        },
        {
          "href": "/docs/video-training/release/version-6.3",
          "label": "Self Service Training",
          "position": "right"
        },
        {
          "href": "/docs/faqs/ask-us/",
          "label": "Knowledge Base",
          "position": "right"
        },
        {
          "href": "/docs/video-training/release/version-6.3",
          "label": "Coming up",
          "position": "right"
        },
      ]
    },
    "image": "img/Qrvey.png",
    "footer": {
      "links": [],
      "copyright": "Copyright © 2021 Qrvey",
    },
  },
}