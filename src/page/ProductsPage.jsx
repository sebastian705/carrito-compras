import React, { useEffect } from 'react'
import { useStore } from '../store/store';
import Navbar from '../components/Navbar';
import MainContainer from '../components/MainContainer';

const ProductsPage = () => {
  const { setProducts } = useStore();
  useEffect(() => {
    setProducts();
  }, [])
  return (
    <>
      <Navbar />
      <MainContainer />
    </>
  )
}

export default ProductsPage