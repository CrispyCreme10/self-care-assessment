import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NewAssessment from "./containers/NewAssessment";
import Layout from "./components/Layout";
import Home from "./containers/Home";
import NoPage from "./components/NoPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="new-assessment" element={<NewAssessment />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
