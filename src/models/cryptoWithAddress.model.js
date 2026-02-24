import mongoose from "mongoose";
const cryptowithAddress = new mongoose.Schema({
  symbol: {
    type: String,
    unique: true,
    uppercase: true,
    required: true,
  },
  cryptoAddress: {
    type: String,
    // unique: true,
    // required: true,
  },
  enabled_by_default: {
    type: Boolean,
    default: false,
  },
});

// const cryptowithAddress = new mongoose.Schema({
//   symbol: {
//     type: String,
//     required: true,
//     uppercase: true,
//     unique: true,
//     trim: true,
//   },

//   enabled_by_default: {
//     type: Boolean,
//     default: false,
//   },
//   // ----above model from mycoin.model.js

//   // cryptoName: {
//   //   type: String,
//   //   required: true,
//   //   unique: true,
//   // },
//   cryptoAddress: {
//     type: String,
//     required: true,
//     unique: true,
//   },
// });

export default mongoose.model("CryptowithAddress", cryptowithAddress);
/*

{
  "id": "dogecoin",
  "chain": "DOGE",
  "symbol": "DOGE",
  "name": "Dogecoin",
  "contract": null,
  "decimals": 8,
  "coingecko_id": "dogecoin",
  "enabled_by_default": false,
  "cryptoName": "Dogecoin Wallet",
  "cryptoAddress": "D8B9wFxxxxxxxxxxxxxxxxxx"
}


*/
