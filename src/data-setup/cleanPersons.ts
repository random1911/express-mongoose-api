import person from "../models/person";
import dbSetup from "./dbSetup";

export const deletePersons = async () => {
  try {
    const res = await person.deleteMany({});
    console.log("persons cleaned", res);
  } catch (e) {
    console.error(e);
    process.exit(1);
  }
};

const main = async () => {
  dbSetup();
  await deletePersons();
  process.exit(0);
};

main();
