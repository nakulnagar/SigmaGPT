import express from "express";
import "dotenv/config";
import cors from "cors";
import { GoogleGenAI } from "@google/genai";
import mongoose from "mongoose";
import chatRoutes from "./routes/chat.js";

const app = express();
const PORT = 8080;

app.use(express.json());
app.use(cors());

app.use("/api", chatRoutes);

const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY,
});

app.listen(PORT, () => {
  console.log(`Server running on ${PORT}`);
  connectDB();
});

const connectDB = async() => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("connected with Database!");
  } catch(err) {
    console.log("Failed to connect with DB", err);
  }
}

// app.post("/test", async (req, res) => {
//   try {
//     const { message } = req.body;

//     const response = await fetch(
//       `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${process.env.GEMINI_API_KEY}`,
//       {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({
//           contents: [
//             {
//               parts: [
//                 {
//                   text: message,
//                 },
//               ],
//             },
//           ],
//         }),
//       }
//     );

//     const data = await response.json();

//     res.send(data.candidates[0].content.parts[0].text);
//   } catch (err) {
//     console.error(err);
//     res.status(500).send("Something went wrong");
//   }
// });