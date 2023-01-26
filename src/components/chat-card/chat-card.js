import './chat-card.scss'

import templateFunction from './chat-card.hbs'

function chatCard({
  isActive, image, name, message, time, count,
}) {
  return templateFunction({
    isActive, image, name, message, time, count,
  })
}

export default chatCard
