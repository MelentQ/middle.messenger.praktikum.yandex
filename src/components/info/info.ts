import './info.scss';
import templateFunction from './info.hbs';
import { Block } from '../../utils/Block';

type InfoProps = {
  name: string,
  value: string
}

class Info extends Block<InfoProps> {
  constructor(props: InfoProps, events: { [p: string]: Function } = {}) {
    super('div', props, { class: 'info' }, events);
  }

  render() {
    return this.compile(templateFunction);
  }
}

export { Info };
