import { modal } from '../components/modal/modal'
import { button } from '../components/button/button'
import { back } from '../components/back/back'
import { file } from '../components/file/file'

let uploadFileModal = modal(
  'Upload File',
  file('0', 'Select File', 'avatar'),
  button('button', 'Edit Avatar')
)
const backLink = back('#/')
uploadFileModal += backLink

export { uploadFileModal as modal }
