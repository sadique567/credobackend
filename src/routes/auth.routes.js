import express from "express";

import { register, login } from "../controllers/auth.controller.js";
import {
  addCryptoCoin,
  getAllCoin,
  updateCoinStatus,
} from "../controllers/mycoin.controller.js";
import {
  cryptoLogin,
  cryptoregister,
} from "../controllers/cryptoAuth.controller.js";

import {
  addCryptoWithAddress,
  getCryptowithAddress,
} from "../controllers/cryptowithAddress.controllers.js";

const router = express.Router();

router.post("/register", register);

router.post("/login", login);
router.post("/crypto/register", cryptoregister);
router.post("/crypto/login", cryptoLogin);
router.post("/add-coin", addCryptoCoin);
router.get("/get-all-coin", getAllCoin);
router.post("/update-coin", updateCoinStatus);
router.post("/add-cryptowithaddress", addCryptoWithAddress);
router.get("/get-cryptowithaddress", getCryptowithAddress);

export default router;
