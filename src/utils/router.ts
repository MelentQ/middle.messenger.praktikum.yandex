import { Block } from './Block';

interface IRouter {
  root: HTMLElement,
  _routes: { [path: string]: Function },
  router(): void
}

/**
 * Simple Router in JavaScript using Window Event Listeners
 * https://www.section.io/engineering-education/how-to-build-a-simple-router-in-javascript/
 */
class Router implements IRouter {
  root: HTMLElement;

  _routes: { [path: string]: Function };

  constructor(root: HTMLElement | null, routes: { path: string, component: Block }[]) {
    if (root === null) {
      throw new Error('root is null');
    }

    this.root = root;
    this._routes = {};

    routes.forEach(({ path, component }) => {
      const templateFunction = () => {
        this.root.append(component.getContent());
      };
      this._routes[path] = templateFunction.bind(this);
    });

    window.addEventListener('load', this.router.bind(this));
    window.addEventListener('hashchange', this.router.bind(this));
  }

  router() {
    const path = window.location.hash.slice(1) || '/';
    this._routes[path]();
  }
}

export default Router;
