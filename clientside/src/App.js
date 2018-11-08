import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TidContainer from './Containers/TidContainer';
import BitContainer from './Containers/BitContainer';
import ProfileContainer from './Containers/ProfileContainer';
import {Route, Switch} from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <div className="App">
      	<Switch>
		<Route exact path='/' component={DataContainer} />
	    	<Route exact path='/polls' component={PollContainer} />
	    	<Route exact path='/profile' component={ProfileContainer} />
	</Switch>
      </div>
    );
  }
}

export default App;
