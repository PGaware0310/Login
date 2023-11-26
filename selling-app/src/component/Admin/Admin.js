import React, { useState } from "react";

const Admin = () => {
  const [productId, setProductId] = useState("");
  const [productName, setProductName] = useState("");
  const [productPrice, setProductPrice] = useState("");
  const [productCategory, setProductCategory] = useState("");
  const [products, setProducts] = useState([]);

  const onIdHandler = (e) => {
    setProductId(e.target.value);
  };
  const onProductNameHandler = (e) => {
    setProductName(e.target.value);
  };
  const onProductPriceHandler = (e) => {
    setProductPrice(e.target.value);
  };
  const onProductCategoryHandler = (e) => {
    setProductCategory(e.target.value);
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    //create newproduct object
    const newProducts = {
      id: productId,
      name: productName,
      price: productPrice,
      category: productCategory,
    };

    //update new product lists
    setProducts([...products, newProducts]);
    console.log(newProducts);
    //clear the input field after submission
    setProductId("");
    setProductName("");
    setProductPrice("");
    setProductCategory("");
    localStorage.setItem("products",JSON.stringify(products));
  };
  
  //function to filter products by category
  const getProductsByCategory = (catgry) => {
    return products.filter((product) => product.category === catgry);
  };

  const handleDelete = (id) => {
    const updatedProducts = products.filter((product) => product.id !== id);
    setProducts(updatedProducts);
  };

  return (
    <>
      <form onSubmit={onSubmitHandler}>
        <div>
          <label>Product_Id:</label>
          <input type="text" value={productId} onChange={onIdHandler} />
          <label>Product_Name:</label>
          <input
            type="text"
            value={productName}
            onChange={onProductNameHandler}
          />
          <label>Product_Price:</label>
          <input
            type="number"
            value={productPrice}
            onChange={onProductPriceHandler}
          />
          <label>Product_Category:</label>
          <select
            name="dropdown"
            id="dropdown"
            value={productCategory}
            onChange={onProductCategoryHandler}
          >
            <option value="">Select</option>
            <option value="Food">Food</option>
            <option value="Electronics">Electronics</option>
            <option value="SkinCare">SkinCare</option>
          </select>
          <button type="submit">Add Product</button>
        </div>
      </form>
      <div>
        <h2>Products</h2>
        <h3>Food Items</h3>
        <ul>
          {/* map through products and display them */}
          {getProductsByCategory("Food").map((product) => (
            <li key={product.id}>
              {product.name}-{product.price}-{product.category}
              <button onClick={() => handleDelete(product.id)}>Delete Product</button>
            </li>
          ))}
        </ul>
        <h3>Electronics Items</h3>
        <ul>
          {getProductsByCategory("Electronics").map((product) => (
            <li key={product.id}>
              {product.name}-{product.price}-{product.category}
              <button onClick={() => handleDelete(product.id)}>Delete Product</button>
            </li>
          ))}
          </ul>
          <h3>SkinCare</h3>
        <ul>
          {getProductsByCategory("SkinCare").map((product) => (
            <li key={product.id}>
              {product.name}-{product.price}-{product.category}
              <button onClick={() => handleDelete(product.id)}>Delete Product</button>
            </li>
          ))}
        </ul>
        
        
      </div>
    </>
  );
};

export default Admin;
