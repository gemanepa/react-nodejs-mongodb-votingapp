import React from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import NavBar from './Navbar';

const StyledBody = styled.div`
  min-width: 100%;
  max-width: 100%;
  min-height: 100vh;
  height: auto;
  overflow-x: hidden;
  overflow-y: auto;
  padding: 0;
  margin: 0;
  background-image: url("./images/home-wallpaper.jpg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;

export default function Layout(props) {
  const {
    children, navbar, setPage
  } = props;
  return (
    <StyledBody>
      <NavBar activePage={navbar} setPage={setPage} />
      { children }
    </StyledBody>
  );
}

Layout.propTypes = {
  children: PropTypes.element.isRequired,
  navbar: PropTypes.elementType.isRequired,
  setPage: PropTypes.func.isRequired
};
