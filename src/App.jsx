import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Assessment from "./containers/Assessment";
import Layout from "./components/Layout";
import Home from "./containers/Home";
import NoPage from "./components/NoPage";
import React from 'react';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="new-assessment" element={<Assessment readOnly={false} />} />
          <Route path="view-assessment" element={<Assessment readOnly={true} />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
