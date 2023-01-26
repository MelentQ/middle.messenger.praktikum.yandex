import window from '../components/window/window'
import form from '../components/form/form'
import input from '../components/input/input'
import button from '../components/button/button'
import link from '../components/link/link'

const authForm = form(
  [
    input({
      name: 'email', type: 'email', placeholder: 'E-mail', errorMessage: 'Incorrect E-mail',
    }),
    input({
      name: 'login', type: 'text', placeholder: 'Login', errorMessage: 'Incorrect Login',
    }),
    input({
      name: 'first_name',
      type: 'text',
      placeholder: 'First Name',
      errorMessage: 'Incorrect First Name',
    }),
    input({
      name: 'second_name',
      type: 'text',
      placeholder: 'Second Name',
      errorMessage: 'Incorrect Second Name',
    }),
    input({
      name: 'phone', type: 'tel', placeholder: 'Phone', errorMessage: 'Incorrect Phone',
    }),
    input({
      name: 'password',
      type: 'password',
      placeholder: 'Password',
      errorMessage: 'Incorrect Password',
    }),
    input({
      name: 'password_confirmation',
      type: 'password',
      placeholder: 'Confirm Password',
      errorMessage: 'Incorrect Password',
    }),
  ],
  [button('button', 'Create account'), link('#/login', 'Login', '--centered')],
)
const registrationWindow = window('Registration', authForm)

export default registrationWindow
