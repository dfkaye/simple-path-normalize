var test = require('tape');
var normalize = require('../src/path-normalize.js').normalize;

test('empty should return /', function (t) {

  t.equal(normalize(''), '/');
  t.end();
});

test('slash should return /', function (t) {

  t.equal(normalize('/'), '/');
  t.end();
});

test('double slash should return /', function (t) {

  t.equal(normalize('//'), '/');
  t.end();
});

test('dot should return /', function (t) {

  t.equal(normalize('.'), '/');
  t.end();
});

test('double dots should return /', function (t) {

  t.equal(normalize('..'), '/');
  t.end();
});

test('plain should return plain', function (t) {

  t.equal(normalize('plain'), 'plain');
  t.end();
});

test('/slash should return /slash', function (t) {

  t.equal(normalize('/slash'), '/slash');
  t.end();
});

test('./dot should return /dot', function (t) {

  t.equal(normalize('./dot'), '/dot');
  t.end();
});

test('../dots should return /dots', function (t) {

  t.equal(normalize('../dots'), '/dots');
  t.end();
});

test('plain/embedded should return plain/embedded', function (t) {

  t.equal(normalize('plain/embedded'), 'plain/embedded');
  t.end();
});

test('./dot/embedded should return /dot/embedded', function (t) {

  t.equal(normalize('./dot/embedded'), '/dot/embedded');
  t.end();
});

test('../../dots/embedded should return /dots/embedded', function (t) {

  t.equal(normalize('../../dots/embedded'), '/dots/embedded');
  t.end();
});

test('../../../embedded should return /embedded', function (t) {

  t.equal(normalize('../../../embedded'), '/embedded');
  t.end();
});

test('../../../../../../../../long should return /long', function (t) {

  t.equal(normalize('../../../../../../../../long'), '/long');
  t.end();
});

test('/foo//bar/../baz////././../baz/spam should return /foo/baz/spam', function (t) {

  t.equal(normalize('/foo//bar/../baz////././../baz/spam'), '/foo/baz/spam');
  t.end();
});

test('/top/../..//..//../../../bottom should return /bottom', function (t) {

  t.equal(normalize('/top/../..//..//../../../bottom'), '/bottom');
  t.end();
});

test('/top/middle/../womp/../bottom should return /top/bottom', function (t) {

  t.equal(normalize('/top/middle/../womp/../bottom'), '/top/bottom');
  t.end();
});

test('/top/./middle///bottom should return /top/middle/bottom', function (t) {

  t.equal(normalize('/top/./middle///bottom'), '/top/middle/bottom');
  t.end();
});

test('/top/middle/../womp/../bottom should return /top/bottom', function (t) {

  t.equal(normalize('/top/middle/../womp/../bottom'), '/top/bottom');
  t.end();
});

/* template */
/*
test('$1 should return $2', function (t) {

  t.fail('next test to implement');
});
*/