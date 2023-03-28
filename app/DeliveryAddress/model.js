const mongoose = require('mongoose');
const  {model, Schema} = mongoose;

const deliveryAddressSchema = Schema({
 nama : {
  type: String,
  maxlength : [255, 'Nama alamat  provinsi  maksimal 255 character'],
  required : [true, 'Nama alamat  harus  diisi']
 },
 kelurahan : {
  type: String,
  maxlength : [255, 'panjang  Kelurahan  maksimal 255 character'],
  required : [true, 'Kelurahan harus  diisi']
 },
 kecamatan : {
  type: String,
  maxlength : [255, 'panjang  Kecamatan  maksimal 255 character'],
  required : [true, 'Kecamatan harus  diisi']
 },
 kabupaten : {
  type: String,
  maxlength : [255, 'panjang  kabupaten maksimal 255 character'],
  required : [true, 'Kabupaten harus  diisi']
 },
 provinsi : {
  type: String,
  maxlength : [255, 'panjang  provinsi  maksimal 255 character'],
  required : [true, 'Provinsi harus  diisi']
 },
 detail : {
  type: String,
  maxlength : [1000, 'panjang  detail  maksimal 1000 character'],
  required : [true, 'Detail alamat harus  diisi']
 },
 user : {
  type: Schema.Types.ObjectId,
  ref: 'User'
 }
},{ timestamps: true});

module.exports = model('DeliveryAddress', deliveryAddressSchema)