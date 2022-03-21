import React, { useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Main from './pages/Main';
import User from './pages/User';
import Rank from './pages/Rank';
import Header from './components/Header';
import axios from 'axios';
import { headers } from './constants';

function App() {
  useEffect(() => {
    const fetchData = async () => {
      const nickname = '시우민188';
      try {
        const response = await axios({
          method: 'GET',
          url: `/api/users/nickname/${nickname}`,
          headers,
        });
        console.log(response);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/kart/user" element={<User />} />
        <Route path="/kart/rank" element={<Rank />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
