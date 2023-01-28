class Utils {
  static createDocumentElement(tagName: string): HTMLElement {
    return document.createElement(tagName);
  }

  static compareObjects(obj1: {[key: string]: unknown}, obj2: {[key: string]: unknown}): boolean {
    // for (const p in o1) {
    //   if (o1.hasOwnProperty(p)) {
    //     if (o1[p] !== o2[p]) {
    //       return false;
    //     }
    //   }
    // }
    // for (const p in o2) {
    //   if (o2.hasOwnProperty(p)) {
    //     if (o1[p] !== o2[p]) {
    //       return false;
    //     }
    //   }
    // }

    return Object.keys(obj2).every((key) => obj1[key] && obj1[key] === obj2[key]);
  }
}

export { Utils };
