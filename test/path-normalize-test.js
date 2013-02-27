var test = require('tape');
var normalize = require('../src/path-normalize.js').normalize;

test('empty should return /', function (t) {
  t.plan(1);
  t.equal(normalize(''), '/');
});

test('slash should return /', function (t) {
  t.plan(1);
  t.equal(normalize('/'), '/');
});

test('double slash should return /', function (t) {
  t.plan(1);
  t.equal(normalize('//'), '/');
});

test('dot should return /', function (t) {
  t.plan(1);
  t.equal(normalize('.'), '/');
});

test('double dots should return /', function (t) {
  t.plan(1);
  t.equal(normalize('..'), '/');
});

test('$1 should return $2', function (t) {
  t.plan(1);
  t.fail('next test to implement');
});
