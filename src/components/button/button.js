import './button.scss'
import templateFunction from './button.hbs'

/**
 * Handlebars Button Template
 * @param {String} type - Button Type
 * @param {String} label - Button label
 * @returns {String} - Button Element as String
 */
function button(type, label) {
  return templateFunction({ type, label })
}

export { button }
