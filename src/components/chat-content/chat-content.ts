import './chat-content.scss';
import templateFunction from './chat-content.hbs';
import { Block } from '../../utils/Block';

type ChatContentProps = {
  chatUser: Block | string,
  popupMenu: Block | string,
  messages: Block[] | string[],
  popupAttach: Block | string
}

class ChatContent extends Block<ChatContentProps> {
  constructor(props: ChatContentProps, events: { [p: string]: Function } = {}) {
    super('div', props, { class: 'chat-content' }, events);
  }

  render() {
    return this.compile(templateFunction);
  }
}

export { ChatContent };
