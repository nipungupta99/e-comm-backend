const { Schema, model} = require("mongoose");
const reviewSchema = new Schema({
    userId: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },
    productId: {
        type: Schema.Types.ObjectId,
        ref: "Product",
        required: true,
    },
    data: {
        type: Date,
        default: Date.now()
    },
    stars: String,
    description: String,
    image: String
});

module.exports = model("Review", reviewSchema);