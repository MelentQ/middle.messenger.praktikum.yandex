import { Error } from '../components/error';
import { Link } from '../components/link';

const serverErrorPage = new Error({
  code: '500',
  text: 'Internal Server Error',
  actions: [
    new Link({ text: 'Go Back', href: '#/' }),
  ],
});

export default serverErrorPage;
