import React from "react";
import products from "../Components/css/Products.module.css";

const Home = ()=>{
    return(
        <div className={products.home}>
            <h2 style={{color: "black"},{textAlign:"center"}}>React Routing and API Integration</h2>
            <p style={{color: "black"},{textAlign:"center"}}>Assignment-4</p>
        </div>
    )
};

export default Home;