const fs = require("fs");
if (!fs.existsSync("dist")) return;
if (!fs.existsSync("dist/mocks")) {
  fs.mkdirSync("dist/mocks");
}

const mocks = ["organizations-data.json", "persons-data.json"];
mocks.forEach(mockName => {
  const dest = `dist/mocks/${mockName}`;
  if (!fs.existsSync(dest)) {
    fs.copyFileSync(`src/mocks/${mockName}`, dest);
  }
});
process.exit(0);
