import React, { useState } from 'react';
import Home from './pages/home';
import VoterData from './pages/voter-data';
import Candidates from './pages/candidates';

export default function Index() {
  const [page, setPage] = useState('home');
  const [voterData, setVoterData] = useState(undefined);

  function renderPage() {
    const pages = {
      home: <Home setPage={setPage} />,
      voterdata: <VoterData setPage={setPage} setVoterData={setVoterData} />,
      candidates: <Candidates setPage={setPage} />,
    };
    return pages[page];
  }

  return (
    <>
      {renderPage()}
    </>
  );
}
