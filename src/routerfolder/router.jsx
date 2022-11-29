import React from 'react'
import { Route,Routes } from 'react-router-dom'
import About from '../pages/About'
import Contact from '../pages/Contact'
import Home from '../pages/Home'
import Project from '../pages/Project'
import Skills from '../pages/Skills'

export default function PageRouter() {
  return (
    <Routes >
        <Route path='/' element={<Home/>}/>
        <Route path='/About' />
        <Route path='/Skills' element={<Skills/>}/>
        <Route path='/Project' element={<Project/>}/>
        <Route path='/Contact' element={<Contact/>}/>
    </Routes>
  )
}
