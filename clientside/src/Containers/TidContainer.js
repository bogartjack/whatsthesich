import {React, Component} from 'react';
import axios from 'axios';
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
		});
	}
} 		
