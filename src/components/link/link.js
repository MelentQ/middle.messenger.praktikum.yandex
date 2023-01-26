import './link.scss'
import templateFunction from './link.hbs'

/**
 * Handlebars Link Template
 * @param {String} href - Link href
 * @param {String} text - Link Text
 * @param {String} mods - Link CSS Mods
 * @returns {String} - Link Element as String
 */
function link(href, text, mods = '') {
  return templateFunction({ href, text, mods })
}

export default link
