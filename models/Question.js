const mongoose = require('mongoose');
const Schema = mongoose.Schema
const QuestionSchema = new Schema({
        question: {
                type: String,
                required: true
        },
        optionA: {
                type: String,
                required: true
        },
        optionB: {
                type: String,
                required: true
        },
        optionC: {
                type: String,
                required: true
        },
        optionD: {
                type: String,
                required: true
        },
        correctAnswer: {
                type: String,
                required: true
        },
        course: {
                type: String,
                required: true
        }
})

module.exports = mongoose.model('Question', QuestionSchema)