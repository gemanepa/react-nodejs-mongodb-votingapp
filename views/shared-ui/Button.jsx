import React from 'react';
import { css } from 'emotion';
import PropTypes from 'prop-types';

export default function Button(props) {
  const { nonDefaultCss, text, withLink } = props;

  const buttonCSS = css`
    padding: 32px;
    background-color: darkblue;
    font-size: 24px;
    border-radius: 4px;
    width: 100%;
    cursor: pointer;
    color: white;
    ${nonDefaultCss}
    &:hover {
      text-decoration: underline;
    }`;

  const linkCSS = css`
    color: white;
    text-decoration: none;
  `;

  return (
    <button type="button" className={buttonCSS}>
      {withLink
        ? (
          <a href={withLink} className={linkCSS}>
            {text}
          </a>
        )
        : text}
    </button>
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
