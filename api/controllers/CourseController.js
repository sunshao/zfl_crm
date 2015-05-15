/**
 * CourseController
 *
 * @description :: Server-side logic for managing courses
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {
    index:function(req,res){res.render("aboutcourse",{coursec:"1",title:"课程体系"})}
};

