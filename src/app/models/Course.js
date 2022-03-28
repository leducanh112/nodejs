const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const Course = new Schema({
    name: {type: String, maxlength: 255},
    description: {type: String},
    image: {type: String},
    videoId: {type: String},
  },{
      timestamps :true,
    });

  module.exports = mongoose.model('Course', Course);