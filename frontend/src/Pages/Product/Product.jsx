import React from 'react';
import { useLocation } from 'react-router-dom';
import './Product.css';

function Product() {
  const location = useLocation();
  const { state } = location;
  const product = state?.product;

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div className='product'>
      <div className='proCon'>
        <div>
          <img className='proImg' src={product.image} alt={`Product ${product.id}`} />
        </div>
        <div>
          <div className='info'>
            <h4>Product Information</h4>
            <hr />
            <div className='nn'>
              <p>Name: {product.category}</p>
              <p>Price: {product.price}</p>
            </div>
          </div>
          <br />
          <div>
            <p className='story'><b>Story:</b> {product.story}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product;
