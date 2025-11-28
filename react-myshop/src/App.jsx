import './App.css'
import Header from '../src/components/Header/Header';
import Banner from '../src/components/Banner/Banner';
import CardList from '../src/components/CardList/CardList';
import CartProducts from './components/CartProducts/CartProducts';
import Login from './components/Login/Login';
import Footer from '../src/components/Footer/Footer';
import EditProductModal from './components/EditProductModal/EditProductModal';
import AddProductModal from './components/AddProductModal/AddProductModal';
import AddProductButton from './components/AddProductBtn/AddProductBtn';

import { useState } from 'react';
import { useContext } from 'react';
import { ThemeContext } from './context/ThemeContext';
import { Outlet } from "react-router-dom";

function App() {
  const [searchBar, setsearchBar] = useState('');
  const { darkMode } = useContext(ThemeContext);

  return (
    <div className={darkMode ? 'body--dark' : 'body--light'}>
      <Header searchBar={searchBar} setsearchBar={setsearchBar} />
      <Banner />
      <Outlet context={{ searchBar, setsearchBar }} />
      <AddProductButton />
      <EditProductModal /> 
      <AddProductModal />
      <Footer />
    </div>
  )
}

export default App
