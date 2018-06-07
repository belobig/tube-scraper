// Include the momentJS library
var moment = require("moment");

// Require Mongoose
var mongoose = require('mongoose');

// Create a Schema Class
var Schema = mongoose.Schema;

// Create Video Schema
var VideoSchema = new Schema({

  // Title of Video
  title: {
    type: String,
    required: true
  },

  // Link to Video
  link: {
    type: String,
    required: true
  },
  
  // Duration of Video
  duration: {
    type: String,
    required: true
	},
	
	// Link to Image of Video
  image: {
    type: String,
    required: true
	},
	
	// Video Channel
  channel: {
    type: String,
    required: true
  },

  // Date of video scrape (saving as a string to pretify it in Moment-JS)
  updated: {
    type: String,
    default: moment().format('MMMM Do YYYY, h:mm A')
  },

  // Create a relation with the Comment model
  comments: [{
    type: Schema.Types.ObjectId,
    ref: 'Comment'
  }]

});

// Create the Video model with Mongoose
var Video = mongoose.model('Video', VideoSchema);

// Export the Model
module.exports = Video;