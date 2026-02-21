import cryptoAuthServices from "../services/cryptoAuth.service.js";

export const cryptoregister = async (req, res) => {
  try {
    const data = await cryptoAuthServices.cryptoRegister(req.body);
    res.json({
      status: true,
      message: "Registration Done",
      data,
    });
  } catch (error) {
    res.status(400).json({
      status: false,
      message: error.message,
    });
  }
};

//========LoginCrypto==============
export const cryptoLogin = async (req, res) => {
  try {
    const data = await cryptoAuthServices.cryptoLogin(req.body);
    res.json({
      status: true,
      message: "Login Done",
      data,
    });
  } catch (error) {
    res.status(400).json({
      status: false,
      message: error.message,
    });
  }
};
