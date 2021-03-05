import React, { useState, useEffect } from "react";
import axios from "axios";
import { useHistory, useParams } from "react-router-dom";

const EditProduct = () => {
  let history = useHistory();
  const { id } = useParams();
  const [product, setProduct] = useState({
    title: "",
    description: "",
    category: "",  
    price: ""
  });

  const { title, description, category, price } = product;
  const onInputChange = e => {
    setProduct({ ...title, [e.target.title]: e.target.value },
      { ...description, [e.target.description]: e.target.value },
      { ...category, [e.target.category]: e.target.value },
      { ...price, [e.target.price]: e.target.value }
      );
  };

  useEffect(() => {
    loadProduct();
  }, []);

  const onSubmit = async e => {
    e.preventDefault();
    axios.patch(`https://fakestoreapi.com/products/${id}`, product);
    history.push("/");
  };

  const loadProduct = async () => {
    const result = await axios.get(`https://fakestoreapi.com/products/${id}`);
    setProduct(result.data);
  };
  return (
    <div className="container">
      <div className="w-75 mx-auto shadow p-5">
        <h2 className="text-center mb-4">Edit The Product</h2>
        <form onSubmit={e => onSubmit(e)}>
          <div className="form-group">
          <input
              type="text"
              className="form-control form-control-lg"
              placeholder="title"
              name="title"
              value={title}
              onChange={e => onInputChange(e)}
            />
          </div>
          <div className="form-group">
          <input
              type="text"
              className="form-control form-control-lg"
              placeholder="description"
              name="description"
              value={description}
              onChange={e => onInputChange(e)}
            />
          </div>
          <div className="form-group">
          <input
              type="text"
              className="form-control form-control-lg"
              placeholder="category"
              name="category"
              value={category}
              onChange={e => onInputChange(e)}
            />
          </div>
          <div className="form-group">
          <input
              type="text"
              className="form-control form-control-lg"
              placeholder="price"
              name="price"
              value={price}
              onChange={e => onInputChange(e)}
            />
          </div>
          <button className="btn btn-primary btn-block">Update</button>
        </form>
      </div>
    </div>
  );
};

export default EditProduct;