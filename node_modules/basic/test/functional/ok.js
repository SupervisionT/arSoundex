var test = require('tap').test;
var basic = require(__dirname + '/../../lib/index.js');

// Mock
var auth = basic(function (user, pass, callback) {
    if (user === 'foo' && pass === 'bar') return callback(null);
    callback(401);
});
var req = {
    headers: {
        'Authorization': 'Basic Zm9vOmJhcg=='
    }
};
var res = {};

// Test
auth(req, res, function (err) {
    test('functional', function (t) {
        t.equal(err, null, 'error object is null');
        t.end();
    });
});
