import { configure, addDecorator, addParameters } from '@storybook/react';
import React, { Fragment } from 'react';
import { withInfo } from '@storybook/addon-info';
import "../src/styles/storybook.less";

const wrapperStyle: React.CSSProperties = {
  padding: '20px 0px'
}

const storyWrapper = (stroyFn: any) => (
  <div style={wrapperStyle}>
    <h3>组件演示</h3>
    {stroyFn()}
  </div>
)

addDecorator(storyWrapper);

const Red = (props: any) => <span style={{ color: 'red' }} {...props} />;

const TableComponent = ({ propDefinitions } : any) => {
  const props = propDefinitions.map(
    ({ property, propType, required, description, defaultValue }: any) => {
      return (
        <tr key={property}>
          <td>
            {property}
            {required ? <Red>*</Red> : null}
          </td>
          <td className={`${ propType.name ? 'info-table-monospace' : ''}`}>{propType.name}</td>
          <td className={`${ propType.name ? 'info-table-monospace' : ''}`}>{defaultValue}</td>
          <td className={`${ propType.name ? 'info-table-monospace' : ''}`}>{description}</td>
        </tr>
      );
    }
  );
 
  return (
    <table className="info-table">
      <thead>
        <tr>
          <th>name</th>
          <th>type</th>
          <th>default</th>
          <th>description</th>
        </tr>
      </thead>
      <tbody>{props}</tbody>
    </table>
  );
};

addDecorator(withInfo);
addParameters({
  info: {
    inline: true,
    header: false,
    // TableComponent,
  }
});

// const loaderFn = () => {
//   const allExports = [require('../src/welcome.stories.tsx')];
//   const req = require.context('../src/components', true, /\.stories\.tsx$/);
//   req.keys().forEach(fname => allExports.push(req(fname)));
//   return allExports;
// };

// automatically import all files ending in *.stories.js
// configure(loaderFn, module);