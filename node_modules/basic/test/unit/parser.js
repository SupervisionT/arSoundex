var test = require('tap').test;
var parser = require('../../lib/parser');

test('spec', function (t) {
    t.equal(typeof parser, 'function');
    t.end();
});

test('ok', function (t) {
    var result = parser('Zm9vOmJhcg==');
    t.equal(typeof result, 'object');
    t.equal(typeof result.username, 'string');
    t.equal(typeof result.password, 'string');
    t.equal(result.username, 'foo');
    t.equal(result.password, 'bar');
    t.end();
});

test('invalid', function (t) {
    var result = parser('Zm9vYmFy');
    t.equal(typeof result, 'object');
    t.equal(result.username, undefined);
    t.equal(result.password, undefined);
    t.end();
});
