import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { Sun, Moon } from 'lucide-react';

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem 2rem;
  background-color: ${({ theme }) => theme.background};
  border-bottom: 1px solid ${({ theme }) => theme.border};
  position: sticky;
  top: 0;
  z-index: 100;
`;

const Logo = styled(NavLink)`
  font-size: 1.5rem;
  font-weight: 700;
  color: ${({ theme }) => theme.text};
  
  &:hover {
    color: ${({ theme }) => theme.primary};
  }
`;

const NavLinks = styled.div`
  display: flex;
  gap: 2rem;
  align-items: center;
`;

const StyledNavLink = styled(NavLink)`
  color: ${({ theme }) => theme.text};
  font-weight: 500;
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    width: 0;
    height: 2px;
    bottom: -4px;
    left: 0;
    background-color: ${({ theme }) => theme.primary};
    transition: width 0.3s ease;
  }

  &:hover::after,
  &.active::after {
    width: 100%;
  }

  &.active {
    color: ${({ theme }) => theme.primary};
  }
`;

const ThemeToggleButton = styled.button`
  background: none;
  border: none;
  color: ${({ theme }) => theme.text};
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.5rem;
  border-radius: 50%;
  transition: background-color 0.3s;

  &:hover {
    background-color: ${({ theme }) => theme.secondary};
    color: ${({ theme }) => theme.primary};
  }
`;

const Navbar = ({ toggleTheme, isDarkTheme }) => {
  return (
    <Nav>
      <Logo to="/">Uday.dev</Logo>
      <NavLinks>
        <StyledNavLink to="/">Home</StyledNavLink>
        <StyledNavLink to="/about">About</StyledNavLink>
        <StyledNavLink to="/projects">Projects</StyledNavLink>
        <StyledNavLink to="/contact">Contact</StyledNavLink>
        <ThemeToggleButton onClick={toggleTheme} aria-label="Toggle Theme">
          {isDarkTheme ? <Sun size={20} /> : <Moon size={20} />}
        </ThemeToggleButton>
      </NavLinks>
    </Nav>
  );
};

export default Navbar;
