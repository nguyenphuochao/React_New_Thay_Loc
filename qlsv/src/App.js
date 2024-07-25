import React from 'react'
import { Routes, Route } from "react-router-dom";
import Layout from './component/Layout';
import Index from './page/student/Index';
import { Index as IndexSubject } from './page/subject/Index';
import { Index as IndexRegister } from './page/register/Index';
import Create from './page/student/Create';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />} >
        {/* Student */}
        <Route path="" element={<Index />} />
        <Route path="/create/student" element={<Create />} />
        {/* Subject */}
        <Route path="/subject" element={<IndexSubject />} />
        {/* Register */}
        <Route path="/register" element={<IndexRegister />} />
      </Route>
    </Routes>
  )
}

export default App
