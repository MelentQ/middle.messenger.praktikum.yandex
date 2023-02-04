const root: HTMLElement | null = document.querySelector('#root');
const patterns = {
  name: '[A-ZА-Я][A-Za-zА-Яа-я\\-]*',
  phone: '(\\+?)[\\d]{10,15}$',
  login: '^(?=.*[A-Za-z])[A-Za-z\\d\\-_]{3,20}$',
  password: '^(?=.*[A-Za-z])(?=.*\\d)[A-Za-z\\d]{8,40}$',
};

export { root, patterns };
