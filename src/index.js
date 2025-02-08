import "dotenv/config";
import { getRepoReadme, updateRepoReadme } from "./service.js";
import { hasReadmeChanged } from "./utils.js";

const SOURCE_REPO = process.env.SOURCE_REPO;
const TARGET_REPO = process.env.TARGET_REPO;

async function main() {
  try {
    const sourceReadme = await getRepoReadme(SOURCE_REPO);
    const targetReadme = await getRepoReadme(TARGET_REPO);

    if (hasReadmeChanged(targetReadme, sourceReadme)) {
      await updateRepoReadme(TARGET_REPO, sourceReadme);
    } 
    else {
      console.log("No changes detected. README is up to date.");
    }
  } 
  catch (error) {
    console.error(error);
  }
}

main();
