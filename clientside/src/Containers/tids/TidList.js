import {React, Component} from 'react';
import {Card, CardBody,CardTitle, CardText, CardSubtitle 
	Button, 
	Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
const moment = require('moment');
class TidList = () =>{
	constructor(props){
		super(props);
		this.state = {
			modal: false,
			question: ''
		}
		this.toggle.bind(this);
	}
	toggle() {
		this.setState({
			modal: !this.state.modal
		});
	}
	render(){
		const tidList = this.props.tids.map((tid, i) =>{
			<div>	
				<Card>
					<CardBody>
						<CardTitle>
							{tid.title}
						</CardTitle>
						<CardSubtitle>
							date: 	{moment(tid.created_at)
									.format('MMMM Do YYYY hh:mm'} 
								source: {tid.url}
						</CardSubtitle>
						<CardText>
						</CardText>
						<Button color='danger' onClick={this.toggle}>
							Bit?
						</Button>
					</CardBody>
				</Card>
				<TidModal open={this.state.modal}/>
			</div>
		})
	}
}

export default TidList;
