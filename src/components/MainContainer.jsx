import React, { useEffect } from 'react'
import ProductItem from './Product';
import { useStore } from '../store/store';

const MainContainer = () => {
    const { products, setPrice, price, counter,
        setCounter, cartProducts, setCartProducts } = useStore();

    function addCart(product) {
        let obj = { ...product, quantity: 1 }
        const exits = cartProducts.some(item => item.id === obj.id);
        if (exits) {
            const producto = cartProducts.map(item => item.id === obj.id
                ? { ...item, quantity: item.quantity + 1 }
                : item
            );
            setPrice(price + (obj.price * obj.quantity));
            setCounter(counter + obj.quantity);
            return setCartProducts([...producto]);
        }
        setPrice(price + (obj.price * obj.quantity));
        setCounter(counter + obj.quantity);
        setCartProducts([...cartProducts, obj]);
    }
    console.log(cartProducts);
    return (
        <main className='main'>
            <section className='container-items'>
                {products.map((product) => (
                    <ProductItem product={product} addCart={addCart} key={product.id} />
                ))}
            </section>
        </main>
    );
};
export default MainContainer
