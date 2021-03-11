
import ProductList from "./components/ProductList";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import About from './components/About';
import ProductInfo from './components/ProductInfo';
import MyProfile from './components/MyProfile';
import {AppProvider} from './context'
import PrivateRoute from "./components/PrivateRoute";
import AccountDetails from "./components/AccountDetails";
import AddressBook from "./components/AddressBook";
import MyBoard from "./components/MyBoard";
import MyOrders from "./components/MyOrders";
import PrivacyPolicy from './components/PrivacyPolicy'
import TermsOfUse from "./components/TermsOfUse";
import React from 'react';

function App() {

  return (
    <div>
        <Router>
          <AppProvider>
           <Switch>
            <Route path='/Product/:id' component={ProductInfo} />
            <Route exact path='/' component={ProductList} />
            <Route path='/About' component={About} />
            <Route path='/PrivacyPolicy' component={PrivacyPolicy} />
            <Route path='/TermsOfUse' component={TermsOfUse} />
            <PrivateRoute path='/MyProfile' component={MyProfile} />
            <PrivateRoute path='/AccountDetails' component={AccountDetails} />
            <PrivateRoute path='/AddressBook' component={AddressBook} />
            <PrivateRoute path='/MyBoard' component={MyBoard} />
            <PrivateRoute path='/MyOrders' component={MyOrders} />
           </Switch>        
           </AppProvider>
        </Router> 
    </div>
  );
}

export default App;
