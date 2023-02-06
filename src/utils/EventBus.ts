class EventBus {
  public listeners: {[event: string]: Function[]};

  public constructor() {
    // Singleton ???
    this.listeners = {};
  }

  public on(event: string, callback: Function) {
    if (!this.listeners[event]) {
      this.listeners[event] = [];
    }

    this.listeners[event].push(callback);
  }

  public off(event: string, callback: Function) {
    this._checkEvent(event);

    this.listeners[event] = this.listeners[event].filter(
      (listener) => listener !== callback,
    );
  }

  public emit(event: string, ...args: any[]) {
    this._checkEvent(event);

    this.listeners[event].forEach((listener) => {
      listener(...args);
    });
  }

  private _checkEvent(event: string) {
    if (!this.listeners[event]) {
      throw new Error(`Нет события: ${event}`);
    }
  }
}

export { EventBus };
