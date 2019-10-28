import * as express from "express";
import * as bodyParser from "body-parser";
import * as cors from "cors";
import dbSetup from "./data-setup/dbSetup";
import personsRoute from "./routes/persons";
import organizationsRoute from "./routes/organizations";

const app = express();

dbSetup();

app.use(cors());
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.status(403);
});

// routes
app.use(personsRoute);
app.use(organizationsRoute);

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Server is running in http://localhost:${PORT}`);
});
