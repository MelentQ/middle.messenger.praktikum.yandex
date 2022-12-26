import { profile } from '../components/profile/profile'
import { avatar } from '../components/avatar/avatar'
import { list } from '../components/list/list'
import { back } from '../components/back/back'
import { button } from '../components/button/button'
import { field } from '../components/field/field'

let editProfilePage = profile(avatar('Edit Avatar'), [
  list([
    field('0', 'E-mail', 'email', 'email', 'mejleht@yandex.ru'),
    field('1', 'Login', 'login', 'email', 'mejleht'),
    field('2', 'First Name', 'first_name', 'email', 'Danil'),
    field('3', 'Second Name', 'second_name', 'email', 'Melentev'),
    field('4', 'Display Name', 'display_name', 'email', 'Danil'),
    field('5', 'Phone', 'phone', 'email', '+7 (999) 999 99 99'),
  ]),
  button('button', 'Save'),
])
const backLink = back('#/')
editProfilePage += backLink

export { editProfilePage }
