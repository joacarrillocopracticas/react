import React, {Component} from 'react';
import logo from './assests/logo.svg';
import './styles/App.css';
import  AppRouter from './components/AppRouter.js';
import { Button } from 'reactstrap';
import { Link, BrowserRouter, Route } from 'react-router-dom';
import Welcome from './components/Welcome.js';

class App extends Component
{
  
    constructor(props){
      super(props)
      this.state = [];
    }
    
    render(){
      return (
        
        <div>
          <head>
            <AppRouter/>
          </head>
          <BrowserRouter>
            <Link to="hello">   hello click </Link>
            <Route path="/hello" component={Welcome}/>
          </BrowserRouter>
        </div>
      )
    }
}


export default App;
