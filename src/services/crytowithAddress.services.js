import CrytowithAddress from "../models/cryptoWithAddress.model.js";

const addCryptoWithAddress = async (body) => {
  const { symbol, cryptoAddress } = body;
  const cryptoWithAddressExist = await CrytowithAddress.findOne({
    symbol,
    cryptoAddress,
  });
  if (cryptoWithAddressExist) {
    throw new Error("This Coin Already Added");
  }
  const MyCreotiWithAddress =await CrytowithAddress.create({
    symbol,
    cryptoAddress,
  });
  return MyCreotiWithAddress;
};

const getCryptoWithAddress = async () => {
  const cryptoWithAddress = await CrytowithAddress.find({});
  return cryptoWithAddress;
};

export default { addCryptoWithAddress, getCryptoWithAddress };
