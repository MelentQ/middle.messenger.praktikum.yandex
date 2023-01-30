import { Window } from '../components/window';
import { Form } from '../components/form';
import { Input } from '../components/input';
import { Button } from '../components/button';
import { Link } from '../components/link';

const loginPage = new Window({
  title: 'Sign In',
  content: new Form({
    inputs: [
      new Input({
        name: 'login',
        type: 'text',
        placeholder: 'Login',
        errorMessage: 'Incorrect Login',
      }),
      new Input({
        name: 'password',
        type: 'password',
        placeholder: 'Password',
        errorMessage: 'Incorrect Password',
      }),
    ],
    actions: [
      new Button({
        type: 'submit',
        label: 'Enter',
      }),
      new Link({
        text: 'Create account',
        href: '#/registration',
        mods: '--centered',
      }),
    ],
  }),
});

export default loginPage;
