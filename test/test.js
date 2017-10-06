var assert = require('assert');
var nx = require('next-js-core2');
require('../src/next-cast-array');

describe('next/castArray', function () {

  it('nx.castArray', function () {
    var tar1 = 1;
    var tar2 = undefined;
    var tar3 = null;
    var tar4 = [1,2,4];
    var tar5 = 'abc';

    assert.deepEqual(nx.castArray(tar1), [1]);
    assert.deepEqual(nx.castArray(tar2), [ undefined ]);
    assert.deepEqual(nx.castArray(tar3), [ null ]);
    assert.deepEqual(nx.castArray(tar4), [1,2,4]);
    assert.equal(nx.castArray(tar4), tar4);
    assert.deepEqual(nx.castArray(tar5), ['abc']);
  });

});
