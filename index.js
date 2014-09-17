var express = require('express');
var crypto = require('crypto');
var app = express();

app.get('/', function(req, res){
    var arr = [];

    arr[0] = 'test'; // token
    arr[1] = req.query.nonce;
    arr[2] = req.query.timestamp;
    arr.sort();

    var shasum = crypto.createHash('sha1');
    shasum.update(arr.join(''));
    if(shasum.digest('hex') == req.query.signature)
    {res.send(req.query.echostr);}
    else
    {res.send('Hello World');}
});

var server = app.listen(3000, function() {
    console.log('Listening on port %d', server.address().port);
});