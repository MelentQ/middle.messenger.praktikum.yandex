import { error } from '../components/error/error'
import { link } from '../components/link/link'

const backLink = link('#/', 'Go Back')
const serverError = error('500', 'Internal Server Error', backLink)

export { serverError as serverErrorPage }
