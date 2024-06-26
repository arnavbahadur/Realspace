const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PropertySchema = new Schema ({
    title: {
        type: String,
        required: true
    },
    location: {
        type: String,
        required: true 
    },
    Purpose: {
        type: String,
        required: true 
    },
    property_url: {
        type: String,
        required: true 
    },
    location_url: {
        type: String,
        required: true 
    },
    propertytype: {
        type: String,
        required: true 
    },
    created_at: {
        type: String
    },
    price: {
        type: Number,
        required: true 
    },
    areaSqFt: {
        type: Number,
        required: true
    },
    hall: {
        type: Number,
        required: true,
        default: 0
    },
    bedRoom: {
        type: Number,
        required: true,
        default: 0
    },
    bathRoom: {
        type: Number,
        required: true,
        default: 0
    },
    balcony:{
        type:String,
        require:true
    },
    totalfloor:{
        type:String,
        require:true
    },
    constructionstage:{
        type:String,
        require:true
    },
    dateofpossesion:{
        type:String,
        require:true
    },

    
    // Listingyear: {
    //     type: Number,
    //     required: true
    // },
    // imageContainer: {
    //     type: String,
    //     required: true
    // },
    Nearby: [
        {           
                type: String,
                required: true

        }
    ],
    
   houseboximgUrl: {
          type: String,
        required: true
            },
   
    Gallery: [
                {   
                    // imgUrl: {
                        type: String,
                        required: false
                    // }
                    // imgname: {
                    //     type: String
                    // }
                }
            ],
  
    Description: {
        type: String
    },

    Feature:  [
        {
                type: String,
                required:true
        }
    ],
    Note: {
        type: String
    },
    // Rating: {
    //     type: Number,
    //     default: 5,
    //     min: [1, `Rating can't be less than 1`]
    // },
    CurrentStatus: {
        type: String,
        required: true
    }
});

const Property = mongoose.model('Property', PropertySchema);
module.exports = Property;



    // Feature: {
    //     type: String
    // },
    // addMoreDetails:[
    //     {
    //         key: {
    //             type: String
    //         },
    //         value: {
    //             type: String
    //         }
    //     }
    // ],

    // <iframe width="560" height="315" src="https://www.youtube.com/embed/9ALM5gPYhJA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>