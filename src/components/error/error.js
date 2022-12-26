import './error.scss'
import templateFunction from './error.hbs'

/**
 * Handlebars Error Page Template
 * @param {String} code - Error Code
 * @param {String} text - Error Description
 * @param {String} actions - Error Actions
 * @returns {String} - Input Element as String
 */
function error(code, text, actions) {
  return templateFunction({ code, text, actions })
}

export { error }
