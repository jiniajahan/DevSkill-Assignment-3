import React,{ useState, useEffect } from 'react';
import ProductDetail from '../src/ProductDetail';
import {useHistory} from 'react-router-dom';

const ProductList = (props)=>{
    const history=useHistory();
    const  clickHandler =(id)=>{
      history.push(`/productDeteil/${id}`)
    }
 
    return(
        <div className="container">
            <div className="row">
                <div className="col-md-6 col-md-offset-4">
                <h2 style={{color: "green"},{textAlign:"center"}}>Products List Page</h2>
                {
                       props.productList.map((data,index)=>{
                           
                           return(


                            <div style={{width: "200px"},{textAlign:"center"}}>
                                <h3>{data.name}</h3>
                                <p>{data.price}</p>
                                
                                
                                <h5 class="card-title text-danger">
                                   
                                    <button onClick={()=>clickHandler(data.name)} details={data} className="btn btn-info ">Product Details</button>
                                </h5> 
                                <hr />
                            </div>
                           ) 
                       })
                    }
                </div>
            </div>
        </div>
    )
};

export default ProductList;