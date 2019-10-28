import OrganizationModel, { IOrganization } from "../models/organization";
import dbSetup from "./dbSetup";
const orgList = require("../mocks/organizations-data.json");

const uploadOrganizations = async (orgList: IOrganization[]) => {
  try {
    const res = await OrganizationModel.insertMany(orgList);
    console.log("💁 ‍data uploaded", res);
    process.exit(0);
  } catch (e) {
    console.error(e);
    process.exit(1);
  }
};

dbSetup();
uploadOrganizations(orgList);
