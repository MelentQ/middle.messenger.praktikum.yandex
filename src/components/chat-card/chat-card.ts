import './chat-card.scss';

import templateFunction from './chat-card.hbs';
import { Block } from '../../utils/Block';

type ChatCardProps = {
  isActive?: boolean,
  image?: string,
  name: string,
  message?: string,
  time?: string,
  count?: number
}

class ChatCard extends Block {
  constructor(props: ChatCardProps, events: { [p: string]: Function } = {}) {
    const cardClass = props.isActive ? 'chat-card chat-card--active' : 'chat-card';

    super('div', props, { class: cardClass, tabindex: '0' }, events);
  }

  render() {
    return this.compile(templateFunction);
  }
}

export { ChatCard };
