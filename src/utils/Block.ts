import { v4 as makeUUID } from 'uuid';
import { EventBus } from './EventBus';
import { Utils } from './Utils';

type BlockSettings = {
  withInternalID: boolean
}

abstract class Block<T extends object = {}> {
  static EVENTS = {
    INIT: 'init',
    FLOW_CDM: 'flow:component-did-mount',
    FLOW_CDU: 'flow:component-did-update',
    FLOW_RENDER: 'flow:render',
  };

  meta: {
    tagName: string;
    props: T;
    children: { [key: string]: Block };
    attr: { [p: string]: string };
    events: { [p: string]: Function };
    settings: BlockSettings;
  };

  eventBus: () => EventBus;

  _id: string = makeUUID();
  _element: HTMLElement | null = null;

  _isReadyToUpdateProps = false;

  protected constructor(
    tagName: string,
    props: T,
    children: { [p: string]: Block },
    attr: { [p: string]: string },
    events: { [p: string]: Function },
    settings: BlockSettings,
  ) {
    this.meta = {
      tagName,
      props,
      children,
      attr,
      events,
      settings,
    };

    // Подменяем чилдов на заглушки
    Object.entries(this.meta.children).forEach(([key, child]) => {
      // @ts-ignore
      this.meta.props[key] = `<div data-id='${child._id}'></div>`;
    });

    // @ts-ignore
    this.props = this._makePropsProxy({ ...this.meta.props, __id: this._id });

    const eventBus = new EventBus();
    this.eventBus = () => eventBus;
    this._registerEvents(eventBus);

    eventBus.emit(Block.EVENTS.INIT);
  }

  _separatePropsAndChildren(propsAndChildren: T): {
    children: { [key: string]: Block },
    props: { [key: string]: string }
  } {
    const children: { [key: string]: Block } = {};
    const props: { [key: string]: string } = {};

    Object.entries(propsAndChildren).forEach(([key, value]) => {
      if (value instanceof Block) {
        children[key] = value;
      } else {
        props[key] = value;
      }
    });

    return { children, props };
  }

  _registerEvents(eventBus: EventBus) {
    eventBus.on(Block.EVENTS.INIT, this.init.bind(this));
    eventBus.on(Block.EVENTS.FLOW_CDM, this._componentDidMount.bind(this));
    eventBus.on(Block.EVENTS.FLOW_CDU, this._componentDidUpdate.bind(this));
    eventBus.on(Block.EVENTS.FLOW_RENDER, this._render.bind(this));
  }

  _createResources() {
    this._element = Utils.createDocumentElement(this.tagName);
  }

  init() {
    this._createResources();
    this.eventBus().emit(Block.EVENTS.FLOW_RENDER);
  }

  _componentDidMount() {
    this.componentDidMount();
  }

  componentDidMount() {
  }

  dispatchComponentDidMount() {
    this.eventBus().emit(Block.EVENTS.FLOW_CDM);
  }

  _componentDidUpdate(oldProps: T, newProps: T) {
    const isReRender = this.componentDidUpdate(oldProps, newProps);
    if (!isReRender) {
      return;
    }
    this._render();
  }

  componentDidUpdate(oldProps: T, newProps: T): boolean {
    console.log(oldProps, newProps);
    // @ts-ignore
    // return !Utils.compareObjects(oldProps, newProps);

    return true;
  }

  get element() {
    return this._element;
  }

  _addAttribute() {
    // @ts-ignore
    const { attr = {} } = this.props;
    if (this._element) {
      // @ts-ignore
      if (this.props.settings?.withInternalID) {
        this._element.setAttribute('data-id', this._id);
      }

      const fragment = this._element;

      Object.entries(attr).forEach(([key, attribute]) => {
        fragment.setAttribute(key, attribute as string);
      });
    }
  }

  _addEvents() {
    // @ts-ignore
    const { events = {} } = this.props;

    Object.keys(events).forEach((eventName) => {
      // @ts-ignore
      this._element.addEventListener(eventName, events[eventName]);
    });
  }

  _removeEvents() {
    // @ts-ignore
    const { events = {} } = this.props;

    Object.keys(events).forEach((eventName) => {
      // @ts-ignore
      this._element.removeEventListener(eventName, events[eventName]);
    });
  }

  _render() {
    if (this._element === null) {
      throw new Error('Element is null');
    }
    console.log('render: ', this.constructor.name);

    this._removeEvents();
    this._element.innerHTML = this.render();
    this._addAttribute();

    const fragment = this._element;
    Object.values(this.children).forEach((child) => {
      // @ts-ignore
      const stub = fragment.querySelector(`[data-id="${child._id}"]`);
      if (stub) {
        stub.replaceWith(child.getContent());
      }
    });

    this._addEvents();
  }

  // Переопределяется пользователем. Необходимо вернуть разметку
  render(): string {
    return '';
  }

  getContent(): HTMLElement {
    if (this.element === null) {
      throw new Error('Element is null');
    }
    return this.element;
  }

  setProps = (nextProps: T) => {
    if (!nextProps) {
      return;
    }

    const oldProps = { ...this.props };

    this._isReadyToUpdateProps = false;

    // todo: Сделать то же самое с чилдами
    Object.assign(this.props, nextProps);

    if (this._isReadyToUpdateProps) {
      this.eventBus().emit(Block.EVENTS.FLOW_CDU, oldProps, this.props);
      this._isReadyToUpdateProps = false;
    }
  };

  _makePropsProxy(props: T): T {
    const self = this;

    return new Proxy(props, {
      get(target, prop) {
        // @ts-ignore
        const value = target[prop];
        return typeof value === 'function' ? value.bind(target) : value;
      },
      set(target: T, prop, value) {
        // todo: тут нет проверки на массив
        // @ts-ignore
        if (target[prop] !== value) {
          self._isReadyToUpdateProps = true;
        }

        // @ts-ignore
        // eslint-disable-next-line no-param-reassign
        target[prop] = value;

        return true;
      },
      deleteProperty() {
        throw new Error('Нет доступа');
      },
    });
  }
}

export { Block };
