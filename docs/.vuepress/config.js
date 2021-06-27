module.exports = {
  lang: 'en-US',
  title: 'capricorn',
  base: '/blog/',
  description: '一行琉璃 我的最爱',
  head: [['link', { rel: 'icon', type: 'image/jpeg', href: '/images/capricorn.jpeg' }]],
  // locales: {
  //   '/': {
  //     lang: 'zh-CN',
  //   },
  //   '/zh/': {
  //     lang: 'en-US',
  //   },
  // },
  themeConfig: {
    navbar: [
      // NavbarItem
      {
        text: '笔记',
        children: [
          {
            text: 'Webpack',
            link: '/note/webpack.html'
          }
        ]
      },
      { text: '算法', link: 'https://github.com/max-capricorn/leetcode' },
      // { text: '动手练', link: 'https://github.com/seognil-study/learn-by-doing' },
      { text: '关于我', link: '/about/' }
    ],
    sidebar: [
      // SidebarItem
      {
        text: 'webpack',
        link: '/note/webpack.html',
      },
    ],
    // locales: {
    //   '/': {
    //     selectLanguageName: '简体中文',
    //   },
    //   '/zh/': {
    //     selectLanguageName: 'English',
    //   },
    // },
    logo: '/images/capricorn.jpeg',
    repo: 'https://github.com/max-capricorn/blog'
  },
}