import profile from '../components/profile/profile'
import avatar from '../components/avatar/avatar'
import name from '../components/name/name'
import list from '../components/list/list'
import info from '../components/info/info'
import link from '../components/link/link'
import back from '../components/back/back'

const profilePage = profile(avatar('Edit Avatar') + name('Danil'), [
  list([
    info('E-mail', 'mejleht@yandex.ru'),
    info('Login', 'mejleht'),
    info('First Name', 'Danil'),
    info('Second Name', 'Melentev'),
    info('Chat Name', 'Danil'),
    info('Phone', '+7 (999) 999 99 99'),
  ]),
  list([
    link('#/edit', 'Edit Info'),
    link('#/edit-password', 'Change Password'),
    link('#/', 'Logout', '--color-red'),
  ]),
]) + back('#/')

export default profilePage
