import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import { connectToDatabase } from "./connection.js";
import dataRoute from "./routes/dataRoute.js";
import listRoute from "./routes/listRoute.js";

const app = express();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
connectToDatabase();

app.use("/", dataRoute);
app.use("/list", listRoute);

app.listen(3000, () => {
  console.log("Server is running at PORT 3000.");
});
