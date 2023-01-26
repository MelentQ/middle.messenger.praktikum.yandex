import './chat-user.scss'

import templateFunction from './chat-user.hbs'

function chatUser(image, name) {
  return templateFunction({ image, name })
}

export default chatUser
