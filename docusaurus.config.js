module.exports = {
  title: 'TidalCycles',
  tagline: 'Live coding and algorithmic pattern',
  url: 'https://doc.tidalcycles.org',
  baseUrl: '/',
  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'tidalcycles', // Usually your GitHub org/user name.
  projectName: 'tidal-doc', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'TidalCycles',
      logo: {
        alt: 'TidalCycles Logo',
        src: 'img/tidal.png',
      },
      items: [
        {
          to: 'docs/',
          activeBaseRegex: 'docs/(?!api|advanced)',
          label: 'Docs',
          position: 'left',
        },
        {
          to: 'docs/advanced/understanding-innards/What_is_a_pattern',
          activeBasePath: 'docs/advanced',
          label: 'Advanced',
          position: 'left',
        },
        {
          to: 'docs/api/Functions',
          activeBasePath: 'docs/api',
          label: 'API',
          position: 'left',
        },
        {to: 'blog', label: 'Blog', position: 'left'},
        {
          to: 'docs/resource/Community',
          activeBasePath: 'docs/resource/',
          label: 'Community',
          position: 'right',
        },
        {
          type: 'localeDropdown',
          position: 'right',
        },
        {
          href: 'https://github.com/tidalcycles/Tidal',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'TidalCycles',
              to: 'docs/',
            },
            {
              label: 'Community',
              to: 'docs/community/',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Discourse',
              href: 'https://club.tidalcycles.org',
            },
            {
              label: 'Discord',
              href: 'https://discord.gg/ugFq7KfGnB',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/tidalcycles',
            },
            {
              label: 'YouTube',
              href: 'https://youtube.com/tidalcycles',
            },
            {
              label: 'Mastodon',
              href: 'https://post.lurk.org/@tidalcycles',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Blog',
              to: 'blog',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/tidalcycles/Tidal',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} TidalCycles. Built with Docusaurus.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/tidalcycles/tidal-doc/tree/main/',
          showLastUpdateAuthor: true,
          showLastUpdateTime: true,
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl: 'https://github.com/tidalcycles/tidal-doc/tree/main/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
  plugins: ['tidal-tailwindcss-loader'],
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'fr'],
    localeConfigs: {
      en: {
        label: 'English',
      },
      fr: {
        label: 'Français',
      },
    },
  },
};
