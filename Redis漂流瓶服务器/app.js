/**
 * Created by renminghe on 16/7/9.
 */
var express = require('express');
var mongodb = require('./models/mongodb.js');
var bodyParser = require('body-parser');
var app = express();
app.use(bodyParser());
require('./routes')(app);

//获取一个用户的所用漂流瓶
app.get('/user/:user', function (req,res) {
   mongodb.getAll(req.params.user, function (result) {
      res.json(result);
   });
});

//获取特定id的漂流瓶
app.get('/bottle/:_id', function (req,res) {
   mongodb.getOne(req.params._id, function (result) {
      res.json(result);
   });
});

//回复特定的id的漂流瓶
app.post('/reply/:_id', function (req,res) {
   if(!(req.body.user&&req.body.content)){
      res.json({code:0,msg:"回复信息不完整"});
   }
   mongodb.reply(req.params._id,req.body, function (result) {
      res.json(result);
   });
});

//删除特定的id漂流瓶
app.get('/delete/:_id', function (req,res) {
   mongodb.delete(req.params._id, function (result) {
      res.json(result);
   });
});

app.listen(5000, function () {
   console.log('listen to port 5000');
});