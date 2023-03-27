const mongoose = require('mongoose');
const  {model, Schema} = mongoose;

const ProductSchema = Schema({
 name : {
  type: String,
  min : [3, 'panjang nama makanan minimal 3 character'],
  required : [true, 'nama makana harus diisi']
 },

 description : {
  type: String,
  max : [3, 'panjang nama makanan minimal 3 character']
 },

 price : {
  type: Number,
  default: 0
 },
 category : {
  type : Schema.Types.ObjectId,
  ref: 'Category'
 },
 tags : {
  type: Schema.Types.ObjectId,
  ref: 'Tag'
 },

 image_url : String,


}, {timestamps: true});

module.exports = model('Product', ProductSchema)