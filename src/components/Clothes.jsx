import React from 'react'

const Clothes = ({clothes = [], products, setProducts,contador, setContador, precio, setPrecio}) => {
    function addCart(product){
        let obj = {...product, quantity: 1}
        const exits = products.some(item => item.id === obj.id);
        if(exits){
            const producto = products.map(item => item.id === obj.id 
                ? {...item, quantity: item.quantity + 1} 
                : item
            );
            setPrecio(precio + (obj.price * obj.quantity));
            setContador(contador + obj.quantity);
            return setProducts([...producto]);
        }
        setPrecio(precio + (obj.price * obj.quantity));
        setContador(contador + obj.quantity);
        setProducts([...products, obj]);
    }
  return (
    <main className='main'>
        <section className='container-items'>
            {clothes.map((cloth, index) =>(
                <article className='item' key={index}>
                    <figure>
                        <img src={cloth.image} alt="text" />
                    </figure>
                    <div className="info-item">
                        <h2 className="nombre-item">{cloth.title}</h2>
                        <span className='price-item'>${cloth.price}</span>
                        <button className="btn-add-cart" onClick={() => addCart(cloth)}>Comprar</button>
                    </div>
                </article>
            ))}
        </section>
    </main>
  );
};
export default Clothes
