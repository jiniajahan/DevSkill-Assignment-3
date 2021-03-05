import React,{ useState, useEffect } from 'react';
import './App.css';
import ProductList from '../src/ProductList';
import Home from '../src/Home';
import ProductDetail from './ProductDetail';


import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom";


const App = ()=> {

  const [productList,setProduct] = useState([
    {
        name: 'Mouse',
        description: 'Mouse Description',
        price: '1200',
        category: 'Electronics',
        },
        {
        name: 'Burger',
        description: 'Burger Description',
        price: '250',
        category: 'Food',
        },
        {
        name: 'Books',
        description: 'Books Description',
        price: '100',
        category: 'Education',
        }
    ]);

  const [item, setItem] = useState('');
  const productHandleClick = (data) => {
    setItem(data);
  }

  return (
    <Router>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <ul className="list-group list-group-horizontal-md">
              <li className="list-group-item"><Link to='/'>Home</Link></li>
              <li className="list-group-item"><Link to='/products'>Porducts</Link></li>
            </ul>
          </div>
        </div>
      </div>
      <div>
        <switch>
          <Route exact path='/'>
              <Home />
          </Route>
        </switch>
        <switch>
          <Route exact path='/products'>
              <ProductList productList={productList} detailsClick={productHandleClick} />
          </Route>
        </switch>
        <switch>
        <Route exact path={'/productDeteil/:id'}>
          <ProductDetail details={item}  />
        </Route>
        </switch>
        <switch>
        <Route path={'/404'}>
          <h1 className="not-found">404 NOT FOUND.........</h1>
        </Route>
        </switch>
        <switch><Route path={'*'} render={() => <Redirect to='/404' />} /></switch>
      </div>
    </Router>
  );
}

export default App;
