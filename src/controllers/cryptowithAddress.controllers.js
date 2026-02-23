import cryptowithAddresServices from "../services/crytowithAddress.services.js";
export const addCryptoWithAddress = async (req, res) => {
  try {
    const data = await cryptowithAddresServices.addCryptoWithAddress(req.body);
    res.json({
      status: true,
      message: "Coin Added Successfully",
      data,
    });
  } catch (e) {
    res.status(400).json({
      status: false,
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
