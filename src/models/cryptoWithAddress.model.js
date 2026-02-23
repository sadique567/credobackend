import mongoose from "mongoose";

const cryptowithAddress = new mongoose.Schema({
  id: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },

  chain: {
    type: String,
    required: true,
    trim: true,
  },

  symbol: {
    type: String,
    required: true,
    uppercase: true,
    trim: true,
  },

  name: {
    type: String,
    required: true,
    trim: true,
  },

  contract: {
    type: String,
    default: null,
  },

  decimals: {
    type: Number,
    default: 8,
  },

  coingecko_id: {
    type: String,
    required: true,
    unique: true,
  },

  enabled_by_default: {
    type: Boolean,
    default: false,
  },
  // ----above model from mycoin.model.js

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
