import './input.scss';
import templateFunction from './input.hbs';
import { Block } from '../../utils/Block';

type InputProps = {
  name: string,
  type: string,
  placeholder: string,
  errorMessage: string
}

class Input extends Block<InputProps> {
  constructor(props: InputProps, events: { [p: string]: Function } = {}) {
    super('div', props, { class: 'input' }, events);
  }

  render() {
    return this.compile(templateFunction);
  }
}

export { Input };
