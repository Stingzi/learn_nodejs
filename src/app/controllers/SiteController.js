const Course = require('../models/Course');
const { mutipleMongooseToObject } = require('../../util/mongoose');

class SiteControllers {

    // [GET]
    async index(req, res, next) {
        try {
            let courses = await Course.find({});
            res.render('home', { courses:mutipleMongooseToObject(courses) });
        } catch (error) {
            console.error('Lỗi khi lấy danh sách khóa học:', error);
            next(error);
        }
    }

    //[GET], /search
    search(req, res) {
        res.render('search')
    }
}

module.exports = new SiteControllers;