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
    text: `
      u 杜对对的宿敌啊数据帝萨蒂萨东 i 啊
  
      ~~~js
      <Button>的撒嗲司机嗲时间打死多级</Button>
      ~~~
    `,
    // propTablesExclude: [Fragment],
    styles: stylesheet => {
      console.log('----stylesheet---', stylesheet);
      return ({
        // Setting the style with a function
        ...stylesheet,
        infoBody: {
          ...stylesheet.infoBody,
          padding: '20px 40px 20px'
        },
        header: {
          ...stylesheet.header,
          h1: {
            ...stylesheet.header.h1,
            color: 'green',
          },
        },
      });
    },
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