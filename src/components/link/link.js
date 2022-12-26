import './link.scss'
import templateFunction from './link.hbs'

/**
 * Handlebars Link Template
 * @param {String} link - Link
 * @param {String} text - Link Text
 * @param {String} mods - Link CSS Mods
 * @returns {String} - Link Element as String
 */
function link(link, text, mods = '') {
  return templateFunction({ link, text, mods })
}

export { link }
