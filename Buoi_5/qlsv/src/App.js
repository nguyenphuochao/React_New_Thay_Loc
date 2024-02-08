import React from 'react'
import { Routes, Route } from "react-router-dom";
import Layout from './component/Layout';
import Index from './page/student/Index';
import { Index as IndexSubject } from './page/subject/Index';
import { Index as IndexRegister } from './page/register/Index';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />} >
        <Route path="" element={<Index />} />
        <Route path="/subject" element={<IndexSubject />} />
        <Route path="/register" element={<IndexRegister />} />
      </Route>
    </Routes>
  )
}

export default App
