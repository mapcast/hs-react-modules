import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { MainPage, TablePage } from './pages';

function App() {
  return (
    <Routes>
      <Route exact path ="/" element={<MainPage/>}/>
      <Route exact path ="/table" element={<TablePage/>}/>
    </Routes>
  );
}

export default App;
