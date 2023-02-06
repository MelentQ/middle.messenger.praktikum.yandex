import './list.scss';
import templateFunction from './list.hbs';
import { Block } from '../../utils/Block';

type ListProps = {
  items: Block[] | string[]
}

class List extends Block<ListProps> {
  constructor(props: ListProps, events: { [p: string]: Function } = {}) {
    super('ul', props, { class: 'list' }, events);
  }
  render() {
    return this.compile(templateFunction);
  }
}

export { List };
