import express from "express";
import { getAllData } from "../controllers/dataCont.js";
import { getFieldsCountData } from "../controllers/fieldCont.js";
import { getCountryRelatedData } from "../controllers/countryCont.js";

const router = express.Router();

router.get("/", (req, res) => {
  res.send("Welcome Here!!!");
});

router.get("/data", getAllData);

router.get("/fields", getFieldsCountData);

router.get("/countryData", getCountryRelatedData);

export default router;
