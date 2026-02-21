import express from "express";

import { register, login } from "../controllers/auth.controller.js";

import {
  cryptoLogin,
  cryptoregister,
} from "../controllers/cryptoAuth.controller.js";

const router = express.Router();

router.post("/register", register);

router.post("/login", login);
router.post("/crypto/register", cryptoregister);
router.post("/crypto/login", cryptoLogin);

export default router;
