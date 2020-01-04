import React from 'react'
import { css } from 'emotion'

const Button = () => (
    <button className={buttonCSS}>
        Hover to change color.
    </button>
)

const buttonCSS = css`
    padding: 32px;
    background-color: hotpink;
    font-size: 24px;
    border-radius: 4px;
    &:hover {
    color: white;
}`

export default Button