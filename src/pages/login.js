import { window } from '../components/window/window'
import { form } from '../components/form/form'
import { input } from '../components/input/input'
import { button } from '../components/button/button'
import { link } from '../components/link/link'

const authForm = form(
  [
    input('login', 'text', 'Login', 'Incorrect Login'),
    input('password', 'password', 'Password', 'Incorrect Password'),
  ],
  [button('button', 'Enter'), link('#/registration', 'Create account', '--centered')]
)
const loginWindow = window('Sign in', authForm)
export { loginWindow as loginPage }
