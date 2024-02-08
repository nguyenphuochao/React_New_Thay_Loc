import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from './component/Layout';
import Home from './page/Home';
import Contact from './page/Contact';
function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
      </Route>
    </Routes>
  )
}

export default App
