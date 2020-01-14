import React from 'react';
import { css } from 'emotion';
import PropTypes from 'prop-types';

export default function Button(props) {
  const { nonDefaultCss, text, click } = props;

  const buttonCSS = css`
    border-radius: 4px;
    cursor: pointer;
    color: white;
    text-decoration: none;
    text-align: center;
    margin: auto;

    &:hover {
      text-decoration: underline;
    }
    @media (max-width: 1199px) {
      width: 90%;
    }
    @media (min-width: 1200px) {
      width: 50%;
    }
    ${nonDefaultCss}
    `;

  return (
    <button type="button" className={buttonCSS} onClick={() => click('voterdata')}>{text}</button>
  );
}

Button.defaultProps = {
  nonDefaultCss: ''
};

Button.propTypes = {
  nonDefaultCss: PropTypes.string,
  text: PropTypes.string.isRequired,
  click: PropTypes.func.isRequired
};
