import './window.scss'
import templateFunction from './window.hbs'

/**
 * Handlebars Window Template
 * @param {String} title - Window Title
 * @param {String} content - Window Content as String
 * @returns {String} - Window Element as String
 */
function window(title, content) {
  return templateFunction({ title, content })
}

export { window }
