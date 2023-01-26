import './icon-link.scss'
import templateFunction from './icon-link.hbs'

function iconLink(name) {
  return templateFunction({ name })
}

export default iconLink
