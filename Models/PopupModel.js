const mongoose = require('mongoose');

const PopupSchema= new mongoose.Schema({
            imgUrl: {
                type: String,
                required: false
            } 
      });

const Popup = mongoose.model('popup', PopupSchema);
module.exports=Popup;