module.exports = {
  lang: 'en-US',
  title: 'capricorn',
  base: '/capricorn-blog/',
  description: '一行琉璃 我的最爱',
  head: [['link', { rel: 'icon', type: 'image/jpeg', href: '/capricorn-blog/images/capricorn.png' }]],
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
        link: '/note/webpack.html',
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
      {
        text: 'js',
        link: '/note/js.html'
      }
    ],
    // locales: {
    //   '/': {
    //     selectLanguageName: '简体中文',
    //   },
    //   '/zh/': {
    //     selectLanguageName: 'English',
    //   },
    // },
    logo: '/images/capricorn.png',
    repo: 'https://github.com/max-capricorn/capricorn-blog'
  },
}