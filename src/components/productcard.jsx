import React from "react";
import Button from "../components/Button";

const ProductCard = () => {
  const productImage =
    "https://via.placeholder.com/200"; 
  const productName = "Cool Headphones";
  const productPrice = "$49.99";

  const handleViewProduct = () => {
    alert("Redirecting to product details...");
  };

  return (
    <div className="border p-4 rounded-lg shadow-lg w-64 text-center">
      <img
        src={productImage}
        alt={productName}
        className="w-full h-40 object-cover mb-3 rounded-lg"
      />
      <h2 className="text-xl font-bold">{productName}</h2>
      <p className="text-gray-600">{productPrice}</p>
      <Button text="View Product" onClick={handleViewProduct} />
    </div>
  );
};

export default ProductCard;
