//  Modules in TypeScript
// syntax
import hello from './hello';
hello('name');
//
import { john, welcome } from './hello';
welcome(john);

import * as helloMethod from './hello';
helloMethod.default('all');
helloMethod.welcome('all');