/**
 * Simple Router in JavaScript using Window Event Listeners
 * https://www.section.io/engineering-education/how-to-build-a-simple-router-in-javascript/
 */
class Router {
  constructor(root, routes) {
    this.root = root
    this.routes = {}

    routes.forEach(({ path, template }) => this.route(path, template))

    window.addEventListener('load', this.router.bind(this))
    window.addEventListener('hashchange', this.router.bind(this))
  }

  route(path, template) {
    const templateFunction = () => {
      this.root.innerHTML = template
    }
    this.routes[path] = templateFunction.bind(this)
  }

  router() {
    let url = window.location.hash.slice(1) || '/'
    let route = this.routes[url]

    route()
  }
}

export { Router }
