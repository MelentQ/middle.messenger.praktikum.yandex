import './popup.scss';

import templateFunction from './popup.hbs';
import { Block } from '../../utils/Block';

type PopupProps = {
  buttons: {
    icon: string,
    text: string
  }[]
}

class Popup extends Block<PopupProps> {
  constructor(props: PopupProps, events: { [p: string]: Function } = {}) {
    super('div', props, { class: 'popup' }, events);
  }

  render() {
    return this.compile(templateFunction);
  }
}

export { Popup };
