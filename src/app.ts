import * as express from "express";
import * as mongoose from "mongoose";
import personsRoute from "./routes/persons";
import * as bodyParser from "body-parser";
require("dotenv").config();

const app = express();

app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send("Hello World");
});

// routes
app.use(personsRoute);

const dbUrl = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_URL}/test?retryWrites=true&w=majority`;
const dbOptions = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  dbName: "personListApp"
};
console.log(dbUrl);
mongoose
  .connect(dbUrl, dbOptions, () => {
    console.log("DB connected");
  })
  .catch(error => console.error(error));

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function() {
  // we're connected!
});

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Server is running in http://localhost:${PORT}`);
});
