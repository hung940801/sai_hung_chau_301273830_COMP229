// require modules for the business contact model
let mongoose = require('mongoose');
let businessContactsModel = mongoose.Schema({
    contact_name    : String,
    contact_number  : String,
    contact_email   : String,
},
{
    collection: "businessContacts"
});

module.exports = mongoose.model('businessContacts', businessContactsModel);