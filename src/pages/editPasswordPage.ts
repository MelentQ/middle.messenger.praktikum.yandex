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

const editPasswordPage = new ProfileForm({
  head: [
    new Avatar({ label: 'Edit Avatar' }),
  ],
  content: [
    new List({
      items: [
        new Field({
          id: '0',
          label: 'Old Password',
          name: 'oldPassword',
          type: 'password',
          value: '123456',
          required: true,
          pattern: patterns.password,
        }),
        new Field({
          id: '1',
          label: 'New Password',
          name: 'newPassword',
          type: 'password',
          value: 'qwerty',
          required: true,
          pattern: patterns.password,
        }),
        new Field({
          id: '2',
          label: 'Password Confirmation',
          name: 'newPassword_confirmation',
          type: 'password',
          value: 'qwerty',
          required: true,
          pattern: patterns.password,
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

export default editPasswordPage;
