import { defineConfig } from 'vitepress'
import mathjax from 'markdown-it-mathjax3'

export default defineConfig({
  title: "Eric's Notes",
  description: "A academic notes website",

  markdown: {
    lineNumbers: true,
    extendMarkdown: (md) => {
      // 核心修正：直接调用 mathjax 函数，而非 md.use(mathjax3, { ... })
      md.use(mathjax, {
        tex: {
          inlineMath: [['$', '$'], ['\\(', '\\)']],
          displayMath: [['$$', '$$'], ['\\[', '\\]']],
          processEscapes: true
        },
        svg: {
          fontCache: 'global'
        }
      })
    },
    linkify: true,
    toc: { level: [1, 2, 3] }
  },

  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Examples', link: '/markdown-examples' }
    ],
    sidebar: [
      {
        text: 'Examples',
        items: [
          { text: 'calculus unit 5', link: '/calculus5' },
          { text: 'calculus unit 6', link: '/calculus6' },
          { text: 'calculus unit 7', link: '/calculus7' }
        ]
      }
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/exing567/ericsnotes' }
    ]
  }
})