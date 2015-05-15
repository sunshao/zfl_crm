/**
 * AdviceController
 *
 * @description :: Server-side logic for managing advice
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {
  add:function(req,res){
    Advice.create(req.body).exec(function(err,data){
      if(err)
        res.render("successfully",{result:"出错啦，等下再试试吧！"});
      else
        res.render("successfully",{result:"谢谢您的建议，你我共同进步!"});
    });
  },
  find:function(req,res){
    Advice.find().exec(function(err,data){
      res.json(data);
    });
  }
};

