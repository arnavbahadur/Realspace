const mongoose = require('mongoose');

const ContactSchema= new mongoose.Schema({
    f_name:{ type: String, required: true} ,
    l_name:{ type: String, required: true}   ,
    phone:{ type: String, required: true },
    email:{type:String,required: true},
    requirement:{type:String,required: true},
    budget:{type:String,required: false},
    message:{type:String,required: true},
});

const Contact = mongoose.model('contact', ContactSchema);
module.exports=Contact;