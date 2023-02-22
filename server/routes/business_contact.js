let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');
let passport = require('passport');
let businessContactsController = require('../controllers/business_contact');
// helper function for guard purposes
function requireAuth(req, res, next) {
    // check if the user is logged in
    if (!req.isAuthenticated()) {
        return res.redirect('/login');
    }
    next();
}

// connect to our businessContactsModel
let BusinessContact = require('../models/business_contacts');
// Get route for the business contacts list page - read operation
router.get('/', businessContactsController.displayBusinessContactList);

// Get route for displaying the Add Page - CREATE operation
router.get('/add', requireAuth, businessContactsController.displayBusinessContactAddPage);

// POST Route for processing the Add Page - CREATE Operation
router.post('/add', requireAuth, businessContactsController.processBusinessContactAddPage);

// Get Route for displaying the Edit page - Update Operation
router.get('/edit/:id', requireAuth, businessContactsController.displayBusinessContactEditPage);

// POST Route for processing the Edit page - UPDATE operation
router.post('/edit/:id', requireAuth, businessContactsController.processBusinessContactEditPage);

// GET Route for perform Deletion - DELETE Operation
router.get('/delete/:id', requireAuth, businessContactsController.processBusinessContactDeletePage);

module.exports = router;