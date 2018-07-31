import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import {TransitionGroup, CSSTransition} from "react-transition-group";
import "./App.css";
import Home from "./pages/Home";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import Skills from "./pages/Skills";
import Art from "./pages/Art";
import Contact from "./pages/Contact";
import PageNotFound from "./pages/404";
import PageShell from "./components/PageShell";

class App extends Component{
  render(){
    return(
      
      <Route render = {({location}) => (
      <div className = "App">
        
        <TransitionGroup>
          <CSSTransition
            key = {location.key}
            timeout={300}
            classNames = "fade"
            >
            <Switch location = {location}>
              <Route path = "/" exact component = {PageShell(Home)}></Route>
              <Route path = "/about-me" exact component = {PageShell(About)}></Route>
              <Route path = "/portfolio" exact component = {PageShell(Portfolio)}></Route>
              <Route path = "/skills" exact component = {PageShell(Skills)}></Route>
              <Route path = "/art" exact component = {PageShell(Art)}></Route>
              <Route path = "/contact" exact component = {PageShell(Contact)}></Route>
              <Route path = "*" exact component = {PageShell(PageNotFound)}></Route>
            </Switch>
          </CSSTransition>
      </TransitionGroup>
    
      // </div> 
        )}/>
      

    )
  }
}
export default App;

