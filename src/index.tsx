import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Button, Menu } from './components';

const MenuItem = Menu.Item;
const SubMenu = Menu.SubMenu;

ReactDOM.render(
  <React.StrictMode>
    <Button size="lg"> large button </Button>
    <Button size="sm"> small button </Button>
    <Button btnType="primary"> primary button </Button>
    <Button btnType="danger"> danger button </Button>
    <Button btnType="link" href="https://google.com"> link button </Button>

    <Menu mode="vertical">
      <MenuItem>
        active
      </MenuItem>
      <MenuItem disabled>
        disabled
      </MenuItem>
      <MenuItem>
        xyz
      </MenuItem>
      <SubMenu title="dropdown">
        <MenuItem>
          drop1
        </MenuItem>
      </SubMenu>
      <SubMenu title="opened">
        <MenuItem>
          opened1
        </MenuItem>
      </SubMenu>
    </Menu>

  </React.StrictMode>,
  document.getElementById('root')
);
