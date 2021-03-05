import React,{ useState, useEffect } from 'react';
import './App.css';
import ProductList from "../src/Components/ProductList";
import Home from '../src/Components/Home';
import ProductDetail from '../src/Components/ProductDetail';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import products from "../src/Components/css/Products.module.css";
import AddProduct from "../src/Components/AddProduct";


import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom";


const App = ()=> {
  return (
    <Router>
      <div className="container">
        <div className="row">
          <div className="col-md-12" style={{backgroundColor:"GrayText"}}>
            <div className="d-flex">
              <ul className={`list-inline mx-auto justify-content-center ${products.menu}`}>
                <li className={`list-inline-item ${products.menuList}`} ><Link to='/' style={{color:"Menu"}}>Home</Link></li>
                <li className={`list-inline-item ${products.menuList}`}><Link to='/products' style={{color:"Menu"}}>Porducts</Link></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div>
        <Switch>
          <Route exact path='/'>
              <Home />
          </Route>
        </Switch>
        <Switch>
          <Route exact path='/products'>
              <ProductList />
          </Route>
        </Switch>
        <Switch>
          <Route exact path='/products/create'>
              <AddProduct />
          </Route>
        </Switch>
        <Switch>
        <Route exact path={'/products/:id'}>
          <ProductDetail />
        </Route>
        </Switch>
        <Switch>
        <Route path={'/404'}>
          <h1 className="not-found">404 NOT FOUND.........</h1>
        </Route>
        </Switch>
        <Switch><Route path={'*'} render={() => <Redirect to='/404' />} /></Switch>
      </div>
    </Router>
  );
}

export default App;
