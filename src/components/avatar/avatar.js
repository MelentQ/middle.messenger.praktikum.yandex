import './avatar.scss'
import templateFunction from './avatar.hbs'

/**
 * Handlebars Avatar Template
 * @param {String} label - Avatar Label
 * @returns {String} - Avatar Element as String
 */
function avatar(label) {
  return templateFunction({ label })
}

export default avatar
