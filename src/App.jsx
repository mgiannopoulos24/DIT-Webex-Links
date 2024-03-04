import "./App.css" 
import React from "react";
import { Routes, Route, BrowserRouter} from 'react-router-dom';
import MainPage from "./MainPage/MainPage";
import MemeCorner from "./MemeCorner/MemeCorner";
import KeyPressHandler from "./KeyHandler";

export default function App () {
  return(
  <>
    <BrowserRouter>
    <KeyPressHandler />
      <Routes>
        <Route path="/*" element={<MainPage />} />
        <Route path="/MemeCorner" element={<MemeCorner />} />
      </Routes>
    </BrowserRouter>
  </> 
  );
};


