import * as mongoose from "mongoose";
require("dotenv").config();

const dbSetup = () => {
  const dbUrl = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_URL}/test?retryWrites=true&w=majority`;
  const dbOptions = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    dbName: "personListApp"
  };

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
};

export default dbSetup;
