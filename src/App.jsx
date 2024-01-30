import { useState, useEffect} from 'react'
import Navbar from './components/Navbar';
import Clothes  from './components/Clothes';
import './App.css'

function App() {
  const [ropas, setRopas] = useState([]);
  const [products, setProducts] = useState([]);
  const [contador, setContador] = useState(0);
  const [precio, setPrecio] = useState(0);
  const url = "https://fakestoreapi.com/products";
  useEffect(() => {
    fetchRopas(url);
  }, [])
  const fetchRopas = (api) =>{
    fetch(api)
    .then(res => res.json())
    .then(data => setRopas(data));
  };
  return (
    <>
      <Navbar 
      products={products}
      setProducts={setProducts}
      contador={contador}
      setContador={setContador}
      precio={precio}
      setPrecio={setPrecio}/>
      <Clothes 
      clothes={ropas}
      products={products}
      setProducts={setProducts}
      contador={contador}
      setContador={setContador}
      precio={precio}
      setPrecio={setPrecio}/>
    </>
  )
}

export default App
