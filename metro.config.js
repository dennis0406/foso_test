const { getDefaultConfig, mergeConfig } = require('@react-native/metro-config');
const {
  wrapWithReanimatedMetroConfig,
} = require('react-native-reanimated/metro-config');

/**
 * Metro configuration
 * https://reactnative.dev/docs/metro
 *
 * @type {import('@react-native/metro-config').MetroConfig}
 */
const customConfig = {
  resolver: {
    assetExts: ['png', 'jpg', 'jpeg', 'gif', 'svg', 'ttf', 'otf'],
  },
};

const svgConfig = {
  transformer: {
    babelTransformerPath: require.resolve('react-native-svg-transformer'),
  },
  resolver: {
    assetExts: (getDefaultConfig(__dirname).resolver.assetExts || []).filter(
      ext => ext !== 'svg'
    ),
    sourceExts: [
      ...(getDefaultConfig(__dirname).resolver.sourceExts || []),
      'svg',
    ],
  },
};

const baseConfig = getDefaultConfig(__dirname);
const mergedConfig = mergeConfig(
  baseConfig,
  mergeConfig(customConfig, svgConfig)
);

module.exports = wrapWithReanimatedMetroConfig(mergedConfig);