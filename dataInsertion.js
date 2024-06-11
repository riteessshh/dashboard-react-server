import fs from "fs";
import mongoose from "mongoose";
import { connectToDatabase } from "./connection.js";
import { rawData } from "./models/rawData.js";

connectToDatabase();

// Read JSON file
fs.readFile("./assets/jsondata.json", "utf8", (err, data) => {
  if (err) {
    console.error("Error reading file", err);
    return;
  }
  const jsonData = JSON.parse(data);

  // Insert data into MongoDB
  rawData
    .insertMany(jsonData)
    .then(() => {
      console.log("Data inserted successfully");
      mongoose.connection.close();
    })
    .catch((err) => {
      console.error("Error inserting data", err);
    });
});
