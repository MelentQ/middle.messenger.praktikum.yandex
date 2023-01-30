import './chat.scss';
import templateFunction from './chat.hbs';
import { Block } from '../../utils/Block';

type ChatProps = {
  iconLink: Block | string,
  searchForm: Block | string,
  cards: Block[] | string[],
  chatContent: Block | string
}

class Chat extends Block<ChatProps> {
  constructor(props: ChatProps, events: { [p: string]: Function } = {}) {
    super('div', props, { class: 'chat' }, events);
  }

  render() {
    return this.compile(templateFunction);
  }
}

export { Chat };
