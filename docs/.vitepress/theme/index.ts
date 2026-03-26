import Theme from 'vitepress/theme'
import 'virtual:group-icons.css'
import './styles.css'




import DefaultTheme from 'vitepress/theme'
import { h } from 'vue'
import CustomSidebar from './CustomSidebar.vue'

export default {
  ...DefaultTheme,
  Layout() {
    return h(DefaultTheme.Layout, null, {
      'sidebar-nav-before': () => h(CustomSidebar)
    })
  }
}




export default Theme
