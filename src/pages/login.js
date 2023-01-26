import window from '../components/window/window'
import form from '../components/form/form'
import input from '../components/input/input'
import button from '../components/button/button'
import link from '../components/link/link'

const authForm = form(
  [
    input({
      name: 'login', type: 'text', placeholder: 'Login', errorMessage: 'Incorrect Login',
    }),
    input({
      name: 'password',
      type: 'password',
      placeholder: 'Password',
      errorMessage: 'Incorrect Password',
    }),
  ],
  [button('button', 'Enter'), link('#/registration', 'Create account', '--centered')],
)
const loginWindow = window('Sign in', authForm)
export default loginWindow
