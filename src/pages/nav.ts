import { Window } from '../components/window';
import { List } from '../components/list';
// import link from '../components/link/link'

// list([
//   link('#/login', 'Login Page'),
//   link('#/registration', 'Registration Page'),
//   link('#/404', '404 Error Page'),
//   link('#/500', '500 Error Page'),
//   link('#/chat', 'Chat Page'),
//   link('#/profile', 'Profile Page'),
//   link('#/edit', 'Edit Profile Page'),
//   link('#/edit-password', 'Edit Password Page'),
//   link('#/modal', 'Opened Modal'),
// ])

const list: List = new List({
  items: ['test1', 'test2'],
  attr: {
    class: 'list',
  },
});

const list2: List = new List({
  items: ['2', 'list'],
  attr: {
    class: 'list',
  },
});

const nav: Window = new Window({
  title: 'Pages',
  content: list,
  attr: {
    class: 'window',
  },
  events: {
    click: () => {
      nav.setProps({ title: 'test', content: list2 });
    },
  },
});

const navPage = nav.getContent();

// @ts-ignore
window.nav = nav;

// @ts-ignore
window.list = list;

export default navPage;
