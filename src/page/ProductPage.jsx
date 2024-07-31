import React from 'react'
import { useEffect } from 'react'
import { useStore } from '../store/store'
import { Link, useParams } from 'react-router-dom';
import Navbar from '../components/Navbar';

const ProductPage = () => {
  const { setProduct, product } = useStore();
  const { id } = useParams();
  useEffect(() => {
    setProduct(id);
  }, [])

  return (
    <>
      <Navbar />
      <Link to={'/'} className='link-back'>
        <i class="fa-solid fa-arrow-left"></i> Regresar
      </Link>
      <div className='page-product-info'>
        <figure>
          <img src={product.image} alt='product' />
        </figure>
        <div className='product-info'>
          <h2>{product.title}</h2>
          <span>Categoria: {product.category}</span>
          <p>{product.description}</p>
          <span>Precio: ${product.price}</span>
        </div>
      </div>
    </>
  )
}

export default ProductPage