import React from 'react'
import ProductCart from './ProductCart';
import { useState } from 'react'
import { useStore } from '../store/store';

function Navbar() {
  const { price, setPrice, counter, setCounter, cartProducts, setCartProducts } = useStore();
  const [display, setDisplay] = useState("none");
  function openCart() {
    if (display == "none") setDisplay("block");
    else setDisplay("none");
  }
  const deleteCartProduct = producto => {
    setCartProducts(cartProducts.filter(product => product.id !== producto.id));
    setCounter(counter - producto.quantity);
    setPrice(price - (producto.price * producto.quantity));
  }
  return (
    <header className='header'>
      <h1 className='logo'>FAKE STORE</h1>
      <nav className="container-cart">
        <div className="container-icon">
          <div className="icon">
            <i className="fa-solid fa-cart-shopping" onClick={openCart}></i>
          </div>
          <span className="contador">{counter}</span>
        </div>
        <div className="container-cart-products" style={{ display: display }}>
          {
            cartProducts.length ? (
              <>
                <div className="row-cart-products">
                  {cartProducts.map((cartProduct) => (
                    <ProductCart
                      cartProduct={cartProduct}
                      deleteCartProduct={deleteCartProduct}
                      key={cartProduct.id}
                    />
                  ))}
                </div>
                <div className="total-price-products">
                  Total: <span className="total-price">${price.toFixed(2)}</span>
                </div>
              </>
            ) : <span className="cart-empty">No hay productos en el carrito</span>
          }
        </div>
      </nav>
    </header>
  )
}

export default Navbar