import OrganizationModel, { IOrganization } from "../models/organization";
import dbSetup from "./dbSetup";
const orgList = require("../mocks/organizations-data.json");

export const uploadOrganizations = async (orgList: IOrganization[]) => {
  try {
    const res = await OrganizationModel.insertMany(orgList);
    console.log("💁 ‍data uploaded", res);
  } catch (e) {
    console.error(e);
    process.exit(1);
  }
};
const main = async () => {
  dbSetup();
  await uploadOrganizations(orgList);
  process.exit(0);
};

main();
