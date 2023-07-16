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
    location_url: {
        type: String,
        required: true 
    },
    created_at: {
        type: Date
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
    imageContainer: {
        type: String,
        required: true
    },
    Photos: [
        {
            imgUrl: {
                type: String,
                required: true
            }
        }
    ],
    Description: {
        type: String
    },
    Featured: {
        type: String
    },
    addMoreDetails:[
        {
            key: {
                type: String
            },
            value: {
                type: String
            }
        }
    ],
    Feature:  [
        {
            key: {
                type: String
            },
            value: {
                type: String
            }
        }
    ],
    Note: {
        type: String
    },
    Rating: {
        type: Number,
        default: 5,
        min: [1, `Rating can't be less than 1`]
    },
    CurrentStatus: {
        type: String,
        required: true
    }
});

const Property = mongoose.model('Property', PropertySchema);
module.exports = Property;