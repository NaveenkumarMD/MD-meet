import React, { useState } from 'react'
import Jitsi from 'react-jitsi'
import { BrowserRouter, Route } from 'react-router-dom'
import Meet from './Components/Screens/Meet'
import Home from './Components/Screens/Home'
import './App.css'
const  App = () => (
  <BrowserRouter>
  <Route path="/" exact component={Home} />
  <Route path="/meet" component={Meet} />
  </BrowserRouter>
)

export default App
