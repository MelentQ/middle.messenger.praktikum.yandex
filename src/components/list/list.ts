import './list.scss';
import templateFunction from './list.hbs';
import { Block } from '../../utils/Block';

type ListProps = {
  items: string[],
  attr?: {[attributeName: string]: string},
}

class List extends Block<ListProps> {
  constructor(props: ListProps) {
    super(props, 'ul');
  }

  render() {
    return templateFunction(this.props);
  }
}

export { List };
