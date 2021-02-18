import React, { useContext } from 'react';
import './main-layout.scss';
import Sidebar from './Sidebar/Sidebar';
import Navbar from './Navbar/Navbar';
import { CounselAppContext } from '../Context_Api/Context';
import { Redirect } from 'react-router-dom';

function MainLayout({ children, active }) {
  const { email } = useContext(CounselAppContext);

  return (
    <div style={{ minHeight: '100vh' }} className="main-layout">
      {/* {email === '' ? <Redirect to="/landing" /> : ''}{' '} */}
      <Sidebar active={active} />
      <div className="site-layout">
        <Navbar active={active} openFunc={() => {}} getTabNEnd={() => {}} />
        {children}
      </div>
    </div>
  );
}

export default MainLayout;
