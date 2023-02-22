let express = require('express');
let router = express.Router();

// Get route for the project list page - read operation
router.get('/', (req, res, next)=> {
    res.render('projects', {title: "Projects", slug: 'projects', displayName: req.user?req.user.displayName:""});
});

module.exports = router;