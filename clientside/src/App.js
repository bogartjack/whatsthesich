import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import DataContainer from './Containers/DataContainer';
import PollContainer from './Containers/PollContainer';
import ProfileContainer from './Containers/ProfileContainer';
import NewContainer from './Containers/NewContainer';
import {Route, Switch} from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <div className="App">
      	<Switch>
		<Route exact path='/' component={DataContainer} />
	    	<Route exact path='/polls' component={PollContainer} />
	    	<Route exact path='/profile' component={ProfileContainer} />
	    	<Route exact path='/new' component={NewContainer{ />
	</Switch>
      </div>
    );
  }
}

export default App;
