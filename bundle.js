/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 8);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function() {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		var result = [];
		for(var i = 0; i < this.length; i++) {
			var item = this[i];
			if(item[2]) {
				result.push("@media " + item[2] + "{" + item[1] + "}");
			} else {
				result.push(item[1]);
			}
		}
		return result.join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};


/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__app_datepicker_datepicker_component__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_birthday_birthday_component__ = __webpack_require__(4);



const components = [
  __WEBPACK_IMPORTED_MODULE_0__app_datepicker_datepicker_component__["a" /* DatepickerComponent */],
  __WEBPACK_IMPORTED_MODULE_1__app_birthday_birthday_component__["a" /* BirthdayComponent */]
]

components.forEach(component => customElements.define(component.selector, component))


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(0)();
// imports


// module
exports.push([module.i, ":host {\n    display: inline-block;\n    padding: 0 1em 0 0;\n    margin-bottom: 2em;\n}\n\np {\n    margin: 0;\n}", ""]);

// exports


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(0)();
// imports


// module
exports.push([module.i, ":host {\n    position: relative;\n    width: 18em;\n}\n\ninput {\n    border-radius: 5px;\n    border: 1px solid #e0e0e0;\n    height: 24px;\n    min-width: 190px;\n    width: 230px;\n    padding: 0 10px;\n}\n\nimg {\n    position: absolute;\n    width: 25px;\n    margin-left: 5px;\n}\n\n.ui-datepicker {\n    position: absolute;\n    top: 28px;\n    left: 0;\n    z-index: 1;\n    width: 17em;\n    background-color: white;\n    border-radius: 5px;\n    padding: 3px;\n}\n\n.datepicker-header {\n    background: linear-gradient(to bottom, #ffffff 0%,#eeeeee 17%,#cccccc 100%);\n    color: #222222;\n    font-weight: bold;\n    min-height: 40px;\n    justify-content: space-around;\n    align-items: center;\n    display: flex;\n}\n\n.datepicker-header h5 {\n    margin: 5px;\n    font-family: Verdana,Arial,sans-serif;\n}\n\n.datepicker-header button {\n    position: relative;\n    height: 20px;\n    background-color: #323232;\n    border-radius: 50%;\n    border: 0;\n    width: 20px;\n    padding: 3px;\n    cursor: pointer;\n}\n\n.datepicker-header button img {\n    position: relative;\n    width: 17px;\n    margin: -5px;\n}\n\n.datepicker-nav {\n    list-style: none;\n    padding: 0;\n    display: inline-flex;\n    width: 100%;\n    justify-content: space-around;\n    font-weight: bold;\n    font-family: Verdana,Arial,sans-serif;\n    font-size: .9em;\n}\n\n.datepicker-days {\n    display: flex;\n    flex-wrap: wrap;\n}\n\n.day {\n    font-family: Verdana,Arial,sans-serif;\n    box-sizing: border-box;\n    cursor: pointer;\n    font-weight: 400;\n    flex-basis: calc(100% / 7);\n    max-width: 40px;\n    height: 40px;\n    line-height: 40px;\n    margin: 0;\n    display: inline-block;\n    position: relative;\n    justify-content: center;\n    text-align: right;\n    border: 1px solid #d3d3d3;\n    background-color: #e6e6e6;\n    font-weight: normal;\n    color: #555555;\n    padding-right: .2em;\n    font-size: .9em;\n}\n\n.day:disabled {\n    opacity: 0.5;\n    cursor: default;\n}\n\n.day.selected {\n    border: 1px solid #fcefa1;\n    background-color: #fbf9ee;\n    color: #363636;\n}\n\n.empty-day {\n    opacity: .35;\n    background-image: none;\n    cursor: none;\n    pointer-events: none;\n}\n", ""]);

// exports


/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__birthday_template__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__birthday_css__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__birthday_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__birthday_css__);



class BirthdayComponent extends HTMLElement {
  static get selector () { return 'app-birthday' }

  connectedCallback () {
    this.element = this.attachShadow({ mode: 'open' })
    this.render()
  }

  render () {
    const innerHTML = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__birthday_template__["a" /* default */])({

    })

    this.element.innerHTML = `
      <style>${__WEBPACK_IMPORTED_MODULE_1__birthday_css___default.a}</style>
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
/* harmony export (immutable) */ __webpack_exports__["a"] = BirthdayComponent;



/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (({ filters, selectedFilter }) => {
    const isSelectedFilter = filter => filter === selectedFilter
    return `
      <div id="filter-wrapper">
        <p>Filter calendar by:</p>
        <div class="filter-calendar">
          ${filters.map(filter => `
            <label>
                <input class="qa-button" type="radio" name="calendar-filter" value="${filter.value}" ${isSelectedFilter(filter.value) ? 'checked' : ''}>
                ${filter.label}
            </label>
    `     ).join('')}
        </div>
      </div>

