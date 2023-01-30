import './button.scss';
import templateFunction from './button.hbs';
import { Block } from '../../utils/Block';

type ButtonProps = {
  type: string,
  label: string
}

class Button extends Block<ButtonProps> {
  constructor(props: ButtonProps, events: { [p: string]: Function } = {}) {
    super('button', props, { class: 'button', type: props.type }, events);
  }

  render() {
    return this.compile(templateFunction);
  }
}

export { Button };
