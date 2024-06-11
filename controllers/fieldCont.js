import { rawData } from "../models/rawData.js";

export async function getFieldsCountData(req, res) {
  console.log("HTTP GET request for all topics.");
  rawData
    .aggregate([
      {
        $group: {
          _id: "$pestle",
          count: { $sum: 1 },
        },
      },
    ])
    .then((results) => {
      //   console.log("Sector counts:", results);
      res.json(results);
    })
    .catch((err) => console.error("Error fetching sector counts:", err));
}
