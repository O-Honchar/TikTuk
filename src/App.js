import React from 'react';
import { Routes, Route } from 'react-router-dom';
import News from './pages/News';
import User from './pages/User';
import './App.css';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<News />} />
        <Route path="/users" element={<User />}/>
      </Routes>
    </div>
  );
}

export default App;
