import './App.css'
import Header from '../src/components/Header/Header';
import Banner from '../src/components/Banner/Banner';
import CardList from '../src/components/CardList/CardList';
import CartProducts from './components/CartProducts/CartProducts';
import Login from './components/Login/Login';
import Footer from '../src/components/Footer/Footer';
import data from './fakeapi/data.json';

import { useState } from 'react';
import { useContext } from 'react';
import { ThemeContext } from './context/ThemeContext';
import { LoginProvider } from './context/LoginContext';

function App() {
  const [searchBar, setsearchBar] = useState('');
  const [showCart, setShowCart] = useState(false)
  const { darkMode } = useContext(ThemeContext);

  return (
    <LoginProvider>
      <div className={darkMode ? 'body--dark' : 'body--light'}>
        <Header searchBar={searchBar} setsearchBar={setsearchBar} setShowCart={setShowCart} />
        <Banner />
        {showCart ? (<CartProducts/> ) : (<CardList products={data} searchBar={searchBar}/>)}
        <Login />
        <Footer />
      </div>
    </LoginProvider>
  )
}

export default App
