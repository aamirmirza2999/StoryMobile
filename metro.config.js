const { getDefaultConfig, mergeConfig } = require('@react-native/metro-config');
const withStorybook = require('@storybook/react-native/metro/withStorybook');

/**
 * Metro configuration
 * https://reactnative.dev/docs/metro
 *
 * @type {import('metro-config').MetroConfig}
 */
const defaultConfig = getDefaultConfig(__dirname); // Get the default configuration

// Wrap the default config with the Storybook enhancer
const config = withStorybook(defaultConfig);

module.exports = mergeConfig(defaultConfig, config);
