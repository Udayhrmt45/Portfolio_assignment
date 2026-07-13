import { Outlet } from 'react-router-dom';
import styled from 'styled-components';
import Navbar from './Navbar';

const MainContainer = styled.main`
  min-height: calc(100vh - 80px); /* Adjust based on Navbar height */
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
  display: flex;
  flex-direction: column;
`;

const Layout = ({ toggleTheme, isDarkTheme }) => {
  return (
    <>
      <Navbar toggleTheme={toggleTheme} isDarkTheme={isDarkTheme} />
      <MainContainer>
        <Outlet />
      </MainContainer>
    </>
  );
};

export default Layout;
