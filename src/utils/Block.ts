import { v4 as makeUUID } from 'uuid';
import { EventBus } from './EventBus';
import { Utils } from './Utils';

type BlockSettings = {
  withInternalID?: boolean
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
    propsAndChildren: T | {[p: string]: Block | Block[]};
    attr: { [p: string]: string };
    events: { [p: string]: Function };
    settings: BlockSettings;
  };

  private readonly props: T;
  children: {[p: string]: Block | Block[]};

  eventBus: () => EventBus;

  _id: string = makeUUID();
  _element: HTMLElement;

  _isReadyToUpdateProps = false;

  constructor(
    tagName: string = 'div',
    propsAndChildren: T = {} as T, // Как сделать нормально?
    attr: { [p: string]: string } = {},
    events: { [p: string]: Function } = {},
    settings: BlockSettings = {},
  ) {
    Object.keys(events).forEach((key) => {
      // eslint-disable-next-line no-param-reassign
      events[key] = events[key].bind(this);
    });

    this.meta = {
      tagName,
      propsAndChildren,
      attr,
      events,
      settings,
    };

    // @ts-ignore
    this.props = this._makePropsProxy({ ...this.meta.propsAndChildren, __id: this._id });
    this.children = this._separateChildren(this.meta.propsAndChildren);

    const eventBus = new EventBus();
    this.eventBus = () => eventBus;
    this._registerEvents(eventBus);

    eventBus.emit(Block.EVENTS.INIT);
  }

  _separateChildren(
    propsAndChildren: T | {[p: string]: Block | Block[]},
  ): {[p: string]: Block | Block[]} {
    const children: {[p: string]: Block | Block[]} = {};

    Object.entries(propsAndChildren).forEach(([key, value]) => {
      if (Array.isArray(value)) {
        const childrenArray = value.filter((item) => item instanceof Block);
        if (childrenArray.length) {
          children[key] = childrenArray;
        }
      } else if (value instanceof Block) {
        children[key] = value;
      }
    });

    return children;
  }

  _registerEvents(eventBus: EventBus) {
    eventBus.on(Block.EVENTS.INIT, this.init.bind(this));
    eventBus.on(Block.EVENTS.FLOW_CDM, this._componentDidMount.bind(this));
    eventBus.on(Block.EVENTS.FLOW_CDU, this._componentDidUpdate.bind(this));
    eventBus.on(Block.EVENTS.FLOW_RENDER, this._render.bind(this));
  }

  _createResources() {
    this._element = Utils.createDocumentElement(this.meta.tagName);
  }

  init() {
    this._createResources();
    this.eventBus().emit(Block.EVENTS.FLOW_RENDER);
  }

  _componentDidMount() {
    this.componentDidMount();

    Object.values(this.children).forEach((child) => {
      if (Array.isArray(child)) {
        child.forEach((c) => {
          c.dispatchComponentDidMount();
        });
      } else {
        child.dispatchComponentDidMount();
      }
    });
  }

  componentDidMount() {
    console.log('Component mounted: ', this.constructor.name);
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

    return true;
  }

  get element() {
    return this._element;
  }

  _addAttribute() {
    if (this.meta.settings.withInternalID) {
      this._element.setAttribute('data-id', this._id);
    }

    Object.entries(this.meta.attr).forEach(([name, value]) => {
      this._element.setAttribute(name, value);
    });
  }

  addEvents() {
    Object.entries(this.meta.events).forEach(([name, event]) => {
      // @ts-ignore
      this._element.addEventListener(name, event);
    });
  }

  removeEvents() {
    Object.entries(this.meta.events).forEach(([name, event]) => {
      // @ts-ignore
      this._element.removeEventListener(name, event);
    });
  }

  compile(templateFunction: Function): DocumentFragment {
    const propsAndStubs = { ...this.props };

    Object.entries(this.children).forEach(([key, child]) => {
      if (Array.isArray(child)) {
        child.forEach((c, i) => {
          // @ts-ignore
          propsAndStubs[key][i] = `<div data-id='${c._id}'></div>`;
        });
      } else {
        // @ts-ignore
        propsAndStubs[key] = `<div data-id='${child._id}'></div>`;
      }
    });

    // @ts-ignore
    const fragment: HTMLTemplateElement = Utils.createDocumentElement('template');

    fragment.innerHTML = templateFunction(propsAndStubs);

    Object.values(this.children).forEach((child) => {
      if (Array.isArray(child)) {
        child.forEach((c) => {
          const placeholder = fragment.content.querySelector(`[data-id="${c._id}"]`);
          placeholder!.replaceWith(c.getContent());
        });
      } else {
        const placeholder = fragment.content.querySelector(`[data-id="${child._id}"]`);
        placeholder!.replaceWith(child.getContent());
      }
    });

    return fragment.content;
  }

  _render() {
    // console.log('render: ', this.constructor.name);

    this.removeEvents();
    this._element.innerHTML = '';

    this._element.appendChild(this.render());
    this._addAttribute();
    this.addEvents();
  }

  // Переопределяется пользователем. Необходимо вернуть разметку
  render(): DocumentFragment {
    return document.createDocumentFragment();
  }

  getContent(): HTMLElement {
    return this.element;
  }

  setProps = (nextProps: T) => {
    if (!nextProps) {
      return;
    }

    const oldProps = { ...this.props };

    this._isReadyToUpdateProps = false;

    // В this.props уже есть загрушки children
    Object.assign(this.props, nextProps);

    // Обновляем список чилдов
    this.children = this._separateChildren(this.props);

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
