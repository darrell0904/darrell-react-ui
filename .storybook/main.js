const path = require('path');

module.exports = {
  stories: ['../src/**/*.stories.tsx'],
  addons: [
    {
      // issure: https://github.com/storybookjs/storybook/issues/9796
      name: '@storybook/preset-create-react-app',
      options: {
        craOverrides: {
          fileLoaderExcludes: ['less'],
        },
      },
    },
    '@storybook/addon-actions',
    '@storybook/addon-links',
  ],
  webpackFinal: async config => {
    config.module.rules.push({
      test: /\.tsx?$/,
      use: [
        {
          loader: require.resolve("babel-loader"),
          options: {
            presets: [['react-app', { flow: false, typescript: true }]],
          }
        }, 
        {
          loader: require.resolve("react-docgen-typescript-loader"),
          options: {
            shouldExtractLiteralValuesFromEnum: true,
            propFilter: (prop) => {
              console.log('----props---', prop);
              if (prop.parent) {
                return !prop.parent.fileName.includes('node_modules');
              }
              return true;
            }
          }
        }
      ]
    });

    config.module.rules.push({
      test: /\.less$/,
      use: ['style-loader', 'css-loader', 'less-loader'],
      include: path.resolve(__dirname, '../src/'),
    });

    config.resolve.extensions.push(".ts", ".tsx");

    return config;
  },
};
