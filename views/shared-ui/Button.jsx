import React from 'react';
import { css } from 'emotion';

const buttonCSS = css`
    padding: 32px;
    background-color: hotpink;
    font-size: 24px;
    border-radius: 4px;
    &:hover {
    color: white;
}`;


export default function Button() {
  return (
    <button type="button" className={buttonCSS}>
        Hover to change color.
    </button>
  );
}
