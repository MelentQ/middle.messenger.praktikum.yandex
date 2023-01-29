import './link.scss';
import templateFunction from './link.hbs';
import { Block } from '../../utils/Block';

type LinkProps = {
  href: string,
  text: string,
  mods?: string
}

class Link extends Block {
  constructor(props: LinkProps, events: { [p: string]: Function } = {}) {
    super('a', props, { class: 'link', href: props.href }, events);
  }

  render() {
    return this.compile(templateFunction);
  }
}

export { Link };
