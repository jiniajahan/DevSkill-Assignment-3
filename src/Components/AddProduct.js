import React, { useEffect, useState } from "react";
import { Link,useParams } from "react-router-dom";
import classes from "../Components/css/Products.module.css";
import axios from "axios";

const AddProduct = () =>{
    const[products, setProducts] = useState([]);
    // const history = useHistory();

    useEffect(()=>{
        axios.post('https://fakestoreapi.com/products')
        .then((res)=>{
          setProducts(res.data);
        })
        .catch((err)=>{
          console.log(err.data);
        });
      },[]);


    return(
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                <h2 className={classes.header}>Add Product</h2>
                </div>
            </div>
        </div>
    )
}

export default AddProduct;