import { Profile } from '../components/profile';
import { Avatar } from '../components/avatar';
import { List } from '../components/list';
import { Field } from '../components/field';
import { Button } from '../components/button';

const editProfilePage = new Profile({
  head: [
    new Avatar({ label: 'Edit Avatar' }),
  ],
  content: [
    new List({
      items: [
        new Field({
          id: '0', label: 'E-mail', name: 'email', type: 'email', value: 'mejleht@yandex.ru',
        }),
        new Field({
          id: '1', label: 'Login', name: 'login', type: 'text', value: 'mejleht',
        }),
        new Field({
          id: '2', label: 'First Name', name: 'first_name', type: 'text', value: 'Danil',
        }),
        new Field({
          id: '3', label: 'Second Name', name: 'second_name', type: 'text', value: 'Melentev',
        }),
        new Field({
          id: '4', label: 'Display Name', name: 'display_name', type: 'text', value: 'Danil',
        }),
        new Field({
          id: '5', label: 'Phone', name: 'phone', type: 'tel', value: '+7 (999) 999 99 99',
        }),
      ],
    }),
    new Button({
      type: 'submit',
      label: 'Save',
    }),
  ],
});

export default editProfilePage;
