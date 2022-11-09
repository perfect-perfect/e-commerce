import { useState } from 'react';
import './App.css';
import Nav from './components/Nav';

function App() {

  const [categories] = useState([
    {
      name: 'MENSWEAR',
    },
    {
      name: 'WOMENSWEAR'
    },
    {
      name: 'EVERYTHING ELSE'
    },
    {
      name: 'SEARCH'
    },
    {
      name: 'ENGLISH'
    },
    {
      name: 'ACCOUNT'
    },
    {
      name: 'WISHLIST'
    },
    {
      name: 'SHOPPING BAG'
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
