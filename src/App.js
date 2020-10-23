import React, { Fragment } from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import './App.css';
import Landing from './components/layout/Landing';
import Navbar from './components/layout/Navbar';
import Register from './components/auth/Register';
import Login from './components/auth/Login';
import CartDetails from './components/layout/CartDetails';
import 'semantic-ui-css/semantic.min.css';
import Shipping from './components/layout/Shipping';
import Product from './components/layout/Product';

const App = () => (
  <Router>
    <Fragment>
    <Navbar />
    {/* <Landing /> */}
    <Route exact path="/Shopify" component={Landing}/>
    <section className="container">
      <Switch>
        <Route exact path="/Register" component={Register}/>
        <Route exact path="/Login" component={Login}/>
        <Route exact path="/cartDetails" component={CartDetails}/>
        <Route exact path='/shipping' component={Shipping}/>
        <Route exact path='/productDetails' component={Product}/>
      </Switch>
    </section>
  </Fragment>
  </Router> 
)
export default App;
