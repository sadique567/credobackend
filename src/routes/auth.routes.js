import express from "express";

import { register, login } from "../controllers/auth.controller.js";
import { addCryptoCoin, getAllCoin } from "../controllers/mycoin.controller.js";
import {
  cryptoLogin,
  cryptoregister,
} from "../controllers/cryptoAuth.controller.js";

const router = express.Router();

router.post("/register", register);

router.post("/login", login);
router.post("/crypto/register", cryptoregister);
router.post("/crypto/login", cryptoLogin);

router.post("/add-coin", addCryptoCoin);

router.get("/get-all-coin", getAllCoin);

export default router;
