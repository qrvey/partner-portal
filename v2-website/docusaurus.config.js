module.exports={
  "title": "Qrvey Documentation",
  "tagline": "Qrvey Documentation",
  "url": "http://http://partners-staging.qrvey.com/",
  "baseUrl": "/",
  "organizationName": "qrvey",
  "projectName": "docs-site",
  "onBrokenLinks":'ignore',
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
      "/js/homepage.js"
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
  "plugins": [
    [require.resolve('@cmfcmf/docusaurus-search-local'), {
      indexDocs: true,
      docsRouteBasePath: '/docs',

  // Whether to also index the titles of the parent categories in the sidebar of a doc page.
  // 0 disables this feature.
  // 1 indexes the direct parent category in the sidebar of a doc page
  // 2 indexes up to two nested parent categories of a doc page
  // 3...
  //
  // Do _not_ use Infinity, the value must be a JSON-serializable integer.
  indexDocSidebarParentCategories: 10,

  // whether to index blog pages
  indexBlog: true,
  // must start with "/" and correspond to the routeBasePath configured for the blog plugin
  // use "/" if you use blog-only-mode
  // (see https://v2.docusaurus.io/docs/2.0.0-alpha.70/blog#blog-only-mode)
  blogRouteBasePath: '/blog',

  // whether to index static pages
  // /404.html is never indexed
  indexPages: false,

  // language of your documentation, see next section
    }],
  ],
  "themeConfig": {
    "navbar": {
      "title": "",
      "logo": {
        "src": "img/qrvey_footer_logo.svg"
      },
      "items": [
        {
          "label": "DOCS",
          "href": "docs",
          "position": "right",
          "items": [
            {
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
          "href": "/docs/video-training/release/version-6.0",
          "label": "VIDEOS",
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
      "copyright": "Copyright © 2021 Qrvey",
    },
    "algolia": {
      "apiKey": "7799174e3198189be19d4bcfa852f9f6",
      "appId": "FKFO2CGR6S",
      "indexName": "staging_qrvey",
      "algoliaOptions": {page: 0,
      nbHits: 40,
      nbPages: 2,
      hitsPerPage: 200,
      exhaustiveNbHits: true},

    }
  },
}