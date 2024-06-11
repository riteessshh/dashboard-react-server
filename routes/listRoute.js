import express from "express";

import { getSelectedFieldData } from "../controllers/uniqueFieldCont.js";

const router = express.Router();

router.get("/:key", getSelectedFieldData);

export default router;
