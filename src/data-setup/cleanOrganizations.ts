import organizationModel from "../models/organizationModel";
import dbSetup from "./dbSetup";

export const cleanOrganizations = async () => {
  try {
    const res = await organizationModel.deleteMany({});
    console.log("organizations cleaned", res);
  } catch (e) {
    console.error(e);
    process.exit(1);
  }
};

const main = async () => {
  dbSetup();
  await cleanOrganizations();
  process.exit(0);
};

process.argv.includes("autorun") && main();
