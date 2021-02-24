import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import WorkSpaceOne from './pages/Home/WorkSpaceOne';
import MyAppsOne from './pages/Home/MyAppsOne';
import tractionOne from './pages/Home/Traction' ;
import transactionsOne from './pages/Home/Transactions' ;
import crmOne from './pages/Home/Crm' ;


function App() {
  return (
    <Switch>
      <Route exact path="/Readlater" component={tractionOne} />
      <Route exact path="/trainLeo" component={transactionsOne} />
      <Route exact path="/customer/crm" component={crmOne} />
      <Route exact path="/workspace1" component={WorkSpaceOne} />
      <Route exact path="/All" component={MyAppsOne} />
      <Route exact path="/workspace1" component={WorkSpaceOne} />
      <Redirect from="/" to="/Readlater"/>

    </Switch>
  );
}
export default App;
