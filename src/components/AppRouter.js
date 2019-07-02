import  React, {Component} from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Welcome from './Welcome.js';

class AppRouter extends Component {
    
    render(){
      return (
        <BrowserRouter>
            <Route path="/hello" component={Welcome}/>
        </BrowserRouter>
      )
    }
}

export default AppRouter;