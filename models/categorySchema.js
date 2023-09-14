const { Schema, model} = require("mongoose");

const categorySchema = new Schema({
    name: {
        type: String,
        required: true
    },
    description: String,
    products: [{
        type:Schema.Types.ObjectId,
        ref:'Product'
    }],
});

module.exports = model("Category", categorySchema);