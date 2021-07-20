const mongoose = require('mongoose');

const ItemSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    },
    quantity: {
        type: Number,
        default: 1
    }
});

module.exports = Item = mongoose.model("item", ItemSchema);

