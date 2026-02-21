import jwt from "jsonwebtoken";
import LoginAddress from "../models/cryptoLogin.model.js";

const cryptoRegister = async (body) => {
  const { address } = body;
  const addressExist = await LoginAddress.findOne({ address });
  if (addressExist) {
    throw new Error("This Phrase Already Exist");
  }
  const phrase = await LoginAddress.create({ address });
  return phrase;
};

// ------------Crypoto Login-------------------

const cryptoLogin = async (body) => {
  const { address } = body;
  const addressFind = await LoginAddress.findOne({ address });
  if (!addressFind) {
    throw new Error("Please Register...");
  }
  // const isMatch =
  const token = jwt.sign({ id: LoginAddress._id }, process.env.JWT_SECRET, {
    expiresIn: "7d",
  });
  return {
    address: addressFind.address,
    token,
  };
};

export default {
  cryptoRegister,
  cryptoLogin,
};
