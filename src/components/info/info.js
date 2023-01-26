import './info.scss'
import templateFunction from './info.hbs'

/**
 * Handlebars Info Template
 * @param {String} name - Info Name
 * @param {String} value - Info Value
 * @returns {String} - Info Element as String
 */
function info(name, value) {
  return templateFunction({ name, value })
}

export default info
