import React from 'react';
import Home from './pages/Home';
import { Routes, Route } from "react-router-dom";
import Recipes from "./pages/Recipes"
import Settings from './pages/Settings';
const App = () => {
  return (
    
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/recipes" element={<Recipes/>}></Route>
        <Route path="/settings" element={<Settings/>}></Route>
    </Routes>
    
    
  )
}

export default App;