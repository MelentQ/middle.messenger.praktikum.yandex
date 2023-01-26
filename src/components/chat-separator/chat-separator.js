import './chat-separator.scss'

import templateFunction from './chat-separator.hbs'

function chatSeparator(text) {
  return templateFunction({ text })
}

export default chatSeparator
