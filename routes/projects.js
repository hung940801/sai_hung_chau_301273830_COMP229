let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

// connect to our projectsModel
let Projects = require('../models/projects');
// Get route for the project list page - read operation
router.get('/', (req, res, next)=> {
    // Projects.find((err, ProjectList)=> {
    //     if (err) 
    //     {
    //         return console.error(err);
    //     } 
    //     else 
    //     {
    //         // console.log(ProjectList);
    //         res.render('projects', {title: "Projects", ProjectList: ProjectList});
    //         // return res;
    //     }
    // });
    res.render('projects', {title: "Projects", slug: 'projects'});
});

module.exports = router;