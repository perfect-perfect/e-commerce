import React from 'react'
import { Link } from 'react-router-dom';
import { FilterNav } from './style';

function Filter() {
  return (
    <FilterNav>
      {/* Categories filter */}
      <ul>
        <li>
          <h2>
            {/* this link will need to dynamically change. For example if I am looking at ALL `Shoes`, with no designer selected, and i clicked 'ALL CATEGORIES` it will show all categorie with no designer filter. However, If I am looking at a shoes with a designer filter one and i click 'ALL CATEGORIES` it would show me all catagores of that designer*/}
            <Link to='/men'>ALL CATEGORIES</Link>
          </h2>
        </li>
        <li>
          ACCESORIES
        </li>
        <li>
          BAGS
        </li>
        <li>
          CLOTHING
        </li>
        <li>
          SHOES
        </li>
      </ul>
      {/* Designer filter */}
      <ul>
        <li>
          <h2>
            ALL DESIGNERS
          </h2>
        </li>
        <li>
          AFFIXWRKS
        </li>
        <li>
          Brain dead
        </li>
        <li>
          Ekhaus Latta
        </li>
        <li>
          GR10K
        </li>
        <li>
          Henrik Vibskov
        </li>
      </ul>
    </FilterNav>
  )
}

export default Filter;