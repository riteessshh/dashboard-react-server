import { rawData } from "../models/rawData.js";

export async function getSelectedFieldData(req, res) {
  const field = req.params.key;
  console.log("List is fetched for", field);
  rawData
    .find({ field: { $ne: "" } })
    .distinct(field)
    .then((item) => {
      res.json(item);
    })
    .catch((err) => {
      console.error("Error in fetching:", err);
    });
}
