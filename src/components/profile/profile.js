import './profile.scss'
import templateFunction from './profile.hbs'

/**
 * Handlebars Profile Template
 * @param {String} head - Profile Head Content as String
 * @param {Array.<String>} content - Array of Content
 * @returns {String} - Profile Element as String
 */
function profile(head, content) {
  return templateFunction({ head, content })
}

export default profile
