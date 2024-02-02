import React from 'react'
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AddUser from './components/AddUser';
import AllUser from './components/AllUser';
import Home from './components/Home';
import UpdateUser from './components/UpdateUser';
import PowerBIReport from './pages/Dashboard';
function App() {
  return (
    <Router>
      <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/alluser' element={<AllUser/>}/>
          <Route path='/adduser' element={<AddUser/>}/>
          <Route path='/updateuser/:id' element={<UpdateUser/>}/>
          <Route path='/dashboard' element={<PowerBIReport/>}/>
        </Routes>

    </Router>
    
  );
}

export default App;
