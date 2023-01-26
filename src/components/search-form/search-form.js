import './search-form.scss'

import templateFunction from './search-form.hbs'

function searchForm(placeholder) {
  return templateFunction({ placeholder })
}

export default searchForm
