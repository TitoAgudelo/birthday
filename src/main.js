import { DatepickerComponent } from './app/datepicker/datepicker.component'
import { BirthdayComponent } from './app/birthday/birthday.component'

const components = [
  DatepickerComponent,
  BirthdayComponent
]

components.forEach(component => customElements.define(component.selector, component))
