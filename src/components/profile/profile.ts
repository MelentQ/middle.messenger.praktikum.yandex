import './profile.scss';
import templateFunction from './profile.hbs';
import { Block } from '../../utils/Block';

type ProfileProps = {
  head: Block[] | string[],
  content: Block[] | string[],
  isForm?: boolean
}

class Profile extends Block<ProfileProps> {
  constructor(props: ProfileProps, events: { [p: string]: Function } = {}) {
    if (props.isForm) {
      super('form', props, { class: 'profile', novalidate: 'true' }, events);
    } else {
      super('div', props, { class: 'profile' }, events);
    }
  }

  render() {
    return this.compile(templateFunction);
  }
}

export { Profile };
