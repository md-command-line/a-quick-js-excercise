// babel implementation can be achieved with `node -r babel-register newfile.js`
// - this uses npm install babel-cli
import CleverArray from './index';

const cleverArray = new CleverArray(1, 2, 3, 4);
console.log(cleverArray.sum())
console.log(cleverArray.average())


// non-babel implementation
// const { CleverArray } = require ('./index.js');
