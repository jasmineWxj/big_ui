import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import RouteConfigs from './router';
import { BrowserRouter, useNavigate, Link} from 'react-router-dom';
import classnames from 'classnames';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
{/* <Demo></Demo> */}
root.render(
  <div>
    <BrowserRouter>
      <div className={classnames('header_bar')}>
        <Link to='/'>Tab</Link>
        <Link to='/switch'>switch</Link>
        <Link to='/timeline'>timeline</Link>
        <Link to='/popover'>popover</Link>
      </div>
      <div className={classnames('contain')}>
        <RouteConfigs></RouteConfigs>
      </div>
    </BrowserRouter>
  </div>

)