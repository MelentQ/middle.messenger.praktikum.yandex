import './form.scss';
import templateFunction from './form.hbs';
import { Block } from '../../utils/Block';
import { Input } from '../input';

type FormProps = {
  inputs: Input[],
  actions: Block[] | string[]
}

class Form extends Block<FormProps> {
  constructor(props: FormProps, events: { [p: string]: Function } = {}) {
    super('form', props, { class: 'form', novalidate: 'true' }, events);
  }

  getFormData(): Record<string, string> {
    return (this.children.inputs as Input[])
      .reduce((acc: Record<string, string>, inputComponent) => {
        if (inputComponent.inputElement) {
          acc[inputComponent.inputElement.name] = inputComponent.inputElement.value;
        }
        return acc;
      }, {});
  }

  checkValidity(): boolean {
    (this.children.inputs as Input[]).forEach((inputComponent) => {
      inputComponent.checkValidity();
    });

    return this.checkConfirmations() && (this._element as HTMLFormElement).checkValidity();
  }

  checkConfirmations(): boolean {
    const confirmationInputNames: string[] = [];
    const mask = /.*_confirmation/;

    (this.children.inputs as Input[]).forEach((inputComponent) => {
      if (inputComponent.inputElement && mask.test(inputComponent.inputElement.name)) {
        confirmationInputNames.push(inputComponent.inputElement.name.replace('_confirmation', ''));
      }
    });

    const form = this._element as HTMLFormElement;

    return confirmationInputNames.every((name) => {
      const input = (form[name] as HTMLInputElement);
      const confirmationInput = (form[`${name}_confirmation`] as HTMLInputElement);

      return input && confirmationInput && input.value === confirmationInput.value;
    });
  }

  render() {
    return this.compile(templateFunction);
  }
}

export { Form };
