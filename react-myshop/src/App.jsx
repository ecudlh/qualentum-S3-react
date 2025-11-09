// import { useState } from 'react'

import './App.css'
import Header from '../src/components/Header/Header'
import Footer from '../src/components/Footer/Footer'
import Banner from '../src/components/Banner/Banner'
import CardList from '../src/components/CardList/CardList'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <Banner />
      <CardList />
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
