import personModel from "../models/personModel";
import dbSetup from "./dbSetup";

export const clearPersons = async () => {
  try {
    await personModel.deleteMany({});
  } catch (e) {
    console.error(e);
  }
};

const main = async () => {
  dbSetup();
  await clearPersons();
  console.log("persons cleaned");
  process.exit(0);
};

process.argv.includes("autorun") && main();
