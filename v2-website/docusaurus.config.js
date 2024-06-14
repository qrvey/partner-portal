require("dotenv").config();

module.exports = {
  title: "Qrvey Documentation",
  tagline: "Qrvey Documentation",
  url: "http://partners.qrvey.com/",
  baseUrl: "/",
  organizationName: "qrvey",
  projectName: "docs-site",
  onBrokenLinks: "warn",
  onBrokenMarkdownLinks: "warn",
  scripts: ["/js/custom.js", "/js/user.js"],
  stylesheets: [
    "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css",
  ],
  favicon: "img/Qrvey.png",
  customFields: {
    fonts: {
      myFont: ["Roboto-Regular", "Serif"],
      myOtherFont: ["-apple-system", "system-ui"],
    },
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader", "postcss-loader"],
      },
    ],
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          path: "../docs",
          sidebarPath: require.resolve("../v2-website/sidebars.json"),
          lastVersion: "current",
          versions: {
            current: {
              label: "8.5",
            },
          },
        },
        theme: {
          customCss: require.resolve("./src/css/customTheme.css"),
        },
      },
    ],
  ],
  plugins: [
    [
      require.resolve("@easyops-cn/docusaurus-search-local"),
      {
        // ... Your options.
        // `hashed` is recommended as long-term-cache of index file is possible.
        hashed: true,
        indexPages: false,
        indexBlog: false,

        // For Docs using Chinese, The `language` is recommended to set to:
        // ```
        // language: ["en", "zh"],
        // ```
        // When applying `zh` in language, please install `nodejieba` in your project.
        indexPages: false,
        searchResultLimits: 30,
        searchResultContextMaxLength: 200,
        explicitSearchResultPath: true,
        highlightSearchTermsOnTargetPage: true,
        searchBarShortcut: false,
      },
    ],
  ],
  themeConfig: {
    metadata: [{ name: "Qrvey Documentation", content: "Qrvey Documentation" }],
    home: {
      navbar: {
        logo: {
          src: "img/banne_home.png",
          alt: "",
        },
      },
    },
    colorMode: {
      defaultMode: "light",
      disableSwitch: true,
      respectPrefersColorScheme: false,
    },
    navbar: {
      title: "",
      logo: {
        src: "img/qrvey_footer_logo.svg",
        alt: "",
      },
      items: [
        {
          type: "dropdown",
          position: "right",

          label: "Documentation",
          items: [
            {
              label: "All Documentation",
              type: "doc",
              docId: "getting-started/intro-to-qrvey",
            },
            {
              type: "html",
              value:
                '<hr style="border: none; height: 2px; background-color: black; margin: 5px 0;">',
            },
            {
              type: "html",
              value:
                '<b style="color: black;font-size: .875rem;padding: 0.2rem 0.5rem;">By Persona:</b>',
            },
            {
              type: "doc",
              docId: "user-persona/solution-architect",
              label: "Solution Architects",
            },
            {
              type: "doc",
              docId: "user-persona/data-analyst",
              label: "Data Analysts",
            },
            {
              type: "doc",
              docId: "user-persona/software-developer",
              label: "Software Developers",
            },
            {
              type: "doc",
              docId: "user-persona/cloudops-engineer",
              label: "CloudOps Engineers",
            },
          ],
        },
        {
          label: "API Reference",
          type: "doc",
          position: "right",
          docId: "software-developer/Working with Qrvey APIs/api-intro",
        },
        {
          label: "Release Notes",
          type: "doc",
          position: "right",
          docId: "release-notes/v8/release-last",
        },
        {
          type: "dropdown",
          position: "right",
          label: "Knowledge Base",
          items: [
            {
              type: "doc",
              docId: "video-training/videos-home",
              label: "Videos",
            },
            {
              type: "doc",
              docId: "getting-started/faqs-all-personas",
              label: "FAQs",
            },
          ],
        },
        {
          type: "docsVersionDropdown",
          position: "right",
          dropdownActiveClassDisabled: true,
        },
      ],
    },
    image: "img/Qrvey.png",
    footer: {
      links: [],
      copyright: `Copyright © ${new Date().getFullYear()} Qrvey`,
    },
  },
  customFields: {
    apiUrlHomeResult: process.env.PUBLIC_API_URL_HOMEPAGE_RESULTS,
    apiUrlHomePost: process.env.PUBLIC_API_URL_HOMEPAGE_POST,
    apiUrlNotificationPost: process.env.PUBLIC_API_URL_NOTIFICATION_POST,
    apiUrlNotificationResult: process.env.PUBLIC_API_URL_NOTIFICATION_RESULTS,
    apiKey: process.env.PUBLIC_API_KEY_QRVEY,
  },
};
