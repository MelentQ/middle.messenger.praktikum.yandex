import './file.scss'
import templateFunction from './file.hbs'

/**
 * Handlebars File Upload Template
 * @param {String} id - File ID
 * @param {String} label - File Label
 * @param {String} name - File Name
 * @returns {String} - File Upload Element as String
 */
function file(id, label, name) {
  return templateFunction({ id, label, name })
}

export default file
