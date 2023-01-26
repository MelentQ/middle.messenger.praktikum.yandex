import './chat-content.scss'

import templateFunction from './chat-content.hbs'

function chatContent({
  chatUser, popupMenu, messages, popupAttach,
}) {
  return templateFunction({
    chatUser, popupMenu, messages, popupAttach,
  })
}

export default chatContent
