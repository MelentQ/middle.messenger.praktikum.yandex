import { Window } from '../components/window';
import { Form } from '../components/form';
import { Input } from '../components/input';
import { Button } from '../components/button';
import { Link } from '../components/link';
import { patterns } from '../utils/constants';

function onSubmit(e: SubmitEvent) {
  e.preventDefault();
  const isValid = this.checkValidity();
  if (isValid) {
    console.log(this.getFormData());
  }
}

const registrationPage = new Window({
  title: 'Registration',
  content: new Form({
    inputs: [
      new Input({
        name: 'email',
        type: 'email',
        placeholder: 'E-mail',
        errorMessage: 'Incorrect E-mail',
        required: true,
      }),
      new Input({
        name: 'login',
        type: 'text',
        placeholder: 'Login',
        errorMessage: 'Incorrect Login',
        required: true,
        pattern: patterns.login,
      }),
      new Input({
        name: 'first_name',
        type: 'text',
        placeholder: 'First Name',
        errorMessage: 'Incorrect First Name',
        required: true,
        pattern: patterns.name,
      }),
      new Input({
        name: 'second_name',
        type: 'text',
        placeholder: 'Second Name',
        errorMessage: 'Incorrect Second Name',
        required: true,
        pattern: patterns.name,
      }),
      new Input({
        name: 'phone',
        type: 'tel',
        placeholder: 'Phone',
        errorMessage: 'Incorrect Phone',
        required: true,
        pattern: patterns.phone,
      }),
      new Input({
        name: 'password',
        type: 'password',
        placeholder: 'Password',
        errorMessage: 'Incorrect Password',
        required: true,
        pattern: patterns.password,
      }),
      new Input({
        name: 'password_confirmation',
        type: 'password',
        placeholder: 'Confirm Password',
        errorMessage: 'Incorrect Password',
        required: true,
        pattern: patterns.password,
      }),
    ],
    actions: [
      new Button({
        type: 'submit',
        label: 'Create account',
      }),
      new Link({
        text: 'Login',
        href: '#/login',
        mods: '--centered',
      }),
    ],
  }, {
    submit: onSubmit,
  }),
});

export default registrationPage;
