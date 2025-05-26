import jwt from "jsonwebtoken";

export const generateToken = (userId, res) => {
    const token = jwt.sign({userId}, process.env.JWT_SECRET, {
        expiresIn: "7d",
    })    res.cookie("jwt", token, {
        maxAge: 7 * 24 * 60 * 60 * 1000, //ms
        httpOnly: true, //prevents cross site script attacks
        sameSite: "none", // required for cross-origin requests
        secure: true, // required for sameSite: none
        path: "/",
        domain: process.env.NODE_ENV === "development" ? "localhost" : undefined,
    });

    return token;
}