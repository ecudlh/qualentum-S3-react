import './App.css'
import Header from '../src/components/Header/Header';
import Banner from '../src/components/Banner/Banner';
import CardList from '../src/components/CardList/CardList';
import CartProducts from './components/CartProducts/CartProducts';
import Footer from '../src/components/Footer/Footer';
import data from './fakeapi/data.json';

import { useState } from 'react';

function App() {
  const [searchBar, setsearchBar] = useState('');
  const [showCart, setShowCart] = useState(false)

  return (
    <>
      <Header searchBar={searchBar} setsearchBar={setsearchBar} setShowCart={setShowCart} />
      <Banner />
      {showCart ? (<CartProducts/> ) : (<CardList products={data} searchBar={searchBar}/>)}
      <Footer />
    </>
  )
}

export default App
