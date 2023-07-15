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
    Photos: [
        {
            imgUrl: {
                type: String,
                required: true
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
    location: {
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