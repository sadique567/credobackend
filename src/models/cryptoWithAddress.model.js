import mongoose from "mongoose";

const cryptowithAddress = new mongoose.Schema({
  cryptoName: {
    type: String,
    required: true,
    unique: true,
  },
  cryptoAddress: {
    type: String,
    required: true,
    unique: true,
  },
});

export default mongoose.model("CryptowithAddress", cryptowithAddress);
