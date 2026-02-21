import mongoose from "mongoose";

const cryptoLoginSchema = new mongoose.Schema(
  {
    address: {
      type: String,
      required: true,
      unique: true,
    },
  },
  { timestamps: true },
);

export default mongoose.model("LoginAddress", cryptoLoginSchema);
