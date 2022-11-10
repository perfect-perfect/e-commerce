import React from "react";

function Nav(props) {
  const { categories = [], setCurrentCategory, currentCategory } = props;

  return (

    <header>
      <nav className="nav">
        <ul>
          <li
            className={`${currentCategory.name === categories[0].name && `navActive`}`}
            key={`MENSWEAR`}
          >
            <span
              onClick={() => {
                setCurrentCategory(categories[0]);
              }}
            >
              MENSWEAR
            </span>
          </li>
          <li
            className={`${
              currentCategory.name === categories[1].name && `navActive`
            }`}
            key={`WOMENSWEAR`}
          >
            <span
              onClick={() => {
                setCurrentCategory(categories[1]);
              }}
            >
              WOMENSWEAR
            </span>
          </li>
          <li
            className={`${
              currentCategory.name === categories[2].name && `navActive`
            }`}
            key={`EVERYTHING ELSE`}
          >
            <span
              onClick={() => {
                setCurrentCategory(categories[2]);
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
            className={`${currentCategory.name === categories[4].name && `navActive`}`}
            key={`ENGLISH`}
          >
            <span
              onClick={() => {
                setCurrentCategory(categories[4]);
              }}
            >
              ENGLISH
            </span>
          </li>
          <li
            className={`${currentCategory.name === categories[5].name && `navActive`}`}
            key={`ACCOUNT`}
          >
            <span
              onClick={() => {
                setCurrentCategory(categories[5]);
              }}
            >
              ACCOUNT
            </span>
          </li>
          <li
            className={`${
              currentCategory.name === categories[6].name && `navActive`
            }`}
            key={`WISHLIST`}
          >
            <span
              onClick={() => {
                setCurrentCategory(categories[6]);
              }}
            >
              WISHLIST
            </span>
          </li>
          <li
            className={`${
              currentCategory.name === categories[7].name && `navActive`
            }`}
            key={`SHOPPING BAG`}
          >
            <span
              onClick={() => {
                setCurrentCategory(categories[7]);
              }}
            >
              SHOPPING BAG
            </span>
          </li>
        </ul>
      </nav>
    </header>

  );
}

export default Nav;
