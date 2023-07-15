const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const adminSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: false
    },
    phone: {
        type: String,
        required: false
    },
    password: {
        type: String,
        required: true
    },
    created_at:{
        type: String,
        required: true
    }
});

const Admin = mongoose.model('Admin', adminSchema);
module.exports = Admin;