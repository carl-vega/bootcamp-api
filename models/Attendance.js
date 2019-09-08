var mongoose = require("mongoose");

// Save a reference to the Schema constructor
var Schema = mongoose.Schema;

// Using the Schema constructor, create a new AttendanceSchema object
var AttendanceSchema = new Schema({
  studentName: {
    type: String,
    required: true
  },
  pending: {
    type: Boolean,
    required: true
  },
  present: {
    type: Boolean,
    required: true
  },
  remote: {
    type: Boolean,
    required: true
  },
  excused: {
    type: Boolean,
    required: false
  },
  note: {
    type: Schema.Types.ObjectId,
    ref: "Note"
  }
});

// This creates our model from the above schema, using mongoose's model method
var Attendance = mongoose.model("Attendance", AttendanceSchema);

// Export the Attendance model
module.exports = Attendance;
