import React from 'react'
import './App.css'
import './index.css'
import Home from './pages/public/Home'
import SignUp from './pages/public/SignUp'
import Login from './pages/public/Login'
import Dashboard from './pages/public/Dashboard'
import {BrowserRouter, Routes, Route} from 'react-router-dom'


export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/register" element={<SignUp/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/dashboard" element={<Dashboard/>} />
      </Routes>
    </BrowserRouter>
  )
}
