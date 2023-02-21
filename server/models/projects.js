let mongoose = require('mongoose');
let projectsModel = mongoose.Schema({
    name        : String,
    author      : String,
    published   : String,
    discription : String,
    Price       : Number,
},
{
    collection: "books"
});

module.exports = mongoose.model('projects', projectsModel);