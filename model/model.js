const mongoose = require('mongoose');

const dataSchema = new mongoose.Schema({
    name: {
       required: true,
        type: 'string'
    },
    stack: {
       required: true,
        type: 'string'
    },
    interest: {
        required: true,
        type: 'string'
    }
})

module.exports = mongoose.model('Data', dataSchema)