import Layout from './shared-ui/Layout'
import { css, cx } from 'emotion'

const color = 'white'

export default function Index({ message }) {
    return (
     <Layout title="Lalala">
        <p>{message}</p>
        <button className={buttonCSS}>
            Hover to change color.
        </button>
    </Layout>
    )
}

const buttonCSS = css`
    padding: 32px;
    background-color: hotpink;
    font-size: 24px;
    border-radius: 4px;
    &:hover {
    color: ${color};
}`