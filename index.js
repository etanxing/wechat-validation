var express = require('express'),
    app = express(),
    wechat = require('wechat'),
    logger = require('morgan'),
    session = require('express-session'),
    cookieParser = require('cookie-parser'),
    text = require('./resp/text'),
    events = require('./resp/event'),
    voice = require('./resp/voice'),
    other = require('./resp/other');

app.use(express.query()); // Or app.use(express.query());
app.use(cookieParser());
app.use(session({ resave: true, saveUninitialized: true, secret: 'uwotm8' }));
//app.use(logger('dev'));
app.use('/', wechat('test')
    .text(text)
    .image(other)
    .voice(voice)
    .video(other)
    .location(other)
    .link(other)
    .event(events)
    .middlewarify());

var server = app.listen(6666, function() {
    console.log('Listening on port %d', server.address().port);
});
