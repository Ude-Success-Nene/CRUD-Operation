const mongoose = require("mongoose");

const BlogObject = {
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    updatedAt: {
        type: Date,
        default: Date.now
    }
}

const BlogSchema = new mongoose.Schema(BlogObject) // structure

const Blog = mongoose.model('blog, BlogSchema') //data

module.exports = Blog




