import React from 'react';
import { css } from 'emotion';
import PropTypes from 'prop-types';

export default function Button(props) {
  const { nonDefaultCss, text, withLink } = props;

  const buttonCSS = css`
    background-color: darkblue;
    font-size: 24px;
    border-radius: 4px;
    cursor: pointer;
    color: white;
    height: 100px;
    text-decoration: none;
    text-align: center;
    margin: auto;
    ${nonDefaultCss}
    p {
      font-size: 34px;
    }
    &:hover {
      text-decoration: underline;
    }
    @media (max-width: 1199px) {
      width: 90%;
      p {
        margin-top: 9.5%;
      }
    }
    @media (min-width: 1200px) {
      width: 50%;
      p {
        margin-top: 4.5%;
        font-size: 34px;
      }
    }`;

  return (
    <>
      { !withLink
        ? <button type="button" className={buttonCSS}>{text}</button>
        : (
          <a href={withLink} className={buttonCSS}><p>{text}</p></a>
        )}
    </>
  );
}

Button.defaultProps = {
  nonDefaultCss: '',
  withLink: undefined
};

Button.propTypes = {
  nonDefaultCss: PropTypes.string,
  text: PropTypes.string.isRequired,
  withLink: PropTypes.string
};
