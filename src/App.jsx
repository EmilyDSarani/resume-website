import React, {Component} from 'react';
import Home from './views/Home/Home';
import Experience from './views/Page/Experience';
import Education from './views/Page/Education';
import Portfolio from './views/Page/Portfolio';
import Contact from './views/Page/Contact';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import './App.css';
import 'dotenv/config'




export default class App extends Component {
  render() {
    return (
      <>
       <Router>
         {/*
        <header>
        <NavLink  exact activeClassName= {style.active} className={style.not} to='/'> Home</NavLink>
        <NavLink exact activeClassName = 'active' className="not" to= '/experience'> Work Experience</NavLink>
        <NavLink  exact activeClassName = 'active' className="not" to= '/education'> Education</NavLink>
        <NavLink exact activeClassName = 'active' className="not" to= '/portfolio'>Portfolio</NavLink>
        </header> */}
        
       
        <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/experience" exact component={Experience} />
        <Route path="/education" exact component={Education} />
        <Route path="/portfolio" exact component={Portfolio} />
        <Route path="/contact" exact component={Contact} />

        </Switch>
      
      </Router>
    </>
  );
}

}
