import React from 'react'

const Product = ({ product, addCart }) => {
  return (
    <article className='item'>
      <figure>
        <img src={product.image} alt="text" />
      </figure>
      <div className="info-item">
        <h2 className="nombre-item">{product.title}</h2>
        <span className='price-item'>${product.price}</span>
        <button className="btn-add-cart" onClick={() => addCart(product)}>Añadir al carrito</button>
      </div>
    </article>
  )
}

export default Product