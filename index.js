"use strict";
global.PACKAGE_NAME = 'Eventful';

const express       = require('express'),
    lib             = require('./lib'),
    bodyParser      = require('body-parser'),
    RAPI            = require('rapi-js-package'),
    API             = lib.init(),
    fs              = require('fs'),
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
        let auth = {};
        let opts = {};
        let r = {
            callback     : "",
            contextWrites: {}
        };

        try {
            console.log(args)
            for(let arg in args) {
                let argarr = arg.split('|');
                opts[args[arg] + '|' + argarr[0]] = req.body.args[argarr[1]];
            }

            options.query  = opts;
            options.method = method;

            let result = yield new RAPI(url).auth({
                type:           'oauth',
                consumerKey:    req.body.args['consumerKey'],
                consumerSecret: req.body.args['consumerSecret'],
                token:          req.body.args['oauthToken'],
                tokenSecret:    req.body.args['oauthTokenSecret']
            }).request(options);

            let format = yield lib.parse(result);

            r.callback            = 'success';
            r.contextWrites['to'] = format;
        } catch(e) {
            console.log(e);
            r.callback            = 'error';
            r.contextWrites['to'] = e;
        }

        res.status(200).send(r);
    }));
}

for(let route in API) {
    app.post(`/api/${PACKAGE_NAME}/${route}`, _(function* (req, res) {
        let response;
        let r = {
            callback     : "",
            contextWrites: {}
        };

        try {
            response              = yield API[route](req, res);
            r.callback            = 'success';
            r.contextWrites['to'] = lib.success(response);
        } catch(e) {
            r.callback            = 'error';
            r.contextWrites['to'] = e;

        }
        res.status(200).send(r);
    }));
}


app.listen(PORT);
module.exports = app;
