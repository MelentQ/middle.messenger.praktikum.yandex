import './field.scss'
import templateFunction from './field.hbs'

/**
 * Handlebars Field Template
 * @param {String} id - Field ID
 * @param {String} label - Field Label
 * @param {String} name - Field Name
 * @param {String} type - Field Type
 * @param {String} value - Field Value
 * @returns {String} - Field Element as String
 */
function field(id, label, name, type, value = null) {
  return templateFunction({ id, label, name, type, value })
}

export { field }
