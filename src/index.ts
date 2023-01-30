import './scss/global.scss';

import Router from './utils/router';
import { root } from './utils/constants';
import navPage from './pages/navPage';
import loginPage from './pages/loginPage';
import registrationPage from './pages/registrationPage';
import notFoundErrorPage from './pages/notFoundErrorPage';
import serverErrorPage from './pages/serverErrorPage';
import chatPage from './pages/chatPage';
import profilePage from './pages/profilePage';
import editProfilePage from './pages/editProfilePage';
import editPasswordPage from './pages/editPasswordPage';
import modal from './pages/modal';

new Router(root, [
  { path: '/', component: navPage },
  { path: '/login', component: loginPage },
  { path: '/registration', component: registrationPage },
  { path: '/404', component: notFoundErrorPage },
  { path: '/500', component: serverErrorPage },
  { path: '/chat', component: chatPage },
  { path: '/profile', component: profilePage },
  { path: '/edit', component: editProfilePage },
  { path: '/edit-password', component: editPasswordPage },
  { path: '/modal', component: modal },
]);
