import { defineConfig } from "vitepress"

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Eric's Notes",
  description: "A academic notes website",

  // 新增+修改：markdown 配置（含 MathJax 绘图扩展）
  markdown: {
    lineNumbers: true, // 代码块显示行号
    math: {
      mathjax: {
        options: {
          tex: {
            packages: {'[+]': ['jsgraph']} // 开启函数绘图扩展（核心配置）
          }
        }
      }
    },
    linkify: true, // 自动识别链接并转成可点击形式
    toc: { level: [1, 2, 3] } // 目录层级
  },

  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Examples', link: '/markdown-examples' }
    ],

    sidebar: [
      {
        text: 'Examples',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' },
          { text: 'Calculus Unit 5', link: '/calculus5' },
          { text: 'Calculus Unit 6', link: '/calculus6' },
          { text: 'Calculus Unit 7', link: '/calculus7' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/exing567/ericsnotes' }
    ]
  }
})