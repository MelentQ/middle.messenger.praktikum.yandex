import './profile.scss';
import templateFunction from './profile.hbs';
import { Block } from '../../utils/Block';
import { Input } from '../input';

type ProfileFormProps = {
  head: Block[] | string[],
  content: Block[] | string[],
  isForm?: boolean
}

class ProfileForm extends Block<ProfileFormProps> {
  constructor(props: ProfileFormProps, events: { [p: string]: Function } = {}) {
    super('form', props, { class: 'profile', novalidate: 'true' }, events);
  }

  getFormData(): Record<string, string> {
    // @ts-ignore
    return (this.children.content[0].children.items as Input[])
      .reduce((acc: Record<string, string>, inputComponent) => {
        if (inputComponent.inputElement) {
          acc[inputComponent.inputElement.name] = inputComponent.inputElement.value;
        }
        return acc;
      }, {});
  }

  checkValidity(): boolean {
    // @ts-ignore
    (this.children.content[0].children.items as Input[]).forEach((inputComponent) => {
      inputComponent.checkValidity();
    });

    return this.checkConfirmations() && (this._element as HTMLFormElement).checkValidity();
  }

  checkConfirmations(): boolean {
    const confirmationInputNames: string[] = [];
    const mask = /.*_confirmation/;

    // @ts-ignore
    (this.children.content[0].children.items as Input[]).forEach((inputComponent) => {
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

export { ProfileForm };
