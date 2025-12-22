import DefaultTheme from 'vitepress/theme'
import { h } from 'vue'
import PagefindSearch from './components/PagefindSearch.vue'

export default {
  ...DefaultTheme,
  Layout() {
    return h(DefaultTheme.Layout, null, {
      'nav-bar-content-after': () => h(PagefindSearch),
      'nav-bar-title-after': () => h('span', { style: 'margin-left:8px;color:red;font-weight:700' }, 'TEST')
    })
  }
}
