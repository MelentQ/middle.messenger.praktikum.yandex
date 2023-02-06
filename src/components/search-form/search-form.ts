import './search-form.scss';

import templateFunction from './search-form.hbs';
import { Block } from '../../utils/Block';

type SearchFormProps = {
  name: string,
  placeholder: string
}

class SearchForm extends Block<SearchFormProps> {
  constructor(props: SearchFormProps, events: { [p: string]: Function } = {}) {
    super('form', props, { class: 'search-form' }, events);
  }

  render() {
    return this.compile(templateFunction);
  }
}

export { SearchForm };
