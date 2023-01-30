import './form.scss';
import templateFunction from './form.hbs';
import { Block } from '../../utils/Block';

type FormProps = {
  inputs: Block[] | string[],
  actions: Block[] | string[]
}

class Form extends Block<FormProps> {
  constructor(props: FormProps, events: { [p: string]: Function } = {}) {
    super('form', props, { class: 'form' }, events);
  }
  render() {
    return this.compile(templateFunction);
  }
}

export { Form };
