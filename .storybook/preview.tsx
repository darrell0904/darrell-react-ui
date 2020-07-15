import { configure, addDecorator, addParameters } from '@storybook/react';
import React, { Fragment } from 'react';
import { withInfo } from '@storybook/addon-info';
import "../src/styles/index.less";

const wrapperStyle: React.CSSProperties = {
  padding: '20px 40px'
}

// const storyWrapper = (stroyFn: any) => (
//   <div style={wrapperStyle}>
//     <h3>组件演示</h3>
//     {stroyFn()}
//   </div>
// )

addDecorator(withInfo);
addParameters({
  info: {
    inline: true,
    header: false,
    // propTablesExclude: [Fragment],
  }
});
// addDecorator(storyWrapper);

// const loaderFn = () => {
//   const allExports = [require('../src/welcome.stories.tsx')];
//   const req = require.context('../src/components', true, /\.stories\.tsx$/);
//   req.keys().forEach(fname => allExports.push(req(fname)));
//   return allExports;
// };

// automatically import all files ending in *.stories.js
// configure(loaderFn, module);