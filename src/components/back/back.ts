import './back.scss';
import templateFunction from './back.hbs';
import { Block } from '../../utils/Block';

type BackProps = {
  href: string
}

class Back extends Block<BackProps> {
  constructor(props: BackProps, events: { [p: string]: Function } = {}) {
    super('a', props, { class: 'back', href: props.href, title: 'Go Back' }, events);
  }

  render() {
    return this.compile(templateFunction);
  }
}

export { Back };
