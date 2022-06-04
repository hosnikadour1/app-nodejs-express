import express from "express";

import { getPeople, addPerson } from "../controllers/people.js";

const router = express.Router();
//localhost:5000/posts
router.get("/", getPeople);
router.post("/", addPerson);
//router.patch("/:id", modifyPerson);

export default router;