import React, { useState } from 'react';
import Home from './pages/Home';
import VoterData from './pages/VoterData';
import Candidates from './pages/Candidates';
import Statistics from './pages/Statistics';

export default function Index() {
  const [page, setPage] = useState('home');
  const [voterData, setVoterData] = useState({
    firstName: '',
    lastName: '',
    dni: '',
    gender: ''
  });

  function renderPage() {
    const pages = {
      home: <Home setPage={setPage} />,
      voterdata: <VoterData setPage={setPage} setVoterData={setVoterData} />,
      candidates: <Candidates setPage={setPage} voterData={voterData} />,
      statistics: <Statistics setPage={setPage} />
    };
    return pages[page];
  }

  return (
    <>
      {renderPage()}
    </>
  );
}
