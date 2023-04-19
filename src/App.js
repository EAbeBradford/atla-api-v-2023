import React from 'react';
import './App.css';
import Navbar from './components/navbar';
import { BrowserRouter as Router, Routes, Route}
    from 'react-router-dom';

import RandomChar from './pages/randomChar';
import WaterTribe from './pages/waterTribe';
import FireNation from './pages/fireNation';
// import Air from './pages/air';
// import Earth from './pages/earth';

// for multi page stuff : https://www.geeksforgeeks.org/how-to-create-a-multi-page-website-using-react-js/
  
function App() {
return (
    <Router>
    <Navbar />
    <Routes>
        <Route path='/' element={<RandomChar />} />
        <Route path='/waterTribe' element={<WaterTribe/>} />
        <Route path='/fireNation' element={<FireNation/>} />
        {/* <Route path='/earth' element={<Earth/>} /> */}
        {/* <Route path='/air' element={<Air/>} /> */}
    </Routes>
    </Router>
);
}
  
export default App;