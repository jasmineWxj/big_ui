import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import RouteConfigs from './router';
import { BrowserRouter, useNavigate, Link} from 'react-router-dom';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
{/* <Demo></Demo> */}
root.render(
  <div>
    <BrowserRouter>
      <div>
        <Link to='/tab'>Tab</Link>
        <Link to='/tab'>vue</Link>
        <Link to='/tab'>react</Link>
      </div>
      <RouteConfigs></RouteConfigs>
    </BrowserRouter>
  </div>

)