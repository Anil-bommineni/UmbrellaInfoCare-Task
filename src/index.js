import React from 'react';
import ReactDOM from 'react-dom';
import App from './Routes';
import WorkSpaceOne from './Routes';

import { BrowserRouter } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'antd/dist/antd.css';
import CounselAppContextProvider from './Context_Api/Context';
ReactDOM.render(
  <BrowserRouter>
    <React.StrictMode>
      <CounselAppContextProvider>
        <WorkSpaceOne/>
      </CounselAppContextProvider>
    </React.StrictMode>
  </BrowserRouter>,
  document.getElementById('root')
);
