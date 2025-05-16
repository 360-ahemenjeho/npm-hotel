import './index.css'
import { tabs } from '@/lib/constants'
import notFound from './tabs/not-found'

function render(tab: string) {
  const rootEl: any = document.querySelector('#root')
  rootEl.innerHTML = tabs[tab] ? tabs[tab]() : notFound()
}

function init() {
  const navs = document.querySelectorAll('nav button')
  navs.forEach((button: any) => {
    button.addEventListener('click', () => {
      const tab = button.dataset.tab
      render(tab)
    })
  })
}

window.addEventListener('load', () => {
  init()
  render('home')
})
