import Layout from './shared-ui/Layout'
import Button from './shared-ui/Button'
import { css } from 'emotion'



export default function Index({ message }) {
    return (
     <Layout title="Lalala">
        <p>{message}</p>
        <Button />
    </Layout>
    )
}
