import React,{ useState, useEffect } from 'react';
import Loader from "../Components/Loader";
import classes from "../Components/css/Products.module.css";
import {useHistory, Link} from 'react-router-dom';
import axios from "axios";



const ProductList = (props)=>{
    const [loading, setLoading] = useState(true);
    const[products, setProducts] = useState([]);
    const history = useHistory();

    useEffect(()=>{
        axios.get('https://fakestoreapi.com/products')
        .then((res)=>{
          setProducts(res.data);
          setLoading(false);
        })
        .catch((err)=>{
          console.log(err.data);
        });
      },[]);


 
    const  handleClick =(id)=>{
       history.push(`/products/${id}`)
    }
 
    return(
        <div className="container">
          <div className={classes.addButton}>
          <Link className="btn btn-primary" to="/products/create">Add Product</Link></div>  

            {loading === true ? (
                <div>
                    <Loader></Loader>
                </div>
            ) : (
                <div>
                    <div className="row">
                        <div className="col-md-12 col-lg-12">
                            <div className={classes.content}>
                                <h2 className={classes.header}>Products List Page</h2>
                            </div>
                        </div>
                    </div>
                </div>
            )}
            
            {
                products.length && products.map((product, index)=>{
                    return(
                        <div key={index} className="card mb-3" onClick={()=>handleClick(product.id)}>
                            <div className="row g-0">
                                <div className="col-md-4">
                                <img src={product.image} alt="..." className={classes.img} />
                                </div>
                                <div className="col-md-8">
                                <div className="card-body">
                                    <h5 className={classes.title}>Product Name: {product.title}</h5>
                                    <p className={classes.text}><strong>Description:</strong> {product.description}</p>
                                    <p className={classes.text}><strong>Category:</strong> {product.category}</p>
                                    <p className={classes.price}>Price: {product.price}</p>
                                </div>
                                </div>
                            </div>
                        </div>
                    )
                })
            }
            
        </div>
    )
};

export default ProductList;