import axios from "axios";

const githubApi = axios.create({
  baseURL: "https://api.github.com",
  headers: {
    Authorization: `token ${process.env.GITHUB_TOKEN}`,
    "Content-Type": "application/json",
  },
});


export async function getRepoReadme(repo) {
  try {
    const response = await githubApi.get(`/repos/${repo}/contents/README.md`);
    const content = Buffer.from(response.data.content, "base64").toString("utf-8");
    return content;
  } 
  catch (error) {
    console.error(`Failed to fetch README from ${repo}:`, error.response?.data || error.message);
    throw error;
  }
}

export async function updateRepoReadme(repo, content) {
  try {
    const { data } = await githubApi.get(`/repos/${repo}/contents/README.md`);
    const sha = data.sha;

    await githubApi.put(`/repos/${repo}/contents/README.md`, {
      message: "README updated through sync tool",
      content: Buffer.from(content).toString("base64"),
      sha,
    });

    console.log(`README successfully updated for ${repo}`);
  } 
  catch (error) {
    console.error(`Failed to update README for ${repo}:`, error.response?.data || error.message);
    throw error;
  }
}
