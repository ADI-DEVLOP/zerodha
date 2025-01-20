const { Schema } = require("mongoose");
const userSchema = require("./userSchema");

const OrdersSchema = new Schema({
    name: String,
    user:String,
    qty: Number,
    price: Number,
    mode: String,
});

module.exports = { OrdersSchema };