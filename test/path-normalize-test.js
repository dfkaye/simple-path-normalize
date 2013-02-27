var test = require('tape');
var normalize = require('../path-normalize.js').normalize;

test('empty should return /', function (t) {
  t.plan(1);
  t.equal(normalize(''), '/');
});
