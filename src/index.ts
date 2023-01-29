import './scss/global.scss';

import Router from './utils/router';
import { root } from './utils/constants';
import navPage from './pages/navPage';
// import loginPage from './pages/login'
// import registrationPage from './pages/registration'
// import serverErrorPage from './pages/500'
// import notFoundErrorPage from './pages/404'
// import chatPage from './pages/chat'
// import profilePage from './pages/profile'
// import editProfilePage from './pages/edit'
// import editPasswordPage from './pages/edit-password'
// import modal from './pages/modal'

new Router(root, [
  { path: '/', component: navPage },
]);

// new Router(root, [
//   { path: '/', template: navPage },
//   { path: '/login', template: loginPage },
//   { path: '/registration', template: registrationPage },
//   { path: '/404', template: notFoundErrorPage },
//   { path: '/500', template: serverErrorPage },
//   { path: '/chat', template: chatPage },
//   { path: '/profile', template: profilePage },
//   { path: '/edit', template: editProfilePage },
//   { path: '/edit-password', template: editPasswordPage },
//   { path: '/modal', template: modal },
// ])
