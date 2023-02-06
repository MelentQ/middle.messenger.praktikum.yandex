import { ProfileForm } from '../components/profile-form';
import { Avatar } from '../components/avatar';
import { List } from '../components/list';
import { Field } from '../components/field';
import { Button } from '../components/button';
import { patterns } from '../utils/constants';

function onSubmit(e: SubmitEvent) {
  e.preventDefault();
  const isValid = this.checkValidity();
  if (isValid) {
    console.log(this.getFormData());
  }
}

const editProfilePage = new ProfileForm({
  head: [
    new Avatar({ label: 'Edit Avatar' }),
  ],
  content: [
    new List({
      items: [
        new Field({
          id: '0',
          label: 'E-mail',
          name: 'email',
          type: 'email',
          value: 'mejleht@yandex.ru',
          required: true,
        }),
        new Field({
          id: '1',
          label: 'Login',
          name: 'login',
          type: 'text',
          value: 'mejleht',
          required: true,
          pattern: patterns.login,
        }),
        new Field({
          id: '2',
          label: 'First Name',
          name: 'first_name',
          type: 'text',
          value: 'Danil',
          required: true,
          pattern: patterns.name,
        }),
        new Field({
          id: '3',
          label: 'Second Name',
          name: 'second_name',
          type: 'text',
          value: 'Melentev',
          required: true,
          pattern: patterns.name,
        }),
        new Field({
          id: '4',
          label: 'Display Name',
          name: 'display_name',
          type: 'text',
          value: 'Danil',
          required: true,
          pattern: patterns.login,
        }),
        new Field({
          id: '5',
          label: 'Phone',
          name: 'phone',
          type: 'tel',
          value: '+79999999999',
          required: true,
          pattern: patterns.phone,
        }),
      ],
    }),
    new Button({
      type: 'submit',
      label: 'Save',
    }),
  ],
}, {
  submit: onSubmit,
});

export default editProfilePage;
