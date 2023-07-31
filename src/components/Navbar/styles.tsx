import styled from "styled-components";

export const Nav = styled.div`
  position: fixed;
  height: 90px;
  width: 100%;
  top: 0;
  left: 0;
  z-index: 1;
  transition: 0.3s ease-in;
  overflow: hidden;
  background-color: rgba(0, 0, 0, 0.9);
`;

export const NavContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1240px;
  margin: auto;
  height: 100%;
  padding: 0 1rem;

  @media screen and (max-width: 560px){
  justify-content: center;
}
`;

export const NavDescription = styled.div``;
