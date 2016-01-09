import base from './_base';
import development from './_development';
import production from './_production';

let overrides;
switch (base.env) {
  case 'development':
    overrides = development(base);
    break;
  case 'production':
    overrides = production(base);
    break;
  default:
    overrides = development(base);
}

export default Object.assign({}, base, overrides)
