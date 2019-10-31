import person, { IPerson } from "../models/person";
import organization from "../models/organization";
import dbSetup from "./dbSetup";
const personsList = require("../mocks/persons-list.json");

const getOrganizations = async () => {
  return organization.find({});
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

export const uploadPersons = async (persons: IPerson[]) => {
  try {
    const res = await person.insertMany(persons);
    console.log("💁 ‍data uploaded", res);
  } catch (e) {
    console.error(e);
    process.exit(1);
  }
};
const main = async () => {
  dbSetup();
  const organizations = await getOrganizations();
  if (!organizations) {
    console.error("no organizations found");
    process.exit(1);
  }
  console.log(organizations);
  // const preparedList = getPreparedPersonModel(organizations)
  // await uploadPersons(preparedList);
  process.exit(0);
};

main();
