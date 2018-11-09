import {React, Component} from 'react';
import axios from 'axios';
import TidList from './tids/TidList';
class TidContainer extends Component {
	constructor(props) {
		super(props);
		this.state = {
			tids: [],

		}
	}
	ComponentDiDMount(){
		axios.get('/api/v1/data/huffingtonPolls').then(response =>{
			this.setState({
				tids: response.items
		}).catch(err=>{console.log(err)});
	}
	render(){
		return(
			<div>
				<TidList tids = {this.state.tids} />
			</div>
		)
	}
} 		
