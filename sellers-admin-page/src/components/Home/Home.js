import React, { useEffect, useState } from "react";

const Home = (props) => {
  const [product, setProducts] = useState([]);
  const [newProduct, setNewProducts] = useState({
    productId: "",
    productPrice: "",
    productName: "",
  });
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    const savedProduct = JSON.parse(localStorage.getItem("data"));
    if (savedProduct) {
      setProducts(savedProduct);
    }
  }, []);

  const onSubmitHandler = (e) => {
    e.preventDefault();
    if (
     newProduct.productPrice > 0
    ) {
      const total=totalPrice + newProduct.productPrice;
      setProducts([...product, newProduct]);
      setTotalPrice(total);
      setNewProducts({
        productId: "",
        productPrice: "",
        productName: "",
      });
    }
    localStorage.setItem("items", JSON.stringify(product));
    console.log(product);
  };

  const onDeleteHandler=(productId)=>{
    // productId.preventDefault();
    const updatedProducts = product.filter((products) => products.id !== productId);
    setProducts(updatedProducts);
  }
  
  return (
    <>
      <form>
        <label htmlFor="id">Product Id:</label>
        <input
          type="text"
          value={newProduct.productId}
          name="productId"
          onChange={(e) =>
            setNewProducts({ ...newProduct, productId: e.target.value })
          }
        />

        <label htmlFor="price">Selling Price:</label>
        <input
          type="number"
          value={newProduct.productPrice}
          name="productPrice"
          onChange={(e) => {
            setNewProducts({ ...newProduct, productPrice: e.target.value });
          }}
        />

        <label htmlFor="name">Product Name:</label>
        <input
          type="text"
          value={newProduct.productName}
          name="productName"
          onChange={(e) => {
            setNewProducts({ ...newProduct, productName: e.target.value });
          }}
        />

        <button type="submit" onClick={onSubmitHandler}>
          Add Product
        </button>
        <h2>Products:</h2>
        <p>
          {product.map((products, id) => (
            <li key={id}>
              {products.productId}-{products.productName}-
              {products.productPrice}
              <button onClick={onDeleteHandler}>Delete Item</button>
            </li>
          ))}
        </p>
        <h4>Total price Worth:Rs.{totalPrice}</h4>
      </form>
    </>
  );
};

export default Home;
