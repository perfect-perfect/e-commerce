import styled from "styled-components";

export const NavContainer = styled.nav`
	display: flex;
	flex-wrap: wrap;
	justify-content: space-between;
  padding: 20px 55px;

  ul {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }

  ul li {
    padding: 0 1rem 0 0;
  }

  .navActive {
    text-decoration: underline;
  }

`;

