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

const loginPage = new Window({
  title: 'Sign In',
  content: new Form({
    inputs: [
      new Input({
        name: 'login',
        type: 'text',
        placeholder: 'Login',
        errorMessage: 'Incorrect Login',
        required: true,
        pattern: patterns.login,
      }),
      new Input({
        name: 'password',
        type: 'password',
        placeholder: 'Password',
        errorMessage: 'Incorrect Password',
        required: true,
        pattern: patterns.password,
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
  }, {
    submit: onSubmit,
  }),
});

export default loginPage;
