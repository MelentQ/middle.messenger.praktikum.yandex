import './chat.scss'

import templateFunction from './chat.hbs'

function chat({
  iconLink, searchForm, cards, chatContent,
}) {
  return templateFunction({
    iconLink, searchForm, cards, chatContent,
  })
}

export default chat
