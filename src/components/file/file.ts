import './file.scss';
import templateFunction from './file.hbs';
import { Block } from '../../utils/Block';

type FileProps = {
  id: string,
  label: string,
  name: string
}

class File extends Block<FileProps> {
  constructor(props: FileProps, events: { [p: string]: Function } = {}) {
    super('div', props, { class: 'file' }, events);
  }

  render() {
    return this.compile(templateFunction);
  }
}

export { File };
