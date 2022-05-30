import mongoose from "mongoose";

const peopleSchema = mongoose.Schema({
  firstName: {
    type: String,
  },
  lastName: {
    type: "String",
  },
  CIN : Number
});

const People = mongoose.model("people", peopleSchema);
export default People;