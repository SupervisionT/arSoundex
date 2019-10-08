/**
 * HTTP basic authentication parser. Accepts Base-64 encoded string and
 * returns an object containing the username and password.
 *
 * @param   {string}  input  Base-64 encoded string
 *
 * @return  {object}
 */
module.exports = function (input) {
    var token   = input.split(/\s+/).pop() || '';
    var auth    = new Buffer(token, 'base64').toString();
    var parts   = auth.split(/:/);

    if (parts.length !== 2) {
        parts[0] = undefined;
        parts[1] = undefined;
    }

    return {
        username: parts[0],
        password: parts[1]
    };
};
