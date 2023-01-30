import './field.scss';
import templateFunction from './field.hbs';
import { Block } from '../../utils/Block';

type FieldProps = {
  id: string,
  label: string,
  name: string,
  type: string,
  value?: string | null
}

class Field extends Block<FieldProps> {
  constructor(props: FieldProps, events: { [p: string]: Function } = {}) {
    super('div', props, { class: 'field' }, events);
  }

  render() {
    return this.compile(templateFunction);
  }
}

export { Field };
