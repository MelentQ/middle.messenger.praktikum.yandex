import './popup.scss'

import templateFunction from './popup.hbs'

function popup(buttons) {
  return templateFunction({ buttons })
}

export default popup
