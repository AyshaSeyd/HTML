const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/tdp_db", {
    useNewUrlParser: true
});

const nameSchema = new mongoose.Schema({
    disposition: {
        type: String,
        require: true
    },
    age: String,
    name: {
        type: String,
        require: true
    }
});

const nameModel = mongoose.model("name", nameSchema);

module.exports = {
    nameModel
}
