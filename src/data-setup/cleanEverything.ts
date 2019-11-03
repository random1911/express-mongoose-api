import dbSetup from "./dbSetup";
import { clearPersons } from "./clearPersons";
import { cleanOrganizations } from "./cleanOrganizations";

const main = async () => {
  dbSetup();
  try {
    await clearPersons();
    await cleanOrganizations();
    console.log("Cleaned");
    process.exit(0);
  } catch (e) {
    console.error(e);
    process.exit(1);
  }
};

main();
