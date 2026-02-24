// controllers/myCoin.controller.js

import cryptoAuthService from "../services/myCoin.service.js";

export const addCryptoCoin = async (req, res) => {
  try {
    console.log(`console ${req.body}`); // adding and test
    const data = await cryptoAuthService.addCryptoCoin(req.body);

    res.json({
      status: "success",
      message: "Coin Added Successfully",
      data,
    });
  } catch (err) {
    res.status(400).json({
      status: "failed",
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
      status: "failed",
      message: err.message,
    });
  }
};

export const updateCoinStatus = async (req, res) => {
  try {
    const data = await cryptoAuthService.updateCoinStatus(req.body);

    res.json({
      status: "success",
      message: "Coin Status Updated Successfully",
      data,
    });
  } catch (err) {
    res.status(400).json({
      status: "failed",
      message: err.message,
    });
  }
};
