import { useState } from 'react'
import { Route, Routes } from "react-router";
import './App.css'
import { HelmetProvider } from "react-helmet-async";
import Home from "./Home";
import NextPage from './NextPage';


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        <HelmetProvider>
     

      <Routes>
        <Route path="/" element={ <Home />} />
        <Route path="/NextPage" element={<NextPage />} />
    
      </Routes>
    </HelmetProvider>
    </>
  )
}

export default App
