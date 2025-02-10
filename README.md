## GitHub README Sync Tool

This Node.js tool automates the process of syncing the `README.md` file between two GitHub repositories. It is designed to work seamlessly with **GitHub Actions**, allowing the synchronization process to run automatically whenever changes are pushed to the source repository.

### How It Works
1. The tool fetches the `README.md` file from the source repository.
2. It compares the content with the `README.md` file in the target repository.
3. If changes are detected, the tool updates the target repository's `README.md`.
