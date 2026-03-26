import Theme from 'vitepress/theme'
import { h } from 'vue'
import 'virtual:group-icons.css'
import './styles.css'

export default {
  ...Theme,
  enhanceApp({ app }) {
    if (Theme.enhanceApp) Theme.enhanceApp({ app })

    if (typeof window !== 'undefined') {
      window.addEventListener('click', (e) => {
        const clicked = e.target.closest('.VPDocSidebarItem')

        if (!clicked) return

        // close all others
        document.querySelectorAll('.VPDocSidebarItem.open').forEach(el => {
          if (el !== clicked) {
            el.classList.remove('open')
          }
        })
      })
    }
  }
}
