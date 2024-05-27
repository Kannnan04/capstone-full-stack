import React from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Reports from './pages/Report';
import Products from './pages/Product';
import Queries from './pages/Queries';
import Teams from './pages/Teams';
import Message from './pages/Message';
import Form from './pages/Form';



function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/reports' element={<Reports />} />
          <Route path='/task' element={<Products />} />
          <Route path='/queries' element={<Queries />} />
          <Route path='/message' element={<Message />} />
          <Route path='/teams' element={<Teams />} />
          <Route path='/form' element={<Form />} />
          

        </Routes>
      </Router>
    </>
  );
}

export default App;


