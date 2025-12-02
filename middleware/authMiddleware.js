import APIError from "../utils/APIError.js";
import jwt from "jsonwebtoken";
import TextStatus from "../utils/httpStatus.js";

export const verifyToken = (req, res, next) => {
    const authHeader = req.header("Authorization") || req.header("authorization");

    if (!authHeader) {
        const error = new APIError.create("Unauthorized", false, TextStatus.UNAUTHORIZED);
        return next(error);
    }

    const token = authHeader.split(" ")[1];

    if (!token) {
        const error = new APIError.create("Unauthorized", false, TextStatus.UNAUTHORIZED);
        return next(error);
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);
        req.user = decoded;
        next();
    } catch (err) {
        const error = new APIError.create("Unauthorized", false, TextStatus.UNAUTHORIZED);
        return next(error);
    }
};

export const allowedTo = (...roles) => {
    return (req, res, next) => {
        if (!roles.includes(req.user?.role)) {
            return next(APIError.create("This Role Is Not Authorized", TextStatus.FORBIDDEN, "fail"));
        }
        next();
    };
};