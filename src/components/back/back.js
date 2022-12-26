import './back.scss'
import templateFunction from './back.hbs'

/**
 * Handlebars Back Link Template
 * @param {String} link - Back Link
 * @returns {String} - Back Link Element as String
 */
function back(link) {
  return templateFunction({ link })
}

export { back }
