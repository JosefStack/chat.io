import express from "express";

const authRouter = express.Router();

const signupController = (req, res) => {
    res.send("Singup endpoint");
};

const loginController = (req, res) => {
    res.send("Login endpoint");
};

const logoutController = (req, res) => {
    res.send("Lo;gout endpoint");
}       

authRouter.get("/signup", signupController);

authRouter.get("/login", loginController);

authRouter.get("/logout", logoutController);

export default authRouter;

