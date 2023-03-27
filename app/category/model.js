const mongoose = require('mongoose');
const  {model, Schema} = mongoose;

const categorySchema = Schema({
 name : {
  type: String,
  min : [3, 'panjang nama makanan minimal 3 character'],
  max : [20, 'panjang nama makanan maksimal 20 character'],
  required : [true, 'nama makana harus diisi']
 }
});

module.exports = model('Category', categorySchema)