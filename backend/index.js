import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import * as dotenv from "dotenv";
import { ConnectDB } from "./mongoDb/connectDb.js";

import FormRoutes from "./routes/RegistrationForm.js";

dotenv.config();

const app = express();

app.use(bodyParser.json());
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("App");
});

app.use("/form", FormRoutes);

app.use((error, req, res, next) => {
  const status = error.status || 500;
  const message = error.message || "Something went wrong.";
  res.status(status).json({ message: message });
});

const startServer = () => {
  try {
    ConnectDB(process.env.MONGODB_URL);
    app.listen(8000, () => {
      console.log("http://localhost:8000");
    });
  } catch (error) {
    console.log(error);
  }
};

startServer();
