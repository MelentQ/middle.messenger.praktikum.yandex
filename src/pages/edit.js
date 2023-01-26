import profile from '../components/profile/profile'
import avatar from '../components/avatar/avatar'
import list from '../components/list/list'
import back from '../components/back/back'
import button from '../components/button/button'
import field from '../components/field/field'

const editProfilePage = profile(avatar('Edit Avatar'), [
  list([
    field({
      id: '0', label: 'E-mail', name: 'email', type: 'email', value: 'mejleht@yandex.ru',
    }),
    field({
      id: '1', label: 'Login', name: 'login', type: 'text', value: 'mejleht',
    }),
    field({
      id: '2', label: 'First Name', name: 'first_name', type: 'text', value: 'Danil',
    }),
    field({
      id: '3', label: 'Second Name', name: 'second_name', type: 'text', value: 'Melentev',
    }),
    field({
      id: '4', label: 'Display Name', name: 'display_name', type: 'text', value: 'Danil',
    }),
    field({
      id: '5', label: 'Phone', name: 'phone', type: 'tel', value: '+7 (999) 999 99 99',
    }),
  ]),
  button('button', 'Save'),
]) + back('#/')

export default editProfilePage
