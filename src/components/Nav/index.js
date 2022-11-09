import React from "react";

function Nav(props) {
  const { categories = [], setCurrentCategory, currentCategory } = props;

  return (
    <div>
      <header>
        <nav className="nav">
          <ul>
            <li
              className={`${
                currentCategory.name === `MENSWEAR` && `navActive`
              }`}
              key={`MENSWEAR`}
            >
              <span
                onClick={() => {
                  setCurrentCategory('MENSWEAR');
                }}
              >
                MENSWEAR
              </span>
            </li>
            <li
              className={`${
                currentCategory.name === `WOMENSWEAR` && `navActive`
              }`}
              key={`WOMENSWEAR`}
            >
              <span
                onClick={() => {
                  setCurrentCategory('WOMENSWEAR');
                }}
              >
                WOMENSWEAR
              </span>
            </li>
            <li
              className={`${
                currentCategory.name === `EVERYTHING ELSE` && `navActive`
              }`}
              key={`EVERYTHING ELSE`}
            >
              <span
                onClick={() => {
                  setCurrentCategory('EVERYTHING ELSE');
                }}
              >
                EVERYTHING ELSE
              </span>
            </li>
            <li
              className={`${currentCategory.name === `SEARCH` && `navActive`}`}
              key={`SEARCH`}
            >
              SEARCH
            </li>
          </ul>
          <div>
            <h1>STORE</h1>
          </div>
          <ul>
            <li
              className={`${currentCategory.name === `ENGLISH` && `navActive`}`}
              key={`ENGLISH`}
            >
              <span
                onClick={() => {
                  setCurrentCategory('ENGLISH');
                }}
              >
                ENGLISH
              </span>
            </li>
            <li
              className={`${currentCategory.name === `ACCOUNT` && `navActive`}`}
              key={`ACCOUNT`}
            >
              <span
                onClick={() => {
                  setCurrentCategory('ACCOUNT');
                }}
              >
                ACCOUNT
              </span>
            </li>
            <li
              className={`${
                currentCategory.name === `WISHLIST` && `navActive`
              }`}
              key={`WISHLIST`}
            >
              <span
                onClick={() => {
                  setCurrentCategory('WISHLIST');
                }}
              >
                WISHLIST
              </span>
            </li>
            <li
              className={`${
                currentCategory.name === `SHOPPING BAG` && `navActive`
              }`}
              key={`SHOPPING BAG`}
            >
              <span
                onClick={() => {
                  setCurrentCategory('SHOPPING BAG');
                }}
              >
                SHOPPING BAG
              </span>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
}

export default Nav;
