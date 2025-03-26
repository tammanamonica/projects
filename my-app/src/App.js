import React from 'react'
 import Updatatable from './Updatatable'
 import Newform from './Newform'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Editfrom from './Editfrom';

const App = () => {

  return (
    <div>
      <h2>APPLICATION FORM</h2>
      <Router>
      <Routes>
        <Route path="/" element={<Updatatable />} />
        <Route path="/newform" element={<Newform />} /> 
        <Route path="/Editfrom" element={<Editfrom />} />  {/* Route for NewForm */}
      </Routes>
    </Router>
      {/* <Updatatable /> */}
      {/* <Editfrom /> */}
      {/* <Newform /> */}

    </div>
  )
}

export default App

