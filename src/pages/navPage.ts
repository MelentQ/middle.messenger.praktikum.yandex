import { Window } from '../components/window';
import { List } from '../components/list';
import { Link } from '../components/link';

const navPage = new Window(
  {
    title: 'Pages',
    content: new List(
      {
        items: [
          new Link({ href: '#/login', text: 'Login Page' }),
          new Link({ href: '#/registration', text: 'Registration Page' }),
          new Link({ href: '#/404', text: '404 Error Page' }),
          new Link({ href: '#/500', text: '500 Error Page' }),
          new Link({ href: '#/chat', text: 'Chat Page' }),
          new Link({ href: '#/profile', text: 'Profile Page' }),
          new Link({ href: '#/edit', text: 'Edit Profile Page' }),
          new Link({ href: '#/edit-password', text: 'Edit Password Page' }),
          new Link({ href: '#/modal', text: 'Opened Modal' }),
        ],
      },
    ),
  },
);

// @ts-ignore
window.navPage = navPage;

export default navPage;
