import express from "express";

import { getPeoples, addPerson } from "../controllers/people.js";

const router = express.Router();

//localhost:5000/posts
router.get("/", getPeoples);
router.post("/", addPerson);
//router.patch("/:id", updateUser);
//router.post("/signin", signin);
//router.post("/signup", signup);

export default router;