import cryptowithAddresServices from "../services/crytowithAddress.services.js";
export const addCryptoWithAddress = async (req, res) => {
  try {
    const data = await cryptowithAddresServices.addCryptoWithAddress(req.body);
    console.log(`CryptoWithAdress ${data}`);
    res.json({
      status: "success",
      message: "Coin Added Successfully",
      data,
    });
  } catch (e) {
    res.status(400).json({
      status: "Failed",
      message: e.message,
    });
  }
};

export const getCryptowithAddress = async (req, res) => {
  try {
    const data = await cryptowithAddresServices.getCryptoWithAddress();
    res.json({
      status: "success",
      message: "Coin List Fetch Successfully",
      data,
    });
  } catch (e) {
    res.status(400).json({
      status: false,
      message: e.message,
    });
  }
};
