import { Nav, NavContainer, NavDescription } from "./styles";
import Logo from "../../assets/Logo.jpg";
const Navbar = () => {
  return (
    <Nav>
      <NavContainer>
        <a>
          <img src={Logo} alt="Logo" height={60} width={60}/>
        </a>
        <NavDescription></NavDescription>
      </NavContainer>
    </Nav>
  );
};

export default Navbar;
