import { Window } from '../components/window';
import { Form } from '../components/form';
import { Input } from '../components/input';
import { Button } from '../components/button';
import { Link } from '../components/link';

const registrationPage = new Window({
  title: 'Registration',
  content: new Form({
    inputs: [
      new Input({
        name: 'email',
        type: 'email',
        placeholder: 'E-mail',
        errorMessage: 'Incorrect E-mail',
      }),
      new Input({
        name: 'login',
        type: 'text',
        placeholder: 'Login',
        errorMessage: 'Incorrect Login',
      }),
      new Input({
        name: 'first_name',
        type: 'text',
        placeholder: 'First Name',
        errorMessage: 'Incorrect First Name',
      }),
      new Input({
        name: 'second_name',
        type: 'text',
        placeholder: 'Second Name',
        errorMessage: 'Incorrect Second Name',
      }),
      new Input({
        name: 'phone',
        type: 'tel',
        placeholder: 'Phone',
        errorMessage: 'Incorrect Phone',
      }),
      new Input({
        name: 'password',
        type: 'password',
        placeholder: 'Password',
        errorMessage: 'Incorrect Password',
      }),
      new Input({
        name: 'password_confirmation',
        type: 'password',
        placeholder: 'Confirm Password',
        errorMessage: 'Incorrect Password',
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
  }),
});

export default registrationPage;
