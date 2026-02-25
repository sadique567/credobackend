import CrytowithAddress from "../models/cryptoWithAddress.model.js";

const addCryptoWithAddress = async (body) => {
  const { symbol, cryptoAddress, enabled_by_default } = body;

  // 🔥 Check if symbol already exists
  const symbolExist = await CrytowithAddress.findOne({
    symbol: symbol.toUpperCase(),
  });

  if (symbolExist) {
    throw new Error("This coin already exists");
  }

  // 🔥 Check if address already exists (optional but recommended)
  const addressExist = await CrytowithAddress.findOne({
    symbol,
  });

  if (addressExist) {
    throw new Error("This address already exists");
  }

  // ✅ Create new coin
  const data = await CrytowithAddress.create({
    symbol: symbol.toUpperCase(),
    enabled_by_default,
    cryptoAddress,
  });

  return data;
};

// export default { addCryptoWithAddress };

// const addCryptoWithAddress = async (body) => {
//   const { symbol, cryptoAddress } = body;
//   const cryptoWithAddressExist = await CrytowithAddress.findOne({
//     symbol,
//     cryptoAddress,
//   });
//   if (cryptoWithAddressExist) {
//     throw new Error("This Coin Already Added");
//   }
//   const MyCreotiWithAddress =await CrytowithAddress.create({
//     symbol,
//     cryptoAddress,
//   });
//   return MyCreotiWithAddress;
// };

// ------------Update Status----------------
const updateCryptoWithAddressStatus = async (body) => {
  // console.log("BODY:", body);

  const status = await CrytowithAddress.findOneAndUpdate(
    { symbol: body.symbol.toUpperCase() },
    { $set: { enabled_by_default: body.enabled_by_default } },
    { returnDocument: "after" },
  );

  if (!status) {
    throw new Error("CryptoWithAddress not found");
  }

  return status;
};

// ------------GET --------------
const getCryptoWithAddress = async () => {
  const cryptoWithAddress = await CrytowithAddress.find({});
  return cryptoWithAddress;
};

export default {
  addCryptoWithAddress,
  updateCryptoWithAddressStatus,
  getCryptoWithAddress,
};
