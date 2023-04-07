import mongoose from "mongoose";
const Schema = mongoose.Schema;

export const UserSchema = new Schema({
    name: {
        type: String,
        required: [true, "Name is required"],
      },
      surname: {
        type: String,
        required: [true, "Surname is required"],
      },
      email: {
        type: String,
        required: [true, "Email is required"],
        unique: true,
      },
      age:{
        type:Number,
        required: [true, "Age is required"],
      },
      gender:{
        type:String,
        required: [true, "Gender is required"],
      },
      phone:{
        type:String,
        required:[true, "Phone number is required"]
      },
      password: {
        type: String,
        required: [true, "Password is required"],
      }
})

const User = mongoose.model("users", UserSchema);

export default User;