import './modal.scss';
import templateFunction from './modal.hbs';
import { Block } from '../../utils/Block';

type ModalProps = {
  title: string,
  content: Block[] | string,
  actions: Block[] | string[]
}

class Modal extends Block<ModalProps> {
  constructor(props: ModalProps, events: { [p: string]: Function } = {}) {
    super('div', props, { class: 'modal' }, events);
  }

  render() {
    return this.compile(templateFunction);
  }
}

export { Modal };
