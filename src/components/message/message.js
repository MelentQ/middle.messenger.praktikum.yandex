import './message.scss'

import templateFunction from './message.hbs'

function message({
  isMy, isImage, content, time,
}) {
  return templateFunction({
    isMy, isImage, content, time,
  })
}

export default message
