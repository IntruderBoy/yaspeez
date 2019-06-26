const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Chart = new Schema({
    playername: {
        type: String
    },
    playerscore: {
        type: Number
    }
});
module.exports = mongoose.model('Chart', Chart);











