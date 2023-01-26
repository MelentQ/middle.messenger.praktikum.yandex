import './input.scss'
import templateFunction from './input.hbs'

/**
 * Handlebars Input Template
 * @param {String} name - Input Name
 * @param {String} type - Input Type
 * @param {String} placeholder - Input Placeholder
 * @param {String} errorMessage - Input Error Message
 * @returns {String} - Input Element as String
 */
function input({
  name, type, placeholder, errorMessage,
}) {
  return templateFunction({
    name, type, placeholder, errorMessage,
  })
}

export default input
