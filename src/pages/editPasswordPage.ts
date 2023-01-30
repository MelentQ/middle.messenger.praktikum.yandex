import { Profile } from '../components/profile';
import { Avatar } from '../components/avatar';
import { List } from '../components/list';
import { Field } from '../components/field';
import { Button } from '../components/button';

const editPasswordPage = new Profile({
  head: [
    new Avatar({ label: 'Edit Avatar' }),
  ],
  content: [
    new List({
      items: [
        new Field({
          id: '0', label: 'Old Password', name: 'oldPassword', type: 'password', value: '123456',
        }),
        new Field({
          id: '1', label: 'New Password', name: 'newPassword', type: 'password', value: 'qwerty',
        }),
        new Field({
          id: '2',
          label: 'Password Confirmation',
          name: 'password_confirmation',
          type: 'password',
          value: 'qwerty',
        }),
      ],
    }),
    new Button({
      type: 'submit',
      label: 'Save',
    }),
  ],
});

export default editPasswordPage;
