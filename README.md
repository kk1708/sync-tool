## GitHub README Sync Tool

This Node.js tool automates the process of syncing the `README.md` file between two GitHub repositories. It is designed to work seamlessly with **GitHub Actions**, allowing the synchronization process to run automatically whenever changes are pushed to the source repository.

### How It Works
1. The tool fetches the `README.md` file from the source repository.
2. It compares the content with the `README.md` file in the target repository.
3. If changes are detected, the tool updates the target repository's `README.md`.
4. New line

### Features
- Fetches and updates the README file using GitHub's REST API.
- Automatically handles base64 encoding/decoding of file contents.
- Prevents accidental overwrites by verifying the file's `sha`.
- Runs automatically through **GitHub Actions** when the source README is updated.

### Automation with GitHub Actions
This tool is configured to run as part of a GitHub Actions workflow. The workflow triggers whenever a change is pushed to the source repository's `README.md` file. This ensures that the target repository is always kept up to date without manual intervention.
