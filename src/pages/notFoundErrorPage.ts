import { Error } from '../components/error';
import { Link } from '../components/link';

const notFoundErrorPage = new Error({
  code: '404',
  text: 'Not Found',
  actions: [
    new Link({ text: 'Go Back', href: '#/' }),
  ],
});

export default notFoundErrorPage;
