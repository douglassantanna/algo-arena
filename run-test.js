const { execSync } = require("child_process");
const fs = require("fs");
const path = require("path");

const testName = process.argv[2];

if (!testName) {
  console.log("Please provide a test name");
  process.exit(1);
}

const testDir = path.join(__dirname, "problems");

const testFile = fs
  .readdirSync(testDir)
  .find((file) => file.includes(testName) && file.endsWith(".test.ts"));
if (!testFile) {
  console.error(`No test file found for: ${testFile}`);
  process.exit(1);
}

const testFilePath = path.join(testDir, testFile);
execSync(`npx jest ${testFilePath}`, { stdio: "inherit" });
