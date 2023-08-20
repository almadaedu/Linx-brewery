import {
  Nav,
  Bars,
  NavMenu,
  NavLink,
  NavButton,
  NavButtonLink
} from './styles';
import Logo from "../../assets/Logo.jpg";
const Navbar = () => {
  return (
    <Nav>
      <Bars />
      <NavMenu>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/services">Services</NavLink>
      </NavMenu>
      <NavLink to="/" >
        <img src={Logo} alt="Logo" height={60} width={60} />
      </NavLink>
      <NavMenu>
        <NavLink to="/signup">Sign Up</NavLink>
        <NavButton>
          <NavLink to ="/signin">Sign In</NavLink>
        </NavButton>
      </NavMenu>
    </Nav>
  );
};

export default Navbar;
