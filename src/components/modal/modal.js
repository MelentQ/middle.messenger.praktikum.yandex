import './modal.scss'
import templateFunction from './modal.hbs'

/**
 * Handlebars Modal Template
 * @param {String} title - Modal Title
 * @param {String} content - Modal Content as String
 * @param {String} actions - Modal Actions as String
 * @returns {String} - Modal Element as String
 */
function modal(title, content, actions) {
  return templateFunction({ title, content, actions })
}

export { modal }
