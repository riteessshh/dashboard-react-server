import { rawData } from "../models/rawData.js";

// .find({}, specificFields) // Find all documents and project specific fields
//     .then((data) => {
//       //   console.log("Data with specific fields:", data);
//       res.json(data);
//     });

export async function getCountryRelatedData(req, res) {
  console.log("HTTP GET request for all country related data.");

  rawData
    .aggregate([
      {
        $group: {
          _id: "$country",
          data: {
            $push: {
              title: "$title",
              topic: "$topic",
              region: "$region",
            },
          },
        },
      },
    ])
    .then((results) => {
      const dataByCountry = {};
      results.forEach((item) => {
        dataByCountry[item._id] = item.data;
      });
      //   console.log("Data by country:", dataByCountry);
      res.json(dataByCountry);
    })
    .catch((err) => console.error("Error fetching data by country:", err));
}
