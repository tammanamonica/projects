import React from 'react'
 import Updatatable from './Updatatable'
 import Newform from './Newform'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Editform from './Editform';
const App = () => {

  return (
    <div>
      <h2>APPLICATION FORM</h2>
      <Router>
      <Routes>
        <Route path="/" element={<Updatatable />} />
        <Route path="/newform" element={<Newform />} /> 
        <Route path="/Editform/:userid" element={<Editform />} /> {/* Route for NewForm */}
      </Routes>
    </Router>
  
    </div>
  )
}

export default App

