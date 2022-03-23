import React, { useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Main from './pages/Main';
import User from './pages/User';
import Rank from './pages/Rank';
import Header from './components/Header';
// import fetchUserData from './service/getData';

function App() {
  // useEffect(() => {
  //   const userData = fetchUserData();
  //   setUser(userData);
  // }, []);

  // const [user, setUser] = useState();

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
