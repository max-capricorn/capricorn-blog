module.exports = {
  lang: 'en-US',
  title: '南阳',
  base: '/capricorn-blog/',
  description: '南阳',
  head: [['link', { rel: 'icon', type: 'image/jpeg', href: '/capricorn-blog/images/capricorn.png' }]],

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
      },
      {
        text: 'network',
        link: '/note/network/http.html'
      },
      {
        text: '性能优化',
        link: '/note/性能优化.html'
      },
      {
        text: 'TS',
        link: '/note/typescript/section1.html'
      }
    ],
    logo: '/images/capricorn.png',
    repo: 'https://github.com/max-capricorn/capricorn-blog'
  },
}