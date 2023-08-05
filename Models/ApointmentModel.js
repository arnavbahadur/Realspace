const mongoose = require('mongoose');

const ContactSchema= new mongoose.Schema({
    f_name:{ type: String, required: true} ,
    l_name:{ type: String, required: true}   ,
    phone:{ type: String, required: true },
    date:{ type: String, required: true },
    message:{type:String,required: true},
});

const Apointment = mongoose.model('apointment', ContactSchema);
module.exports=Apointment;