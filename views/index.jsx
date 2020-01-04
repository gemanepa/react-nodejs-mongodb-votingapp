import React from 'react';
import PropTypes from 'prop-types';
import Layout from './shared-ui/Layout';
import Button from './shared-ui/Button';


export default function Index({ message }) {
  return (
    <Layout title="Lalala">
      <p>{message}</p>
      <Button />
    </Layout>
  );
}

Index.propTypes = {
  message: PropTypes.string.isRequired
};
