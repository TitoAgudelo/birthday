import template from './birthday.template'
import style from './birthday.css'

export class BirthdayComponent extends HTMLElement {
  static get selector () { return 'app-birthday' }

  connectedCallback () {
    this.element = this.attachShadow({ mode: 'open' })
    this.render()
  }

  render () {
    const innerHTML = template({

    })

    this.element.innerHTML = `
      <style>${style}</style>
      ${innerHTML}
    `

    this.addEventListeners()
  }

  addEventListeners () {
    // this.element.querySelectorAll('input')
    //   .forEach(element => element.addEventListener('change', () => this.selectFilter(element.value)))
  }

  // selectFilter (filter) {
  //   this.dispatchEvent(new CustomEvent('selected-filter', { detail: filter }))
  // }
}
