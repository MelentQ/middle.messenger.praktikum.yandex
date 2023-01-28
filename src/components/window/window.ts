import './window.scss';
import templateFunction from './window.hbs';
import { Block } from '../../utils/Block';

// events
type WindowProps = {
  title: string, // props
  content?: Block | string, // props
  attr?: {[attributeName: string]: string}, // Атрибуты обёртки
  events?: {[eventName: string]: Function}, // События
  settings?: {withInternalID: boolean} // Настройки
}

class Window extends Block<WindowProps> {
  constructor(props: WindowProps) {
    super(props, 'div');
  }

  render() {
    return templateFunction(this.props);
  }
}

export { Window };
