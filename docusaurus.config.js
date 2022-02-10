// @ts-nocheck
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'KOBIL mID',
  tagline: 'Welcome To KOBIL mID Documentation',
  url: 'https://kobil-mid.netlify.app',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.svg',
  organizationName: 'KOBIL', // Usually your GitHub org/user name.
  projectName: 'KOBIL mID Solutions', // Usually your repo name.
  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/kobildeveloper/mid-server',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],
  plugins: [
    [
      require.resolve("@cmfcmf/docusaurus-search-local"),
      {
        indexDocs: true,
        indexDocSidebarParentCategories: 1,
        indexBlog: true,
        indexPages: false,
        style: lightCodeTheme,
        lunr: {
            tokenizerSeparator: /[\s\-]+/,
            b: 0.75,
            k1: 1.2,
            titleBoost: 5,
            contentBoost: 1,
            parentCategoriesBoost: 2,
      }
    }
    ]
  ],
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'KOBIL mID',
        logo: {
          alt: 'My Site Logo',
          src: 'img/mylogo.jpg',
        },
        items: [
          {
            type: 'doc',
            docId: 'ssmsoverview/intro',
            position: 'left',
            label: 'mID Server',
          },
        ],
      },

    /*algolia: {
        // Public API key: it is safe to commit it
        apiKey: '612e68bffb146f20f67d12e339e1243b',
        indexName: 'kobil-ssms',
        appId: 'QDORBREG9G'
      },
*/
      footer: {
        style: 'dark',
        links: [
         /* {
            title: 'Docs',
            items: [
              {
                label: 'mID Server',
                to: '/docs/ssmsoverview/intro',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Stack Overflow',
                href: 'https://stackoverflow.com/questions/tagged/docusaurus',
              },
              {
                label: 'Discord',
                href: 'https://discordapp.com/invite/docusaurus',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/docusaurus',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Blog',
                to: '/blog',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/facebook/docusaurus',
              },
            ],
          },*/
        ],
        copyright: `Copyright © ${new Date().getFullYear()} KOBIL GmbH. All Rights Reserved.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
