import modal from '../components/modal/modal'
import button from '../components/button/button'
import back from '../components/back/back'
import file from '../components/file/file'

const uploadFileModal = modal(
  'Upload File',
  file('0', 'Select File', 'avatar'),
  button('button', 'Edit Avatar'),
) + back('#/')

export default uploadFileModal
