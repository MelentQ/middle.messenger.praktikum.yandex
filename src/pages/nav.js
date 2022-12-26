import { window } from '../components/window/window'
import { link } from '../components/link/link'
import { list } from '../components/list/list'

const links = list([
  link('#/login', 'Login Page'),
  link('#/registration', 'Registration Page'),
  link('#/404', '404 Error Page'),
  link('#/500', '500 Error Page'),
  link('#/chat', 'Chat Page'),
  link('#/profile', 'Profile Page'),
  link('#/edit', 'Edit Profile Page'),
  link('#/edit-password', 'Edit Password Page'),
  link('#/modal', 'Opened Modal'),
])
const windowWrapper = window('Pages', links)

export { windowWrapper as navPage }
