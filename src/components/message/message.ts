import './message.scss';

import templateFunction from './message.hbs';
import { Block } from '../../utils/Block';

type MessageProps = {
  isMy?: boolean,
  isImage?: boolean,
  content: string,
  time: string
}

class Message extends Block<MessageProps> {
  constructor(props: MessageProps, events: { [p: string]: Function } = {}) {
    let messageClass = props.isImage ? 'message message--image' : 'message';
    messageClass = props.isMy ? `${messageClass} message--my` : messageClass;

    super('div', props, { class: messageClass }, events);
  }

  render() {
    return this.compile(templateFunction);
  }
}

export { Message };
