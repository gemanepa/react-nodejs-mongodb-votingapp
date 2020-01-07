import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Home from './pages/home';
import VoterData from './pages/voter-data';

export default function Index() {
  const [page, setPage] = useState('home');
  const [voterData, setVoterData] = useState(undefined);

  function renderPage() {
    const pages = {
      home: <Home setPage={setPage} />,
      voterdata: <VoterData setPage={setPage} setVoterData={setVoterData} />
    };
    return pages[page];
  }

  return (
    <>
      {renderPage()}
    </>
  );
}
