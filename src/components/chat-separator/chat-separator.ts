import './chat-separator.scss';

import templateFunction from './chat-separator.hbs';
import { Block } from '../../utils/Block';

type ChatSeparatorProps = {
  text: string
}

class ChatSeparator extends Block<ChatSeparatorProps> {
  constructor(props: ChatSeparatorProps, events: { [p: string]: Function } = {}) {
    super('time', props, { class: 'chat-separator' }, events);
  }

  render() {
    return this.compile(templateFunction);
  }
}

export { ChatSeparator };
