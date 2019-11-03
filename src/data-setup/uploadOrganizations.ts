import organizationModel from "../models/organizationModel";
import dbSetup from "./dbSetup";
const orgList = require("../mocks/organizations-data.json");

export const uploadOrganizations = async () => {
  try {
    const res = await organizationModel.insertMany(orgList);
    console.log("💁 ‍data uploaded", res);
  } catch (e) {
    console.error(e);
    process.exit(1);
  }
};
const main = async () => {
  dbSetup();
  await uploadOrganizations();
  process.exit(0);
};

process.argv.includes("autorun") && main();
