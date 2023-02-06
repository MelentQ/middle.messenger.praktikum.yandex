import './window.scss';
import templateFunction from './window.hbs';
import { Block } from '../../utils/Block';

type WindowProps = {
  title: string,
  content: Block | string,
}

class Window extends Block<WindowProps> {
  constructor(props: WindowProps, events: { [p: string]: Function } = {}) {
    super('div', props, { class: 'window' }, events);
  }

  render() {
    return this.compile(templateFunction);
  }
}

export { Window };
