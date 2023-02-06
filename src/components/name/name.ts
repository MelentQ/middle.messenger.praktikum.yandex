import './name.scss';
import templateFunction from './name.hbs';
import { Block } from '../../utils/Block';

type NameProps = {
  text: string
}

class Name extends Block<NameProps> {
  constructor(props: NameProps, events: { [p: string]: Function } = {}) {
    super('h2', props, { class: 'name' }, events);
  }

  render() {
    return this.compile(templateFunction);
  }
}

export { Name };
