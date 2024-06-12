/* eslint-disable no-unused-vars */
import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import ForgotPassword from './pages/ForgotPassword';
import Login from './pages/Login';
import Register from './pages/Register';
import Reports from './pages/Report';
import Products from './pages/Product';
import Queries from './pages/Queries';
import Teams from './pages/Teams';
import Message from './pages/Message';
import Form from './pages/Form';
import Layout from './pages/Layout';

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Public routes */}
        <Route path='/login' element={<Login />} />
        <Route path='/' element={<Register />} />
        <Route path='/forgotPassword' element={<ForgotPassword />} />

        {/* Layout component handles the rendering of the Navbar */}
        <Route element={<Layout />}>
          <Route path='/home' element={<Home />} />
          <Route path='/reports' element={<Reports />} />
          <Route path='/task' element={<Products />} />
          <Route path='/queries' element={<Queries />} />
          <Route path='/message' element={<Message />} />
          <Route path='/teams' element={<Teams />} />
          <Route path='/form' element={<Form />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
