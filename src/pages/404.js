import { error } from '../components/error/error'
import { link } from '../components/link/link'

const backLink = link('#/', 'Go Back')
const notFoundError = error('404', 'Not Found', backLink)

export { notFoundError as notFoundErrorPage }
