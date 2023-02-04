import './field.scss';
import templateFunction from './field.hbs';
import { Block } from '../../utils/Block';

type FieldProps = {
  id: string,
  label: string,
  name: string,
  type: string,
  value?: string | null,
  required?: boolean,
  pattern?: string
}

class Field extends Block<FieldProps> {
  inputElement: HTMLInputElement | null;

  constructor(props: FieldProps, events: { [p: string]: Function } = {}) {
    super('div', props, { class: 'field' }, events);
  }

  focusHandler() {
    this.checkValidity();
  }

  checkValidity(): void {
    if (this.inputElement) {
      this.inputElement.classList.toggle(
        'invalid',
        !this.inputElement.validity.valid || !this.inputElement.value,
      );
    }
  }

  addEvents() {
    this.inputElement = this._element.querySelector('input');

    if (this.inputElement && this.inputElement.required) {
      this.inputElement.addEventListener('focus', this.focusHandler.bind(this));
      this.inputElement.addEventListener('blur', this.focusHandler.bind(this));
      this.inputElement.addEventListener('input', this.focusHandler.bind(this));
    }

    super.addEvents();
  }

  removeEvents() {
    if (this.inputElement && this.props.required) {
      this.inputElement.removeEventListener('focus', this.focusHandler.bind(this));
      this.inputElement.removeEventListener('blur', this.focusHandler.bind(this));
      this.inputElement.removeEventListener('input', this.focusHandler.bind(this));
    }

    super.removeEvents();
  }

  render() {
    return this.compile(templateFunction);
  }
}

export { Field };
