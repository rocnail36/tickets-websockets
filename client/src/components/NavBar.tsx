import React from 'react'
import { Link } from 'react-router-dom'

export const NavBar = () => {
  return (
    <nav className="w-[30%] bg-blue-950 h-screen py-8">
    <ul className="flex flex-col gap-2 justify-center text-center">
        <div className="bg-sky-400 py-4">
      <li className="text-white flex items-center gap-2 w-[80%] m-auto cursor-pointer">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-user"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
      <p>ingresar</p>
      </li>
      </div>
      <Link to={"/line"}>
      <li className="text-white flex items-center gap-2 w-[80%] m-auto py-4 cursor-pointer">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-sidebar"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="9" y1="3" x2="9" y2="21"></line></svg>
      <p>cola de ticket</p>
      </li>
      </Link>
      <Link to={"/generate"}>
      <li className="text-white flex items-center gap-2 w-[80%] m-auto py-4 cursor-pointer">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-upload"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="17 8 12 3 7 8"></polyline><line x1="12" y1="3" x2="12" y2="15"></line></svg>
      <p>generar ticket</p>
      </li>
      </Link>
    </ul>
  </nav>
  )
}
