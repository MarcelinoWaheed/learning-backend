import asyncFnWrap from "../middleware/asyncFnWrap.js";
import User from "../models/userModel.js";
import APIError from "../utils/APIError.js";
import generateToken from "../utils/generateToken.js";
import TextStatus from "../utils/httpStatus.js";
import bcrypt from "bcrypt";

// get all
export const getallusers = asyncFnWrap(async (req, res) => {
    const query = req.query;
    const limit = query.limit || 3;
    const page = query.page || 1;
    const skip = (page - 1) * limit;

    const users = await User.find().limit(limit).skip(skip);
    res.status(TextStatus.OK).json({ success: true, users });
});

// register
export const register = asyncFnWrap(async (req, res) => {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
        const error = new APIError.create("Fill all", false, TextStatus.BAD_REQUEST);
        return next(error);
    }

    const existingUser = await User.findOne({ email });
    if (existingUser) {
        const error = new APIError.create("User Already Exist", false, TextStatus.BAD_REQUEST);
        return next(error);
    }

    const newuser = new User({
        name,
        email,
        password,
        role
    });

    const token = generateToken({
        email: newuser.email,
        id: newuser._id,
        role: newuser.role
    });

    newUser.token = token;

    await newuser.save();
    return res.status(TextStatus.CREATED).json({ status: TextStatus.SUCCESS, data: { user: newUser, token } });
});

// login
export const login = asyncFnWrap(async (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
        const error = APIError.create("Fill All The Inputs", false, TextStatus.BAD_REQUEST);
        return next(error);
    }

    const user = await User.findOne({ email });

    if (!user) {
        const error = APIError.create("User Not Found", false, TextStatus.BAD_REQUEST);
        return next(error);
    }

    const Are_you_trolling_me = await User.findOne({ email });// بشوفه معانا ولا علينا 

    if (!Are_you_trolling_me) {
        const error = APIError.create("User Not Found", false, 404);
        return next(error);
    }

    const isMatched = await bcrypt.compare(password, user.password);

    if (!isMatched) {
        const error = APIError.create("Invalid Credentials", 400, TextStatus.FAIL);
        return next(error);
    }

    const token = generateToken({
        email: user.email,
        id: user._id,
        role: user.role
    })

    user.token = token;

    await user.save();

    return res.status(TextStatus.OK).json({ message: "Login Successfully", data: { user, token } });
});