---
# 基于 VitePress 默认首页布局
layout: home

# 首页头部（hero）配置
hero:
  name: "Eric's Notes"
  text: "学术笔记管理站"  # 更贴合主题的主标题
  tagline: 整理、沉淀、分享各学科知识笔记  # 更具体的副标题，突出功能
  # 增加头部图片（可选，建议用学术相关图标，如笔记本/书籍）
  image:
    src: https://free.picui.cn/free/2025/12/14/693e4e3273552.png  # 需在 public 目录放置该图片（或替换为你的图片路径）
    alt: 学术笔记图标
  # 操作按钮（替换为更实用的功能入口）
  actions:
    - theme: brand  # 主按钮
      text: 浏览笔记目录
      link: /markdown-examples  # 假设笔记目录放在 /notes 路径下
    - theme: alt  # 次要按钮
      text: 搜索笔记
      link: /search/  # 假设搜索页路径

# 核心功能区（替换为学术笔记场景的关键功能）
features:
  - title: 学科分类清晰
    details: 按数学、计算机、物理等学科分类，快速定位目标笔记
    icon: 📚  # 用 emoji 增强视觉（也可替换为自定义图标）
  - title: 支持学术格式
    details: 完美兼容 LaTeX 公式、代码块、表格等学术内容展示
    icon: ∑
  - title: “实时更新”
    details: 持续沉淀学习笔记，记录知识积累过程
    icon: ⏳
  - title: 响应式设计
    details: 适配电脑、平板、手机，随时随地查阅笔记
    icon: 📱
---

<div style="
  width: 100%;
  text-align: center;
  padding: 2rem 0;
  margin-top: 3rem;
  border-top: 1px solid #eaecef;
  color: #666;
  font-size: 0.9rem;
">
  © 2024 Eric's Notes. 学术笔记仅用于个人学习与分享。
</div>