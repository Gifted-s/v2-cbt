// Author  Adewumi Sunkanmi
// Gifted-dates
// License MIT
// Version 1.0.0
// 2019
function Date_Module () {
  const date = new Date()

  /**
 * Create a  function getHour
 *
 * @param {none} it takes no parameter
 * @return { hour} the current hour of the day
 */
  this.getHour = () => {
    const hour = date.getHours()
    if (hour > 12) {
      return hour - 12
    }
    return hour
  }
  /**
 * Create a  function getMinute
 *
 * @param {none} it takes no parameter
 * @return {minute} the current minute of the hour
 */
  this.getMinute = () => {
    const minute = date.getMinutes()
    return minute
  }
  /**
 * Create a  function getSeconds
 *
 * @param {none} it takes no parameter
 * @return {second} the current second of the minute
 */
  this.getSecond = () => {
    const second = date.getSeconds()

    return second
  }
  /**
 * Create a  function getMinute
 *
 * @param {none} it takes no parameter
 * @return {currentdate} the current date of the month
 */
  this.getDate = () => {
    const currentdate = date.getUTCDate()
    return currentdate
  }

  /**
 * Create a  function getCurrentMonth
 *
 * @param {none} it takes no parameter
 * @return {Current month} the current month of the year
 */
  this.getMonth = () => {
    const month = date.getUTCMonth()
    switch (month) {
      case 0 :
        return 'January'
      case 1 :
        return 'February'
      case 2 :
        return 'March'
      case 3 :
        return 'April'
      case 4 :
        return 'May'
      case 5 :
        return 'June'
      case 6 :
        return 'July'
      case 7 :
        return 'August'
      case 8 :
        return 'September'
      case 9 :
        return 'October'
      case 10 :
        return 'November'
      case 11 :
        return 'December'
      default :
        return null
    }
  }
  /**
 * Create a  function getCurrentDay
 *
 * @param {none} it takes no parameter
 * @return {Current day} the current day of the month
 */
  this.getDay = () => {
    const day = date.getUTCDay()
    switch (day) {
      case 0 :
        return 'Sunday'
      case 1 :
        return 'Monday'
      case 2 :
        return 'Tuesday'
      case 3 :
        return 'Wednesday'
      case 4 :
        return 'Thursday'
      case 5 :
        return 'Friday'
      case 6 :
        return 'Saturday'

      default :
        return null
    }
  }
  /**
 * Create a  function getCurrentYear
 *
 * @param {none} it takes no parameter
 * @return {Current year} the current year
 */
  this.getYear = () => {
    const year = date.getUTCFullYear()
    return year
  }
}
/**
 * Create a  method getFullDate
 *
 * @param {none} it takes no parameter
 * @return {Current Fulldate} the current current full date
 */
Date_Module.prototype.getFullDate = function getFullDate () {
  return `${this.getDay()} ${this.getMonth()} ${this.getDate()}, ${this.getYear()}`
}
/**
 * Create a  function getFullTime
 *
 * @param {none} it takes no parameter
 * @return {Current FullTime} the current time of the day
 */
Date_Module.prototype.getFullTime = function getFullTime () {
  const date = new Date()
  const check_hour = date.getHours()

  return `${this.getHour()}:${this.getMinute()} ${(check_hour > 12 ? 'PM' : 'AM')}`
}
const todaysDate = new Date_Module()
// console.log(todaysDate.getFullDate())
// module.exports = todaysDate
  export default todaysDate
