const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/tdp_db", {
    useNewUrlParser: true
});

const personSchema = new mongoose.Schema({
    disposition: {
        type: String,
        required: true
    },
    age: String,
    name: {
        type: String,
        required: true
    }
});

const personModel = mongoose.model("person", personSchema);

module.exports = {
    personModel
}