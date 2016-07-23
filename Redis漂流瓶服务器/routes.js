/**
 * Created by renminghe on 16/7/11.
 */
var express = require('express');
var app = express();
var Msg = require('./controllers/messages');
module.exports = function (app) {
    app.use('/',express.static('./static'));
    app.get('/getmsg',Msg.getMsg);
    app.post('/post',Msg.postMsg);
};