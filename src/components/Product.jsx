import React from 'react'
import { Link } from 'react-router-dom'
import cart from "../assets/cart.svg";

const Product = ({ product, addCart }) => {
  return (
    <article className='item'>
      <figure>
        <img src={product.image} alt="text" />
      </figure>
      <div className="info-item">
        <h2 className="nombre-item">{product.title}</h2>
        <span className='price-item'>${product.price}</span>
        <div className="actions">
          <button className="btn-add-cart" onClick={() => addCart(product)}>
            <img src={cart} alt="cart" />
          </button>
          <Link to={`/product/${product.id}`} className='link'>Ver mas</Link>
        </div>
      </div>
    </article>
  )
}

export default Product