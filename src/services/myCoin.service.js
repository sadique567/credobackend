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

const updateCoinStatus = async (body) => {

  // console.log("BODY:", body);

  const coin = await Mycoin.findOneAndUpdate(
    { symbol: body.symbol.toUpperCase() },
    { $set: { enabled_by_default: body.enabled_by_default } },
    { returnDocument: "after" }
  );

  // console.log("UPDATED:", coin);

  if (!coin) {
    throw new Error("Coin not found");
  }

  return coin;
};




export default {
  addCryptoCoin,
  getAllCoin,
  updateCoinStatus,
};
