import { error } from '../components/error/error'
import { link } from '../components/link/link'

const backLink = link('#/', 'Go Back')
const underConstructionError = error('', 'Under Construction', backLink)

export { underConstructionError as chat }
