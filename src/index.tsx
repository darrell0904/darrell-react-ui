import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Button, Menu } from './components';

const MenuItem = Menu.Item;

ReactDOM.render(
  <React.StrictMode>
    <Button size="lg"> large button </Button>
    <Button size="sm"> small button </Button>
    <Button btnType="primary"> primary button </Button>
    <Button btnType="danger"> danger button </Button>
    <Button btnType="link" href="https://google.com"> link button </Button>

    <Menu>
      <MenuItem>
        active
      </MenuItem>
      <MenuItem disabled>
        disabled
      </MenuItem>
      <MenuItem>
        xyz
      </MenuItem>
    </Menu>

  </React.StrictMode>,
  document.getElementById('root')
);
