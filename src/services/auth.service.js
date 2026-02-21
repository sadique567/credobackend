import User from "../models/user.model.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";


const register = async (body) => {
    const { name, email, password } = body;
    const userExist = await User.findOne({ email });
    if (userExist)
        throw new Error("User already exists");
    const hashPassword = await bcrypt.hash(password, 10);
    const user = await User.create({
        name,
        email,
        password: hashPassword
    });
    return user;
};



const login = async (body) => {
    const { email, password } = body;
    const user = await User.findOne({ email });
    if (!user)
        throw new Error("User not found");
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch)
        throw new Error("Invalid password");
    const token = jwt.sign(
        { id: user._id },
        process.env.JWT_SECRET,
        { expiresIn: "7d" }
    );
    return {
        user,
        token
    };
};

export default {
    register,
    login
};