import personModel, { IPerson } from "../models/personModel";
import organizationModel from "../models/organizationModel";
import dbSetup from "./dbSetup";
const personsList = require("../mocks/persons-data.json");

const getOrganizations = async () => {
  return organizationModel.find({});
};

const getPreparedPersonModel = (
  orgList: { name: string; _id: string }[]
): IPerson[] => {
  return personsList.map((person: typeof personsList[0], index: number) => {
    const matchedOrg = orgList.find(item => item.name === person.org_name);
    const organization_info = matchedOrg && matchedOrg._id;
    const personCopy = { ...person, ordering_id: index };
    delete personCopy.org_name;
    if (organization_info) {
      personCopy.organization_info = organization_info;
    }
    return personCopy;
  });
};

const tryToUpload = async (persons: IPerson[]) => {
  try {
    await personModel.insertMany(persons);
  } catch (e) {
    console.error(e);
  }
};

export const uploadPersons = async () => {
  try {
    const organizations = await getOrganizations();
    if (!organizations) {
      return;
    }
    const preparedList = getPreparedPersonModel(organizations as any);
    await tryToUpload(preparedList);
  } catch (e) {
    console.error(e);
  }
};
const main = async () => {
  dbSetup();
  try {
    await uploadPersons();
    console.log("💁 ‍data uploaded");
    process.exit(0);
  } catch (e) {
    console.error(e);
    process.exit(1);
  }
};

process.argv.includes("autorun") && main();
