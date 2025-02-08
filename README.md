## GitHub README Sync Tool
This Node.js tool automates the process of syncing the README.md file between two GitHub repositories.

It fetches the source README, compares it with the target repository's README, and updates the target repository if any changes are detected.

### Features
- Fetches and updates the README file using GitHub's REST API.
- Automatically handles base64 encoding/decoding of file contents.
- Prevents accidental overwrites by verifying the file's sha.