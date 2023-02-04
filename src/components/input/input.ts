import './input.scss';
import templateFunction from './input.hbs';
import { Block } from '../../utils/Block';

type InputProps = {
  name: string,
  type: string,
  placeholder: string,
  errorMessage: string,
  required?: boolean,
  pattern?: string
}

class Input extends Block<InputProps> {
  inputElement: HTMLInputElement | null;

  constructor(props: InputProps, events: { [p: string]: Function } = {}) {
    super('div', props, { class: 'input' }, events);
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

export { Input };
