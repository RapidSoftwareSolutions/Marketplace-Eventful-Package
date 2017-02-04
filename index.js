"use strict";
global.PACKAGE_NAME = 'Eventful';

const express       = require('express'),
    bodyParser      = require('body-parser'),
    RAPI            = require('rapi-js-package'),
    crypto          = require('crypto'),
    oauthSignature  = require('oauth-signature'),
    fs              = require('fs'),
    lib             = require('./lib'),
    _               = lib.callback;

const PORT          = process.env.PORT || 8080;
const app           = express();

let mfile = fs.readFileSync('./metadata.json', 'utf-8'),
    cfile = fs.readFileSync('./control.json',  'utf-8');

let metadata = JSON.parse(mfile),
    control  = JSON.parse(cfile);

app.use(bodyParser.json(({limit: '50mb'})));
app.use(bodyParser.urlencoded({limit: '50mb', extended: true}));
app.all(`/api/${PACKAGE_NAME}`, (req, res) => { res.send(metadata); });

for(let func in control) {
    let options = {
        query:     {},
        hasSkip:   true,
        //parseUri:  true,
        debug:     true
    };

    let {
        method, 
        args,
        url,
        hasTree
    } = control[func];

    app.post(`/api/${PACKAGE_NAME}/${func}`, _(function* (req, res) {
        let opts = {
            'oauth_version|String': '1.0', 
            'oauth_signature_method|String': 'HMAC-SHA1',
            'oauth_timestamp|Number': new Date()/1e3|0,
            'oauth_nonce|String': crypto.randomBytes(20).toString('hex')
        };
        let auth = {};
        let r = {
            callback     : "",
            contextWrites: {}
        };

        req.body.args = lib.clearArgs(req.body.args);

        try {
            for(let arg in args) {
                let argarr = arg.split('|');
                opts[args[arg] + '|' + argarr[0]] = req.body.args[argarr[1]];
            }

            opts['oauth_signature|String'] = oauthSignature.generate(
                method, 
                url, 
                lib.convert(opts)
                //req.body.args['consumerSecret'], 
                //req.body.args['oauthTokenSecret']
            );

            options.query   = opts;
            options.method  = method;

            let result = yield new RAPI(url).request(options);
            let format = yield lib.parse(result);

            r.callback            = 'success';
            r.contextWrites['to'] = format;
        } catch(e) {
            r.callback            = 'error';
            r.contextWrites['to'] = e;
        }

        res.status(200).send(r);
    }));
}

app.listen(PORT);
module.exports = app;
