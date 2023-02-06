import './icon-link.scss';
import templateFunction from './icon-link.hbs';
import { Block } from '../../utils/Block';

type IconLinkProps = {
  name: string,
  href: string,
  icon: string
}

class IconLink extends Block<IconLinkProps> {
  constructor(props: IconLinkProps, events: { [p: string]: Function } = {}) {
    super('a', props, { class: 'icon-link', href: props.href, title: props.name }, events);
  }

  render() {
    return this.compile(templateFunction);
  }
}

export { IconLink };
