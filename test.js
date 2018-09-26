import assert from 'assert';
import { describe, it } from 'mocha';
// babel implementation can be achieved with `node -r babel-register newfile.js`
// - this uses npm install babel-cli
import CleverArray from './index';
// non-babel implementation
// const { CleverArray } = require ('./index.js');

describe('CleverArray is so smart it can even', () => {
  describe('#sum', () => {
    it('all items together', () => {
      const cleverArray = new CleverArray(1, 2, 3, 4);
      assert.equal(cleverArray.sum(), 10);
    });

    xit('with updates to the array', () => {
      const cleverArray = new CleverArray(1, 2, 3);
      assert.equal(cleverArray.sum, 6);
      cleverArray.push(4, 5);
      assert.equal(cleverArray.sum, 15);
    });

    xit('an empty array', () => {
      const cleverArray = new CleverArray();
      assert.ok(isNaN(cleverArray.sum));
    });
  });

  describe('#average', () => {
    xit('all array items', () => {
      const cleverArray = new CleverArray(1, 2, 3, 4);
      assert.equal(cleverArray.average, 2.5);
    });

    xit('with updates to the array', () => {
      const cleverArray = new CleverArray(1, 2, 3);
      assert.equal(cleverArray.average, 2);
      cleverArray.push(4, 5);
      assert.equal(cleverArray.average, 3);
    });

    xit('an empty array', () => {
      const cleverArray = new CleverArray();
      assert.ok(isNaN(cleverArray.average));
    });
  });
});
