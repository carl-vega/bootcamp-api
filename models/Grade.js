var mongoose = require("mongoose");

// Save a reference to the Schema constructor
var Schema = mongoose.Schema;

// Using the Schema constructor, create a new GradeSchema object
var GradeSchema = new Schema({
  student: {
    type: Schema.Types.ObjectId,
    ref: "Student"
  },
  assignment: {
    type: Schema.Types.ObjectId,
    ref: "Assignments"
  },
  submitted: {
    type: Boolean,
    required: true
  },
  grade: {
    type: String,
    required: false
  },
  note: {
    type: Schema.Types.ObjectId,
    ref: "Note"
  }
});

// This creates our model from the above schema, using mongoose's model method
var Grade = mongoose.model("Grade", GradeSchema);

// Export the Grade model
module.exports = Grade;
