var mongoose = require("mongoose");

// Save a reference to the Schema constructor
var Schema = mongoose.Schema;

// Using the Schema constructor, create a new SessionSchema object
var SessionSchema = new Schema({
  id: {
    type: Number,
    required: true
  },
  courseId: {
    type: Number,
    required: true
  },
  contextId: {
    type: Number,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  shortDescription: {
    type: String,
    required: true
  },
  longDescription: {
    type: String,
    required: false
  },
  startTime: {
    type: Date,
    required: true
  },
  endTime: {
    type: Date,
    required: true
  },
  chapter: {
    type: Number,
    required: true
  },
  note: {
    type: Schema.Types.ObjectId,
    ref: "Note"
  }
});

// This creates our model from the above schema, using mongoose's model method
var Session = mongoose.model("Session", SessionSchema);

// Export the Session model
module.exports = Session;
