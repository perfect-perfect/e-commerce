import { useState } from 'react';
import './App.css';
import Nav from './components/Nav';
import Home from './components/Home';
import { Routes, Route } from 'react-router-dom'
import Men from './components/Men';
import Women from './components/Women';
import EverythingElse from './components/EverythingElse';
import Account from './components/Account';
import Wishlist from './components/Wishlist';
import ShoppingBag from './components/ShoppingBag';

function App() {

  const [categories] = useState([
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
      name: 'HOMEPAGE',
      orientation: 'center',
      url: '/'
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

  const [currentCategory, setCurrentCategory] = useState(categories[0]);
  
  return (
    <div>
      <Nav 
        categories={categories}
        setCurrentCategory={setCurrentCategory}
        currentCategory={currentCategory}
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
