import { rawData } from "../models/rawData.js";

export async function getAllData(req, res) {
  console.log("HTTP GET request for all data.");
  rawData
    .find({}) // Find all documents in the collection
    .then((data) => {
      res.json(data);
    })
    .catch((err) => console.error("Error fetching data:", err));
}
