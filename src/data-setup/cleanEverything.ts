import dbSetup from "./dbSetup";
import { cleanPersons } from "./cleanPersons";
import { cleanOrganizations } from "./cleanOrganizations";

const main = async () => {
  dbSetup();
  try {
    await cleanPersons();
    await cleanOrganizations();
    console.log("Cleaned");
    process.exit(0);
  } catch (e) {
    console.error(e);
    process.exit(1);
  }
};

main();
