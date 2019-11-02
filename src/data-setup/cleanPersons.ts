import personModel from "../models/personModel";
import dbSetup from "./dbSetup";

export const cleanPersons = async () => {
  try {
    const res = await personModel.deleteMany({});
    console.log("persons cleaned", res);
  } catch (e) {
    console.error(e);
    process.exit(1);
  }
};

const main = async () => {
  dbSetup();
  await cleanPersons();
  process.exit(0);
};

main();
