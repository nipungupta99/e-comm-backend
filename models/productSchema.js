const { Schema, model} = require("mongoose");
const productSchema = new Schema({
    image: String,
    gallery: [String],
    name: {
        type: String,
        required: true
    },
    description: String,
    sku: String,
    price: {
        type: Number,
        required: true,
        min: 0,
    },
    quantity: Number,
    unit: String,
    discount: Number,
    category: {
        type:Schema.Types.ObjectId,
        ref:'Category'
    },
    reviews: [{
        type:Schema.Types.ObjectId,
        ref:'Review'
    }],
});

module.exports = model("Product", productSchema);