const mongoose = require('mongoose');
const  {model, Schema} = mongoose;

const tagSchema = Schema({
 name : {
  type: String,
  min : [3, 'panjang tags minimal 3 character'],
  max : [20, 'panjang  tags maksimal 20 character'],
  required : [true, 'a harjensi tags harus  diisi']
 }
});

module.exports = model('Tag', tagSchema)