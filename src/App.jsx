import './App.css'
import { useState, useEffect } from 'react'
import { useStore } from './store/store';
import Navbar from './components/Navbar';
import MainContainer from './components/MainContainer';

function App() {
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

export default App
