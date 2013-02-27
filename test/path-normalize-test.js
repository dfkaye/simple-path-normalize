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

test('plain should return plain', function (t) {
  t.plan(1);
  t.equal(normalize('plain'), 'plain');
});

test('/slash should return /slash', function (t) {
  t.plan(1);
  t.equal(normalize('/slash'), '/slash');
});

test('./dot should return /dot', function (t) {
  t.plan(1);
  t.equal(normalize('./dot'), '/dot');
});

test('../dots should return /dots', function (t) {
  t.plan(1);
  t.equal(normalize('../dots'), '/dots');
});

test('plain/embedded should return plain/embedded', function (t) {
  t.plan(1);
  t.equal(normalize('plain/embedded'), 'plain/embedded');
});

test('./dot/embedded should return /dot/embedded', function (t) {
  t.plan(1);
  t.equal(normalize('./dot/embedded'), '/dot/embedded');
});

test('../../dots/embedded should return /dots/embedded', function (t) {
  t.plan(1);
  t.equal(normalize('../../dots/embedded'), '/dots/embedded');
});

test('../../../embedded should return /embedded', function (t) {
  t.plan(1);
  t.equal(normalize('../../../embedded'), '/embedded');
});

test('../../../../../../../../long should return /long', function (t) {
  t.plan(1);
  t.equal(normalize('../../../../../../../../long'), '/long');
});

test('/foo//bar/../baz////././../baz/spam should return /foo/baz/spam', function (t) {
  t.plan(1);
  t.equal(normalize('/foo//bar/../baz////././../baz/spam'), '/foo/baz/spam');
});

test('/top/../..//..//../../../bottom should return /bottom', function (t) {
  t.plan(1);
  t.equal(normalize('/top/../..//..//../../../bottom'), '/bottom');
});

test('/top/middle/../womp/../bottom should return /top/bottom', function (t) {
  t.plan(1);
  t.equal(normalize('/top/middle/../womp/../bottom'), '/top/bottom');
});

test('/top/./middle///bottom should return /top/middle/bottom', function (t) {
  t.plan(1);
  t.equal(normalize('/top/./middle///bottom'), '/top/middle/bottom');
});

/* template */
/*
test('$1 should return $2', function (t) {
  t.plan(1);
  t.fail('next test to implement');
});
*/