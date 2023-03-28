const mongoose = require('mongoose');
const  {model, Schema} = mongoose;

const orderItemSchema = Schema({
 name : {
  type: String,
  minlength : [5, 'panjang nama makanan minimal 5 character'], 
  required : [true, 'Nmae must be filled']
 },

 qty : {
  type: Number,
  min : [1, 'minimal qty adalah 1'],
  required : [true, 'qty harus diisi']
 },

 price : {
  type: Number,
  required : [true, 'harga harus diisi']
 },


 order : {
  type: Schema.Types.ObjectId,
  ref: 'Order'
 },

 product : {
  type: Schema.Types.ObjectId,
  ref: 'Product'
 },
});

module.exports = model('OrderItem', orderItemSchema)