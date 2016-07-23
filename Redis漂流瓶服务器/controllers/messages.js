/**
 * Created by renminghe on 16/7/11.
 */
var express = require('express');
var mongodb = require('../models/mongodb.js');
var app = express();
var redis = require('../models/redis.js');

//捡一个漂流瓶
exports.getMsg = function (req,res) {
        if(!req.query.user){
            return res.json({code:0,msg:"信息不完整"});
        }
        if(req.query.type &&(['male','female'].indexOf(req.query.type)===-1)){
            return res.json({code:0,msg:"类型错误"});
        }
        redis.pick(req.query, function (result) {
            if(result.code === 1){
                mongodb.save(req.query.user,result.msg, function (err) {
                    if(err){
                        return res.json({code:0,msg:"获取漂流瓶失败,请重试"});
                    }
                     res.json(result);
                });
            }
        });
};

//丢一个漂流瓶
exports.postMsg = function (req,res) {
    //扔一个漂流瓶
        if(!(req.body.owner && req.body.type && req.body.content)){
            if(req.body.type && (['male','female'].indexOf(req.body.type)===-1)){
                return res.json({code:0,msg:"类型错误"});
            }
            return res.json({code:0,msg:"信息不完整"});
        }
        redis.throw(req.body, function (result) {
            res.json(result);
        });

};

//mongovue