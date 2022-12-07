import { window } from '../components/window/window'
import { form } from '../components/form/form'
import { input } from '../components/input/input'
import { button } from '../components/button/button'
import { link } from '../components/link/link'

const authForm = form(
  [
    input('email', 'email', 'E-mail', 'Incorrect E-mail'),
    input('login', 'text', 'Login', 'Incorrect Login'),
    input('first_name', 'text', 'First Name', 'Incorrect First Name'),
    input('second_name', 'text', 'Second Name', 'Incorrect Second Name'),
    input('phone', 'tel', 'Phone', 'Incorrect Phone'),
    input('password', 'password', 'Password', 'Incorrect Password'),
    input('password_confirmation', 'password', 'Confirm Password', 'Incorrect Password'),
  ],
  [button('button', 'Create account'), link('#/login', 'Login', '--centered')]
)
const registrationWindow = window('Registration', authForm)

export { registrationWindow as registrationPage }
