import express from "express";
import registerUser from "../controllers/registerController.mjs";

const router = express.Router();

// router.route("/").post(registerUser);
router.post("/", registerUser);

export default router;