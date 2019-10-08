var parser = require('./parser');

/**
 * HTTP Basic Auth middleware provider.
 *
 * @param   {function}  handler  Function used to evaluate username & password
 *
 * @return  {function}
 */
module.exports = function (handler) {
    // Default handler method
    if (typeof handler !== 'function') {
        handler = function (user, pass, callback) {
            callback(null);
        };
    }

    // Return middleware
    return function (req, res, callback) {
        var header = req.headers.Authorization || req.headers.authorization;
        if (!header) {
            var denied = new Error('access denied');
            denied.status = denied.statusCode = 401;
            return callback(denied);
        }
        
        var auth = parser(header);
        handler(auth.username, auth.password, callback);
    };
};
