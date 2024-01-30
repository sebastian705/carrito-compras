import React from 'react'
import { useState } from 'react'

function Navbar({ products, setProducts, contador, setContador, precio, setPrecio }) {
    const [display, setDisplay] = useState("none");
    function openCart() {
        if (display == "none") setDisplay("block");
        else setDisplay("none");
    }
    const deleteProduct = producto =>{
        setProducts(products.filter(product => product.id !== producto.id));
        setContador(contador - producto.quantity);
        setPrecio(precio - (producto.price * producto.quantity));
    }
    return (
        <header className='header'>
            <h1 className='logo'>FAKE STORE</h1>
            <nav className="container-cart">
                <div className="container-icon">
                    <div className="icon">
                        <i className="fa-solid fa-cart-shopping" onClick={openCart}></i>
                    </div>
                    <span className="contador">{contador}</span>
                </div>
                <div className="container-cart-products" style={{ display: display }}>
                    {
                        products.length ? (
                            <>
                                <div className="row-cart-products">
                                    {products.map((product, index) =>(
                                    <div className="cart-product" key={index}>
                                        <p className="cantidad">{product.quantity}</p>
                                        <p className="product">{product.title}</p>
                                        <span className="price">${product.price}</span>
                                        <i onClick={()=> deleteProduct(product)} className="fa-solid fa-trash"></i>
                                    </div>
                                    ))}
                                </div>
                                <div className="total-price-products">
                                    Total: <span className="total-price">${precio.toFixed(2)}</span>
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