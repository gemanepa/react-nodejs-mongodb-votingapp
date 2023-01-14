import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import { css } from '@emotion/core';
import Layout from '../../shared-ui/Layout';
import Button from '../../shared-ui/Button';
import { flipInX } from '../../shared-ui/animations';

const buttonCSS = css`
height: 100px;
font-size: 24px;
background-color: darkblue;
animation-name: flipInX;
animation-duration: 0.75s;
`;

const Main = styled.div`
display: flex;
justify-content: center;
flex-direction: column;
margin: 0 auto;
height: 100%;
overflow: hidden;
div {
width: 100%;
height: auto;
margin: 0 auto;
display: flex;
justify-content: center;
img {
  height: auto;
}
}

@media (max-width: 1199px) {
padding-top: 16vh;
div {
  margin-bottom: 25vh;
  img {
    width: 95%;
  }
}
}
@media (min-width: 1200px) {
padding-top: 6%;
div {
  margin-bottom: 13%;
  img {
    width: 50vw;
  }
}
}
`;

export default function Home(props) {
  const { setPage } = props;

  return (
    <Layout navbar="home" setPage={setPage}>
      <Main>
        <div>
          <img src="./images/mern.png" alt="" />
        </div>
        <Button className={flipInX} text="Iniciar" click={setPage} nonDefaultCss={buttonCSS} />
      </Main>
    </Layout>
  );
}

Home.propTypes = {
  setPage: PropTypes.func.isRequired
};
