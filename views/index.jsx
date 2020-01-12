import React, { useState } from 'react';
import Home from './pages/Home';
import VoterData from './pages/VoterData';
import Candidates from './pages/Candidates';

export default function Index() {
  const [page, setPage] = useState('home');
  const [voterData, setVoterData] = useState(undefined);

  function renderPage() {
    const pages = {
      home: <Home setPage={setPage} />,
      voterdata: <VoterData setPage={setPage} setVoterData={setVoterData} />,
      candidates: <Candidates setPage={setPage} voterData={voterData} />
    };
    return pages[page];
  }

  return (
    <>
      {renderPage()}
    </>
  );
}
