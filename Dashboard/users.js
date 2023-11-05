import mongoose from "mongoose";

let userSchema = new mongoose.Schema({});

module.exports = mongoose.model("users", userSchema);
