import profile from '../components/profile/profile'
import avatar from '../components/avatar/avatar'
import list from '../components/list/list'
import back from '../components/back/back'
import button from '../components/button/button'
import field from '../components/field/field'

const editPasswordPage = profile(avatar('Edit Avatar'), [
  list([
    field({
      id: '0', label: 'Old Password', name: 'oldPassword', type: 'password', value: '123456',
    }),
    field({
      id: '1', label: 'New Password', name: 'newPassword', type: 'password', value: 'qwerty',
    }),
    field({
      id: '2',
      label: 'Password Confirmation',
      name: 'password_confirmation',
      type: 'password',
      value: 'qwerty',
    }),
  ]),
  button('button', 'Save'),
]) + back('#/')

export default editPasswordPage
