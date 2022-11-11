import React from "react";
import { Link } from 'react-router-dom';

function Nav(props) {
  const { pages = [], setCurrentPage, currentPage } = props;

  const left = pages.filter((page) => page.orientation === 'left');

  const right = pages.filter((page) => page.orientation === 'right');

  return (

    <header>
      <nav className="nav">
        <ul>
          {left.map((page) => (
            <li className={`${currentPage.name === page.name && `navActive`}`} key = {page.name}>
              <Link to={page.url}>
                <span
                  onClick={() => {
                    setCurrentPage(page)
                  }}
                >
                  {page.name}
                </span>
              </Link>
            </li>
          ))}
        </ul>
        <div>
          <h1>STORE</h1>
        </div>
        <ul>
          {right.map((page) => (
            <li className={`${currentPage.name === page.name && `navActive`}`} key = {page.name}>
              <Link to={page.url}>
                <span
                  onClick={() => {
                    setCurrentPage(page)
                  }}
                >
                  {page.name}
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
