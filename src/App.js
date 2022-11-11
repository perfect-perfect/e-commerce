import { useState } from 'react';
import './App.css';
import Nav from './components/Nav';
import Home from './pages/Home';
import { Routes, Route } from 'react-router-dom'
import Men from './pages/Men';
import Women from './pages/Women';
import EverythingElse from './pages/EverythingElse';
import Account from './pages/Account';
import Wishlist from './pages/Wishlist';
import ShoppingBag from './pages/ShoppingBag';

function App() {

  const [pages] = useState([
    {
      name: 'HOMEPAGE',
      orientation: 'center',
      url: '/'
    },
    {
      name: 'MENSWEAR',
      orientation: 'left',
      url: 'men'
    },
    {
      name: 'WOMENSWEAR',
      orientation: 'left',
      url: 'women'
    },
    {
      name: 'EVERYTHING ELSE',
      orientation: 'left',
      url: 'everything-else'
    },
    {
      name: 'ACCOUNT',
      orientation: 'right',
      url: 'account'
    },
    {
      name: 'WISHLIST',
      orientation: 'right',
      url: 'wishlist'
    },
    {
      name: 'SHOPPING BAG',
      orientation: 'right',
      url: 'shopping-bag'
    }
  ])

  const [currentPage, setCurrentPage] = useState(pages[0]);
  
  return (
    <div>
      <Nav 
        pages={pages}
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}
      ></Nav>
      <main>
        <Routes>
          <Route path='/' element={ <Home/> } />
          <Route path='men' element={ <Men/> } />
          <Route path='women' element={ <Women/> } />
          <Route path='everything-else' element={ <EverythingElse/> } />
          <Route path='account' element={ <Account/> } />
          <Route path='wishlist' element={ <Wishlist/> } />
          <Route path='shopping-bag' element={ <ShoppingBag/> } />
        </Routes>
      </main>
    </div>
  );
}

export default App;
