import './scss/global.scss'

import { root } from './utils/constants'
import { Router } from './utils/router'
import { navPage } from './pages/nav'
import { loginPage } from './pages/login'
import { registrationPage } from './pages/registration'
import { serverErrorPage } from './pages/500'
import { notFoundErrorPage } from './pages/404'
import { chat } from './pages/chat'
import { profilePage } from './pages/profile'
import { editProfilePage } from './pages/edit'
import { editPasswordPage } from './pages/edit-password'
import { modal } from './pages/modal'

new Router(root, [
  { path: '/', template: navPage },
  { path: '/login', template: loginPage },
  { path: '/registration', template: registrationPage },
  { path: '/404', template: notFoundErrorPage },
  { path: '/500', template: serverErrorPage },
  { path: '/chat', template: chat },
  { path: '/profile', template: profilePage },
  { path: '/edit', template: editProfilePage },
  { path: '/edit-password', template: editPasswordPage },
  { path: '/modal', template: modal },
])

console.log('123')
