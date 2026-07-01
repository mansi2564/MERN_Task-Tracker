const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Name is required"],
      trim: true,
    },

    email: {
      type: String,
      required: [true, "Email is required"],
      unique: true,
      lowercase: true,
      trim: true,
    },

    password: {
      type: String,
      required: [true, "Password is required"],
      minlength: 6,
    },

    avatar: {
      type: String,
      default:
        "https://ui-avatars.com/api/?name=User&background=6366F1&color=fff",
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("User", userSchema);