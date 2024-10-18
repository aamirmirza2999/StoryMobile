module.exports = async ({ config }) => {
    console.log('Original Webpack config:', config);
  
    // Modify the config
    config.resolve.alias = {
      ...(config.resolve.alias || {}),
      'react-native$': 'react-native-web',
    };
  
    config.resolve.extensions.push('.web.js', '.web.ts', '.web.tsx');
  
    console.log('Modified Webpack config:', config);
  
    return config;
  };
  