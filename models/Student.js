var mongoose = require("mongoose");

// Save a reference to the Schema constructor
var Schema = mongoose.Schema;

// Using the Schema constructor, create a new StudentSchema object
var StudentSchema = new Schema({
  studentName: {
    type: String,
    required: true
  },
  githubUsername: {
    type: String,
    required: false
  },
  email: {
    type: String,
    required: false
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
var Student = mongoose.model("Student", StudentSchema);

// Export the Student model
module.exports = Student;
