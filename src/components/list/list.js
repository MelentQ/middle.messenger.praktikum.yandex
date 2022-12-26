import './list.scss'
import templateFunction from './list.hbs'

/**
 * Handlebars List Template
 * @param {Array.<String>} items - List Items
 * @returns {String} - List Element as String
 */
function list(items) {
  return templateFunction({ items })
}

export { list }
