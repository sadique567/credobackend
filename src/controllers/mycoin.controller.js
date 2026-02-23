// controllers/myCoin.controller.js

import cryptoAuthService from "../services/myCoin.service.js";

export const addCryptoCoin = async (req, res) => {
  try {
    const data = await cryptoAuthService.addCryptoCoin(req.body);

    res.json({
      status: true,
      message: "Coin Added Successfully",
      data,
    });
  } catch (err) {
    res.status(400).json({
      status: false,
      message: err.message,
    });
  }
};

export const getAllCoin = async (req, res) => {
  try {
    const data = await cryptoAuthService.getAllCoin();

    res.json({
      status: "success",
      message: "Coin List Fetch Successfully",
      data,
    });
  } catch (err) {
    res.status(400).json({
      status: false,
      message: err.message,
    });
  }
};
