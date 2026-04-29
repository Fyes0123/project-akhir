import express from "express";
import { getUsers, createUser } from "../controllers/userController.js";

const router = express.Router();

router.get("/", getUsers); //fetch users
router.post("/", createUser);  //add user

export default router;