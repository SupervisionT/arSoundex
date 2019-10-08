var test = require('tap').test;
var basic = require('../../lib/index');

test('spec', function (t) {
    var func = function () {};
    t.equal(typeof basic, 'function');
    t.equal(typeof basic(), 'function');
    t.equal(typeof basic(func), 'function');
    t.equal(typeof basic('foo'), 'function');
    t.end();
});
