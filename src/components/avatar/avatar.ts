import './avatar.scss';
import templateFunction from './avatar.hbs';
import { Block } from '../../utils/Block';

type AvatarProps = {
  label: string
}

class Avatar extends Block<AvatarProps> {
  constructor(props: AvatarProps, events: { [p: string]: Function } = {}) {
    super('div', props, { class: 'avatar', tabindex: '0' }, events);
  }

  render() {
    return this.compile(templateFunction);
  }
}

export { Avatar };
