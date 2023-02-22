let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

// Create a reference to the DB scheme which is the model
let BusinessContact = require('../models/business_contacts');
//  We want to display the book list
module.exports.displayBusinessContactList = (req, res, next) => {
    BusinessContact.find((err, BusinessContactList)=> {
        if (err) 
        {
            return console.error(err);
        } 
        else 
        {
            // console.log(BusinessContactList);
            res.render('../views/business_contacts/index', {title: "Business Contacts List", BusinessContactList: BusinessContactList, displayName: req.user?req.user.displayName:'', slug: 'list-business-contacts'});
        }
    }).sort({ contact_name: 1});
}

// Render business contact add page
module.exports.displayBusinessContactAddPage = (req, res, next) => {
    res.render('../views/business_contacts/index', {title: "Add Business Contact", displayName: req.user?req.user.displayName:'', slug: 'add-business-contacts'});
}

// Process business contact add request
module.exports.processBusinessContactAddPage = (req, res, next) => {
    let newContact = BusinessContact({
        "contact_name": req.body.contact_name,
        "contact_number": req.body.contact_number,
        "contact_email": req.body.contact_email,
    });
    BusinessContact.create(newContact, (err, contact) => {
        if (err) {
            console.log(err);
            res.end(err);
        } else {
            res.redirect('/business_contacts');
        }
    })
}

// Render business contact edit page
module.exports.displayBusinessContactEditPage = (req, res, next) => {
    let id = req.params.id;
    BusinessContact.findById({_id:id}, (err, contactToEdit) => {
        if (err) {
            console.log(err);
            res.end(err);
        } else {
            res.render('../views/business_contacts/index', {title: "Edit a Business Contact", contact: contactToEdit, displayName: req.user?req.user.displayName:'', slug: 'edit-business-contacts'});
        }
    })

}

// Process business contact edit request
module.exports.processBusinessContactEditPage = (req, res, next) => {
    var datetime = new Date();
    let id = req.params.id;
    let updatedContact = BusinessContact({
        "_id": id,
        "contact_name": req.body.contact_name,
        "contact_number": req.body.contact_number,
        "contact_email": req.body.contact_email,
    });
    BusinessContact.updateOne({_id:id}, updatedContact, (err)=>{
        if (err) {
            console.log(err);
            res.end(err);
        } else {
            res.redirect('/business_contacts');
        }
    });
}

// Process business contact delete request
module.exports.processBusinessContactDeletePage = (req, res, next) => {
    let id = req.params.id;
    BusinessContact.remove({_id:id}, (err)=> {
        if (err) {
            console.log(err);
            res.end(err);
        } else {
            res.redirect("/business_contacts");
        }
    });
}