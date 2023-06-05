import mongoose from "mongoose";

const Schema = mongoose.Schema;

const FormSchema = new Schema(
  {
    name: { type: String, required: [true, "Name is required"] },
    register_number: {
      type: Number,
      required: [true, "Register Number is required"],
    },
    room_number: { type: Number, required: [true, "Room number is required"] },
    year: { type: Number, required: [true, "Year is required"] },
    course: { type: String, required: [true, "Course is required"] },
    gender: { type: String, required: [true, "Gender is required"] },
    email: {
      type: String,
      required: [true, "Email is required"],
      unique: [true, "Email already exists!"],
    },
    date_of_outing: {
      type: Date,
      required: [true, "Date of OutGoing is required"],
    },
    date_of_returning: {
      type: Date,
      required: [true, "Date of returning is required"],
    },
    parent_name: { type: String, required: [true, "Parent name is required"] },
    phone_number: {
      type: Number,
      required: [true, "Phone number is required"],
    },
    outing_place: {
      type: String,
      required: [true, "outing place is required"],
    },
    state: { type: String, required: [true, "state is required"] },
    city: { type: String, required: [true, "city is required"] },
    outgoing_reason: {
      type: String,
      required: [true, "outgoing reason is required"],
    },
    address: { type: String, required: [true, "Address is required"] },
  },
  { timestamps: true }
);

export const Form = mongoose.model("Form", FormSchema);
