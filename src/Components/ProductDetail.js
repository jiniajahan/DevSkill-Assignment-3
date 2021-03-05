import React, { useEffect, useState } from "react";
import { Link,useParams } from "react-router-dom";
import Loader from "../Components/Loader";
import classes from "../Components/css/Products.module.css";
import axios from "axios";

const ProductDetail = (props) => {
    const params =useParams()
    const [loading, setLoading] = useState(true);
    const[product, setProduct] = useState([]);
   

    const { id } = useParams();
    useEffect(()=>{
        axios.get(`https://fakestoreapi.com/products/${id}`)
        .then((res)=>{
          setProduct(res.data);
          setLoading(false);
        })
        .catch((err)=>{
          console.log(err.data);
        });
      },[]);


    return(
        <div className="container-fluid">
            
            {
                loading === true ? (
                    <div>
                    <Loader></Loader>
                </div>
                ) : (
                    <div className="container">
                        <div class="card mb-3">
                            <div class="row g-0">
                                <div class="col-md-4">
                                <img src={product.image} alt="..." className={classes.img} />
                                </div>
                                <div class="col-md-8">
                                <div class="card-body">
                                    <h5 className={classes.title}>Product Name: {product.title}</h5>
                                    <p className={classes.text}><strong>Description:</strong>{product.description}</p>
                                    <p className={classes.text}><strong>Description:</strong>{product.category}</p>
                                    <p className={classes.price}>Price: {product.price}</p>
                                </div>
                                </div>
                            </div>
                        </div> 
                        <Link className="btn btn-primary" to="/">back to Home</Link> 
                  </div>
                )
            }
            
        </div>
    )
};

export default ProductDetail;
