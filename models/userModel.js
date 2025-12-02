import mongoose from "mongoose";

const user = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
        minlength: [8, "Min Length is At least 8 character"],
    },
    token: {
        type: String
    },
role: {
      type: String,
      enum: ["user", "admin"], 
      default: "user",
    },
},
    {
        versionKey: false,
        timestamps: true
    }
);

export default mongoose.model("User", user);