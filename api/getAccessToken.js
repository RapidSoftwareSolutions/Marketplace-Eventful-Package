const Q       = require('q');
const lib     = require('../lib');
const request = require('request');

module.exports = (req, res) => {
    const defered = Q.defer();

    req.body.args = lib.clearArgs(req.body.args);

    let { 
        consumerKey,
        consumerSecret,
        token,
        tokenSecret,
        verifier
    } = req.body.args;
        
    let required = lib.parseReq({consumerKey, consumerSecret, token, tokenSecret, verifier});

    if(required.length > 0) 
        throw new Object({
            status_code: 'REQUIRED_FIELDS', 
            status_msg:  'Please, check and fill in required fields.',
            fields: required
        });
    
    request({
        uri: 'http://eventful.com/oauth/access_token',
        method: 'POST',
        oauth: {
            verifier: verifier,
            consumer_key: consumerKey,
            consumer_secret: consumerSecret,
            token: token,
            token_secret: tokenSecret 
        }
    }, (err, response, reslut) => {
        if(!err && (/20.*/).test(response.statusCode)) {
            // todo
            defered.resolve(lib.safeParse(reslut));
        }
        else 
            defered.reject(lib.safeParse(err || reslut || response.statusCode));
    });

    return defered.promise;    
}