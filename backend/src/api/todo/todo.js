const restful = require('node-restful')
const mongoose = restful.mongoose

const todoSchema = new mongoose.Schema({
    description: { type: String, required: true },
    done: { type: Boolean, required: true, default: false },
    created_at: { type: Date, default: Date.now }
})

module.exports = restful.model('Todo', todoSchema)