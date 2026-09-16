import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'backend-learning-note',
  description: '后端工程化课程的学习笔记',
  themeConfig: {
    nav: [
      { text: '首页', link: '/' },
      { text: '快速入门', link: '/01-quickstart' },
      { text: '配置管理', link: '/02-config' },
    ],
    sidebar: [
      {
        text: '模块笔记',
        items: [
          { text: '01-快速入门', link: '/01-quickstart' },
          { text: '02-配置管理', link: '/02-config' },
        ]
      }
    ]
  }
})