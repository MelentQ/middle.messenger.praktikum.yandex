import { profile } from '../components/profile/profile'
import { avatar } from '../components/avatar/avatar'
import { list } from '../components/list/list'
import { back } from '../components/back/back'
import { button } from '../components/button/button'
import { field } from '../components/field/field'

let editPasswordPage = profile(avatar('Edit Avatar'), [
  list([
    field('0', 'Old Password', 'oldPassword', 'password', '123456'),
    field('1', 'New Password', 'newPassword', 'password', 'qwerty'),
    field('2', 'Password Confirmation', 'password_confirmation', 'password', 'qwerty'),
  ]),
  button('button', 'Save'),
])
const backLink = back('#/')
editPasswordPage += backLink

export { editPasswordPage }
