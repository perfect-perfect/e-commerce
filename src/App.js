import { useState } from 'react';
import './App.css';
import Nav from './components/Nav';

function App() {

  const [categories] = useState([
    {
      name: 'MENSWEAR',
      orientation: 'left'
    },
    {
      name: 'WOMENSWEAR',
      orientation: 'left'
    },
    {
      name: 'EVERYTHING ELSE',
      orientation: 'left'
    },
    {
      name: 'HOMEPAGE',
      orientation: 'center'
    },
    {
      name: 'ACCOUNT',
      orientation: 'right'
    },
    {
      name: 'WISHLIST',
      orientation: 'right'
    },
    {
      name: 'SHOPPING BAG',
      orientation: 'right'
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
    </div>
  );
}

export default App;
