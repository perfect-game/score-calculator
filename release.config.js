module.exports = {
  branches: ["main"],
  plugins: [
    "@semantic-release/commit-analyzer",
    "@semantic-release/release-notes-generator",
    "@semantic-release/changelog",
    "@semantic-release/npm",
    "@semantic-release/git",
    ["@semantic-release/github", {
      successComment: "This ${issue.pull_request ? 'PR is included' : 'issue has been resolved'} in "
        + "[version ${nextRelease.version}](${releases.filter(release => /github\.com/i.test(release.url))[0].url})",
    }],
    ["@semantic-release/exec", {
      successCmd: 'echo "RELEASE_VERSION=${nextRelease.version}" >> $GITHUB_ENV',
    }],
  ],
};
