import React from "react";

const products = [
  {
    name: "HP Laptop",
    price: 300,
    link: "hp",
  },
  {
    name: "Dell Laptop",
    price: 300,
    link: "dell",
  },
  {
    name: "Apple Laptop",
    price: 300,
    link: "apple",
  },
  {
    name: "Lenovo Laptop",
    price: 300,
    link: "lenovo",
  },
];

const Shop = () => {
  return (
    <div className="py-5 d-flex container">
      {products.map((product, key) => {
        return (
          <div key={key} className="product-wrappr mx-3">
            <div>
              Name : <span>{product.name}</span>
            </div>

            <div>
              Price: <span>{product.price}</span>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Shop;
