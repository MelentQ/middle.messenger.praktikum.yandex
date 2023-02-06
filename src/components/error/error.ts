import './error.scss';
import templateFunction from './error.hbs';
import { Block } from '../../utils/Block';

type ErrorProps = {
  code: string,
  text: string,
  actions: Block[] | string[]
}

class Error extends Block<ErrorProps> {
  constructor(props: ErrorProps, events: { [p: string]: Function } = {}) {
    super('div', props, { class: 'error' }, events);
  }

  render() {
    return this.compile(templateFunction);
  }
}

export { Error };
