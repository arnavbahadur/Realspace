const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const projectSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    created_at: {
        type: Date,
        required: true
    },
    projectsingleimg: {
        type: String,
        required: true
    },
    Rooms: {
        type: String,
    
    },
    // Gallery: [
    //     {   
    //         imgUrl: {
    //             type: String,
    //             required: false
    //         },
    //         imgname: {
    //             type: String
    //         }
    //     }
    // ],
    projectboximg: [
        {   
            imgUrl: {
                type: String,
                required: false
            }
        }
    ],
  
    // Floorplan: [
    //     {
    //         imgUrl: {
    //             type: String,
    //             required: false
    //         },
    //         imgname: {
    //             type: String
    //         }
    //     }
    // ],
    addMoreDetails: [
        { 
                type: String

        }
    ],
    Feature: [
        {  
                type: String   
        }
    ],
   
     Parking: {
        type: String,
        required: true 
    },

     Floors: {
        type: String,
        required: true 
    },

    location: {
        type: String,
        required: true 
    },
    Address: {
        type: String,
        required: true 
    },
    Area: {
        type: String,
        // required: true 
    },
     City: {
        type: String,
        required: true 
    },
     Postalcode: {
        type: String,
        required: true 
    },
    Video_url: {
        type: String,
        required: true 
    },
    location_url: {
        type: String,
        required: true 
    },
    
    CurrentStatus: {
        type: String,
        required: true
    },
    reranumber:{
        type: String,
    }

});

const Project = mongoose.model('project', projectSchema);
module.exports = Project;