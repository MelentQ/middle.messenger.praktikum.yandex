import { Profile } from '../components/profile';
import { Avatar } from '../components/avatar';
import { Name } from '../components/name';
import { List } from '../components/list';
import { Info } from '../components/info';
import { Link } from '../components/link';

const profilePage = new Profile({
  head: [
    new Avatar({ label: 'Edit Avatar' }),
    new Name({ text: 'Danil' }),
  ],
  content: [
    new List({
      items: [
        new Info({ name: 'E-mail', value: 'mejleht@yandex.ru' }),
        new Info({ name: 'Login', value: 'mejleht' }),
        new Info({ name: 'First Name', value: 'Danil' }),
        new Info({ name: 'Second Name', value: 'Melentev' }),
        new Info({ name: 'Chat Name', value: 'Danil' }),
        new Info({ name: 'Phone', value: '+7 (999) 999 99 99' }),
      ],
    }),
    new List({
      items: [
        new Link({ href: '#/edit', text: 'Edit Info' }),
        new Link({ href: '#/edit-password', text: 'Change Password' }),
        new Link({ href: '#/', text: 'Logout', mods: '--color-red' }),
      ],
    }),
  ],
});

export default profilePage;
