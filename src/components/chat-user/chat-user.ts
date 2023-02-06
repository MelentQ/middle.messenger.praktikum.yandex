import './chat-user.scss';
import templateFunction from './chat-user.hbs';
import { Block } from '../../utils/Block';

type ChatUserProps = {
  image: string,
  name: string
}

class ChatUser extends Block<ChatUserProps> {
  constructor(props: ChatUserProps, events: { [p: string]: Function } = {}) {
    super('div', props, { class: 'chat-user' }, events);
  }

  render() {
    return this.compile(templateFunction);
  }
}

export { ChatUser };
