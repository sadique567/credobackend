import Mycoin from "../models/mycoin.model.js";

const addCryptoCoin = async (body) => {
  const {
    id,
    chain,
    symbol,
    name,
    contract,
    decimals,
    coingecko_id,
    enabled_by_default,
  } = body;

  const coinExist = await Mycoin.findOne({
    id,
    chain,
    symbol,
    name,
  });

  if (coinExist) {
    throw new Error("This Coin Already Exist");
  }
  const myCoinData = await Mycoin.create({
    id,
    chain,
    symbol,
    name,
    contract,
    decimals,
    coingecko_id,
    enabled_by_default,
  });
  return myCoinData;
};

const getAllCoin = async () => {
  const coins = await Mycoin.find().sort({ createdAt: -1 });

  return coins;
};

export default {
  addCryptoCoin,
  getAllCoin,
};
