import './App.css'
import Header from '../src/components/Header/Header';
import Footer from '../src/components/Footer/Footer';
import Banner from '../src/components/Banner/Banner';
import CardList from '../src/components/CardList/CardList';

import { useState } from 'react';
import data from './fakeapi/data.json';

function App() {
  const [searchBar, setsearchBar] = useState('');

  return (
    <>
      <Header searchBar={searchBar} setsearchBar={setsearchBar}/>
      <Banner />
      <CardList products={data} searchBar={searchBar}/>
      <Footer />

      {/* <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}
    </>
  )
}

export default App
