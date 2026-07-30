import awesomeLint from 'awesome-lint';
import defaultConfig from 'awesome-lint/config.js';

const githubRuleName = 'remark-lint:awesome-github';

// The GitHub metadata rule reads the default branch through the API. Excluding
// only that rule prevents a license added by a pull request from creating a
// bootstrap failure while preserving all Markdown and Awesome List checks.
const structuralConfig = defaultConfig.filter((configuredPlugin) => {
  const plugin = Array.isArray(configuredPlugin)
    ? configuredPlugin[0]
    : configuredPlugin;

  return plugin?.name !== githubRuleName;
});

const files = await awesomeLint({
  config: structuralConfig,
  filename: 'README.md',
});
const messages = files.flatMap((file) => file.messages);

if (messages.length > 0) {
  for (const message of messages) {
    console.error(message.toString());
  }

  process.exitCode = 1;
} else {
  console.log('Awesome List structural validation passed.');
}
