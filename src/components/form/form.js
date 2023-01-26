import './form.scss'
import templateFunction from './form.hbs'

/**
 * Handlebars Form Template
 * @param {Array.<String>} inputs - Array of Form Inputs as String
 * @param {Array.<String>} actions - Array of Form Actions as String
 * @returns {String} - Form Element as String
 */
function form(inputs, actions) {
  return templateFunction({ inputs, actions })
}

export default form
