import './chat-placeholder.scss';
import templateFunction from './chat-placeholder.hbs';
import { Block } from '../../utils/Block';

class ChatPlaceholder extends Block<{}> {
  constructor(props: {}, events: { [p: string]: Function } = {}) {
    super('div', props, { class: 'chat-placeholder' }, events);
  }

  render() {
    return this.compile(templateFunction);
  }
}

export { ChatPlaceholder };
