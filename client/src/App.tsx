import { useState } from 'react'
import './App.css'
import { Routes,Route, Navigate, } from 'react-router-dom'
import Home from './pages/Home'
import { Generate } from './pages/Generate'
import { Desktop } from './pages/Desktop'
import LineTicket from './pages/LineTicket'

function App() {


  return (
    <>
     <Routes>
        <Route element={<Home/>} path='/'  ></Route>
        <Route element={<Generate/>} path='/generate' />
        <Route element={<LineTicket/>} path='/line' />
        <Route element={<Desktop/>} path='/desktop/:id/:name' />
        <Route element={<Navigate to={"/"}/>} path='/*' />
     </Routes>
    </>
  )
}

export default App
