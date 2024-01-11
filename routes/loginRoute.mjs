import express from "express";
import userLogin from "../controllers/loginController.mjs";

const router = express.Router();

// router.route("/").post(userLogin);
router.post("/", userLogin);

export default router;