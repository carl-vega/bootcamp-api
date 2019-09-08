var mongoose = require("mongoose");

// Save a reference to the Schema constructor
var Schema = mongoose.Schema;

// Using the Schema constructor, create a new AssignmentSchema object
var AssignmentSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  dueDate: {
    type: Date,
    required: false
  },
  required: {
    type: Boolean,
    required: true
  },
  contextId: {
    type: Number,
    required: true
  },
  urls: {
    type: Map,
    of: String
  },
  note: {
    type: Schema.Types.ObjectId,
    ref: "Note"
  }
});

// This creates our model from the above schema, using mongoose's model method
var Assignment = mongoose.model("Assignment", AssignmentSchema);

// Export the Assignment model
module.exports = Assignment;
