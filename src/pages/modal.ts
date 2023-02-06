import { Modal } from '../components/modal';
import { File } from '../components/file';
import { Button } from '../components/button';

const uploadFileModal = new Modal({
  title: '',
  content: [
    new File({ id: '0', label: 'Select File', name: 'avatar' }),
  ],
  actions: [
    new Button({ type: 'button', label: 'Edit Avatar' }),
  ],
});

export default uploadFileModal;
