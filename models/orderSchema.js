const { Schema, model} = require("mongoose");

const orderSchema = new Schema({
    userId: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    product_ids: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Product'
        }
    ],
    date: {
        type: Date,
        default: Date.now()
    },
    status: String,
});

module.exports = model("Order", orderSchema);