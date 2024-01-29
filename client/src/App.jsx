import React from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Profile from './pages/Profile'
import Signin from './pages/Signin'
import SignUp from './pages/SignUp'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' Component={Home}/>
        <Route path='/about' Component={About}/>
        <Route path='/profile' Component={Profile}/>
        <Route path='/signin' Component={Signin}/>
        <Route path='/signup' Component={SignUp}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App