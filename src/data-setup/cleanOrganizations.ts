import organization from "../models/organization";
import dbSetup from "./dbSetup";

export const cleanOrganizations = async () => {
  try {
    const res = await organization.deleteMany({});
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

main();
