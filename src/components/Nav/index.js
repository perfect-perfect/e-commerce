import React from "react";
import { Link } from 'react-router-dom';

function Nav(props) {
  const { categories = [], setCurrentCategory, currentCategory } = props;

  const left = categories.filter((category) => category.orientation === 'left');

  const right = categories.filter((category) => category.orientation === 'right');

  return (

    <header>
      <nav className="nav">
        <ul>
          {left.map((category) => (
            <li className={`${currentCategory.name === category.name && `navActive`}`} key = {category.name}>
              <Link to={category.url}>
                <span
                  onClick={() => {
                    setCurrentCategory(category)
                  }}
                >
                  {category.name}
                </span>
              </Link>
            </li>
          ))}
        </ul>
        <div>
          <h1>STORE</h1>
        </div>
        <ul>
        {right.map((category) => (
            <li className={`${currentCategory.name === category.name && `navActive`}`} key = {category.name}>
              <Link to={category.url}>
                <span
                  onClick={() => {
                    setCurrentCategory(category)
                  }}
                >
                  {category.name}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>

  );
}

export default Nav;
