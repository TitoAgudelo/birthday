import template from './birthday.template'
import style from './birthday.css'
import moment from 'moment'

export class BirthdayComponent extends HTMLElement {
  static get selector () { return 'app-birthday' }

  connectedCallback () {
    this.element = this.attachShadow({ mode: 'open' })
    this.setInitialDate()
    this.render()
  }

  render () {
    const innerHTML = template({
      date: this.date,
      days: this.diffDays,
      nextBirthday: this.nextBirthdays,
    })

    this.element.innerHTML = `
      <style>${style}</style>
      ${innerHTML}
    `
  }

  calculateBirthday () {
    let days = this.diffDays === 0 ? 1 : this.diffDays
    let log = Math.ceil(Math.log10(days))
    let nextBirthday = this.date
    log = log === 0 ? 1 : log
    this.nextBirthdays = Math.pow(10, log)
    nextBirthday.setDate(nextBirthday.getDate() + this.nextBirthdays)
    this.date = moment(nextBirthday).format('MMMM Do YYYY')
  }

  setInitialDate () {
    this.date = new Date(this.getAttribute('date'))
    this.selectedYear = this.date.getFullYear()
    this.selectedMonth = this.date.getMonth()
    this.selectedDay = this.date.getDate()

    let oneDay = 24*60*60*1000
    let firstDate = this.date
    let secondDate = new Date()
    this.diffDays = Math.round(Math.abs((firstDate.getTime() - secondDate.getTime())/(oneDay)))
    this.diffDays = this.diffDays > 0 ? this.diffDays - 1  : this.diffDays
    this.calculateBirthday()
  }
}
