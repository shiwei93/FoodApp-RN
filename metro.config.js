/**
 * Metro configuration for React Native
 * https://github.com/facebook/react-native
 *
 * @format
 */
const { getDefaultConfig } = require('metro-config');
const MetroSymlinksResolver = require('@rnx-kit/metro-resolver-symlinks');

module.exports = (async () => {
    const {
        resolver: { sourceExts, assetExts },
    } = await getDefaultConfig();
    return {
        transformer: {
            babelTransformerPath: require.resolve('react-native-svg-transformer'),
            getTransformOptions: async () => ({
                transform: {
                    experimentalImportSupport: false,
                    inlineRequires: true,
                },
            }),
        },
        resolver: {
            resolveRequest: MetroSymlinksResolver(),
            assetExts: assetExts.filter(ext => ext !== 'svg'),
            sourceExts: [...sourceExts, 'svg'],
        },
    };
})();
