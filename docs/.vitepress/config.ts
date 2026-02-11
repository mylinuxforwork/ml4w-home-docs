// .vitepress/config.ts
export default {
  title: 'Welcome to ML4W - MyLinuxForWork',
  description: 'Linux tutorials, apps and the ML4W OS - Dotfiles for Hyprland. An advanced and full-featured configuration for the dynamic tiling window manager Hyprland.',
  base: "/ml4w-home/",
  lastUpdated: true,
  cleanUrls: true,

  head: [
    ["link", { rel: "icon", href: "com.ml4w.dotfilesinstaller.svg" }],
  ],

  themeConfig: {
    siteTitle: "Welcome to ML4W",
    logo: "/ml4w.svg",
    outline: "deep",
    docsDir: "/docs",
    nav: [
      { text: "Home", link: "/" },
      {
        text: "More",
        items: [
          {
            text: 'ML4W OS - Dotfiles for Hyprland',
            link: 'https://ml4w.com/os/'
          },
          {
            text: 'Dotfiles Installer',
            link: 'https://ml4w.com/dotfiles-installer/'
          },
          {
            text: 'ML4W on YouTube',
            link: 'https://www.youtube.com/channel/UC0sUzmZ0CHvVCVrpRfGKZfw'
          },
          {
            text: 'Wallpapers',
            link: 'https://github.com/mylinuxforwork/wallpaper'
          },
          // we will add this in future.
          // {
          //  text: 'Troubleshooting →',
          //  link: '/help/troubleshooting'
          // },
        ],
      },
    ],

    sidebar: {
    // future feature may be needed: sep sidebar for dots-installer section or any other
    // basicallyy when user visits /dots-installer/ page it will only show dots-installer menu items
    // just like how vitepress docs sep "refrence" section https://vitepress.dev/

     // '/dots-installer/': [
     //   {
     //    text: "Dots Installer",
     //    items: [
     //       { text: "Overview", link: "/dots-installer/overview" },
     //       { text: "Installation", link: "/dots-installer/installation" },
     //       { text: "Dots Installation", link: "/dots-installer/dots-installation" },
     //       { text: "Dots File", link: "/dots-installer/dots-file" },
     //     ],
     //   },
     // ],

    // default sidebar '/' that shows for all pages except those with specific sidebar rules above...

      '/': [
        {
          text: "General",
          // collapsed: false,
          items: [
            { text: "Imprint", link: "/imprint" },
            { text: "Privacy Policy", link: "/privacy-policy" }
          ],
        }
      ],
    },

    socialLinks: [
      { icon: "github", link: "https://github.com/mylinuxforwork" },
    ],

    footer: {
      message: `Released under the GPL License`,
      copyright: `<a href="https://ml4w.com" target="_blank">
        Copyright © 2026 Stephan Raabe
      </a> <a href="./imprint">Imprint</a> <a href="./privacy-policy">Privacy Policy</a>`,
    },

    returnToTopLabel: 'Go to Top',
    sidebarMenuLabel: 'Menu',
  },
};
