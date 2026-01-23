import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    //verification fields
    name: { type: String, required: true, trim: true },
    email: {
      type: String,
      required: true,
      lowercase: true,
      trim: true,
    },
    isEmailVerified: { type: Boolean, default: false },
    emailToken: { type: String },
    emailTokenExpires: { type: Date },
    resetPasswordToken: { type: String },
    resetPasswordExpires: { type: Date },
    passwordHash: { type: String, required: true },
    phoneNumber: { type: String, required: true, trim: true, unique: true },
    phoneNumberVerified: { type: Boolean, default: false },
    phoneNumberVerificationToken: { type: String },
    phoneNumberVerificationTokenExpiry: { type: Date },

    //profile fields
    roles: { type: [String], default: ["client"] },
    dateOfBirth: { type: Date},
    city: { type: String,},
    gender: {type: String, enum:["male", "female"]},

    //account fields
    accountNumber: {type: String, unique: true},
    status: {type: String, enum:["active", "inactive", "suspended"]},
    
    //security fields
    failedLoginAttempts: { type: Number, default: 0},
    lastLogin: { type: Date },
    
    //audit fields
    createdBy: {type: String},
    updatedBy: {type: String},
    currentLocation: {type: String}, 

    image: { type: String, default: "https://via.placeholder.com/150" },
  },
  { timestamps: true }
);

userSchema.index({ email: 1 }, { unique: true });
userSchema.virtual("age").get(function(){
  if (!this.dateOfBirth) return null;
  const today = newDate();
  const birthDate = newDate(this.dateOfBirth);
  let age = today.getFullYear() - birthDate.getFullYear();
  const m = today.getMonth() - birthDate.getMonth();
  if(m < 0 || (m === 0 &&  today.getDate() < birthDate.getDate())){
    age--;
  }
  return age;
})

export const User = mongoose.model("User", userSchema);
