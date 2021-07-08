import React from 'react'
import './App.scss'
import Image from './images/allinee.png'
import { Home } from './components/Home'
import InvoicePage from './components/InvoicePage'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Tabin } from './components/Tab'
import General from './components/General'
import Regular from './components/Regular'
function App() {
  return (
    <div className="App">
        <div className="allinee">
        <img src={Image} alt="allinee" className="img"/>
        <h1 className="home" >NanoERP</h1>
        </div>
        <br></br>
        <Router >
    
    <Switch>
    <Route path='/' component={Home} exact/>
    <Route path='/tab' component={Tabin} />
    <Route path='/general' component={General}/>
    <Route path="/regular" component={Regular}/>
    
  
</Switch>
<div className="footer"><p > Copyright © 2021 Allinee Technologies - All Rights Reserved</p></div>
</Router>
    
     
    </div>
  )
}

export default App
