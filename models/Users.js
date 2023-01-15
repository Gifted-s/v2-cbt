const mongoose = require('mongoose');
const Schema = mongoose.Schema
const UsersSchema = new Schema({
    usertype: {
        type: String,
        required: true
    },
    users: [
        {
            name: {
                type: String,
                required: true
            },
            matric_number: {
                type: String,
                required: true
            },
            score: {
                type: Number,
                required: true
            },
            course: {
                type: String,
                required: true
            },
            time_completed: {
                type: String,
                required: true
            },
        }
    ]
})

module.exports = mongoose.model('User', UsersSchema)