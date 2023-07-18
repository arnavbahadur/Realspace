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
        type: Date
    },
    imageContainer: {
        type: String,
        required: true
    },
    Rooms: {
        type: String,
        required: true
    },
    Photos: [
        {
            imgUrl: {
                type: String,
                required: false
            }
        }
    ],
    Floorplan: [
        {
            imgUrl: {
                type: String,
                required: false
            }
        }
    ],
    addMoreDetails: [
        {
            key: {
                type: String
            },
            value: {
                type: String
            }
        }
    ],
    Feature: [
        {
            key: {
                type: String
            },
            value: {
                type: String
            }
        }
    ],
    Featured: {
        type: String
    },
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
        required: true 
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
    Note: {
        type: String
    },
    CurrentStatus: {
        type: String,
        required: true
    }
});

const Project = mongoose.model('project', projectSchema);
module.exports = Project;