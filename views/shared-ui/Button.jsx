import React from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';

export default function Button(props) {
  const { nonDefaultCss, text, click } = props;

  const StyledButton = styled.button`
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
    <StyledButton type="button" onClick={() => click('voterdata')}>{text}</StyledButton>
  );
}

Button.defaultProps = {
  nonDefaultCss: ''
};

Button.propTypes = {
  nonDefaultCss: PropTypes.object, // eslint-disable-line react/forbid-prop-types
  text: PropTypes.string.isRequired,
  click: PropTypes.func.isRequired
};