    `
});


/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__datepicker_template__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__datepicker_css__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__datepicker_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__datepicker_css__);



class DatepickerComponent extends HTMLElement {
  static get selector () { return 'app-datepicker' }

  connectedCallback () {
    this.element = this.attachShadow({ mode: 'open' })
    this.setInitialDate()
    this.render()
  }

  get selectedDate () {
    return new Date(this.selectedYear, this.selectedMonth, this.selectedDay)
  }

  render () {
    let selectedDateEmpty = new Date(this.selectedYear, this.selectedMonth, 1)
    selectedDateEmpty = selectedDateEmpty.getDay()
    const emptyDays = []

    for (let i = 0; i < selectedDateEmpty; i++) {
      emptyDays.push(i)
    }

    const innerHTML = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__datepicker_template__["a" /* default */])({
      selectedYear: this.selectedYear,
      selectedMonth: this.selectedMonth,
      selectedDay: this.selectedDay,
      selectedDate: this.selectDateOnCalendar,
      inputDate: this.inputDate,
      emptyDays,
      closed: this.hasAttribute('closed')
    })

    this.element.innerHTML = `
      <style>${__WEBPACK_IMPORTED_MODULE_1__datepicker_css___default.a}</style>
      ${innerHTML}
    `

    this.datepicker = this.element.querySelector('.ui-datepicker')

    this.addEventListeners()
  }

  addEventListeners () {
    this.element.querySelectorAll('.day').forEach(element => element.addEventListener('click', () => this.selectDate(element.textContent)))
    this.element.querySelector('#nextMonth').addEventListener('click', () => this.nextMonth())
    this.element.querySelector('#prevMonth').addEventListener('click', () => this.prevMonth())
    this.element.querySelector('#inputDate').addEventListener('click', () => this.toggleDatepicker())
  }

  nextMonth () {
    if (this.selectedMonth === 11) {
      this.selectedYear++
      this.selectedMonth = 0
    } else {
      this.selectedMonth++
    }
    this.render()
    this.dispatchEvent(new CustomEvent('next-month'))
  }

  prevMonth () {
    if (this.selectedMonth === 0) {
      this.selectedYear--
      this.selectedMonth = 11
    } else {
      this.selectedMonth--
    }
    this.render()
    this.dispatchEvent(new CustomEvent('prev-month'))
  }

  static get observedAttributes() { return ['closed'] }

  attributeChangedCallback() {
    if (this.element) {
      this.render()
    }
  }

  open () {
    this.removeAttribute('closed')
  }

  close () {
    this.setAttribute('closed', true)
  }

  toggleDatepicker () {
    const isClosed = this.hasAttribute('closed')
    if (isClosed) {
      this.open()
    } else {
      this.close()
    }
    this.dispatchEvent(new CustomEvent('toggle-input'))
  }

  setInitialDate () {
    const date = new Date()
    this.selectedYear = date.getFullYear()
    this.selectedMonth = date.getMonth()
    this.selectedDay = date.getDate()
    this.selectDateOnCalendar = this.selectedDate
    this.inputDate = this.selectedDate.toLocaleDateString()
  }

  selectDate (day) {
    this.selectedDay = parseInt(day)
    this.selectDateOnCalendar = this.selectedDate
    this.inputDate = this.selectedDate.toLocaleDateString()
    this.dispatchEvent(new CustomEvent('selected-date', { detail: this.selectDateOnCalendar }))
    this.close()
  }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = DatepickerComponent;



/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
const range = n => Array.from({ length: n }, (value, key) => key + 1)

const weekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
const daysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
const weekdaysNum = [1, 2, 3, 4, 5]
const weekendsNum = [0, 6]

/* harmony default export */ __webpack_exports__["a"] = (({ selectedYear, selectedMonth, selectedDay, selectedDate, inputDate, emptyDays, closed }) => {
  const isDayLessThanToday = day => new Date(selectedYear, selectedMonth, day + 1).getTime() < new Date().getTime()
  const isLeapYear = () => !!(selectedMonth === 1 && ((selectedYear % 4 === 0) && (selectedYear % 100 !== 0)) || (selectedYear % 400 === 0))

  return `
    <input id="inputDate" type="text" readonly value="${inputDate}" placeholder="Choose a date..."><img src="assets/ic_date_range.svg">
    <div class="ui-datepicker" ${closed ? 'hidden' : ''}>
      <div class="datepicker-header">
        <button id="prevMonth"><img src="/assets/ic_navigate_before.svg"></button>
        <h5>${months[selectedMonth]} ${selectedYear}</h5>
        <button id="nextMonth"><img src="/assets/ic_navigate_next.svg"></button>
      </div>
      <ul class="datepicker-nav">
        ${weekdays.map(day => `
          <li>${day.slice(0, 2)}</li>
        `).join('')}
      </ul>
      <div class="datepicker-days">
      ${emptyDays.map(empty => `
        <span class="day empty-day"></span>
      `).join('')}

      ${range(isLeapYear() ? 29 : daysInMonth[selectedMonth]).map(day => `
        <button class="day ${parseInt(selectedDay) === day && selectedDate.getMonth() === selectedMonth && selectedDate.getFullYear() === selectedYear ? 'selected' : ''}">
          ${day}
        </button>
      `).join('')}
      </div>
    </div>
  `
});


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(1);


/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map