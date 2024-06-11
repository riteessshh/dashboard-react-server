import mongoose from "mongoose";
import dotenv from "dotenv";

// ------------------------- LOCAL SERVER ---------------------------------
// const connectionString = "mongodb://localhost:27017/world-data";
// export async function connectToDatabase(req, res) {
//   mongoose
//     .connect(connectionString)
//     .then(() => console.log("Connected to MongoDB"))
//     .catch((err) => console.error("Error connecting to MongoDB:", err));
// }

// -------------------------- ONLINE SERVER ---------------------------------
dotenv.config();
const databaseUrl = process.env.MONGO_URI;

export async function connectToDatabase(req, res) {
  mongoose
    .connect(databaseUrl)
    .then(() => {
      console.log("Connected to Mongodb");
    })
    .catch((err) => console.error("Error connecting to MongoDB:", err));
}
