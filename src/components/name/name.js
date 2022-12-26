import './name.scss'
import templateFunction from './name.hbs'

/**
 * Handlebars Name Template
 * @param {String} text - Text
 * @returns {String} - Name Link Element as String
 */
function name(text) {
  return templateFunction({ text })
}

export { name }
