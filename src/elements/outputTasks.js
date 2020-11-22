import React from 'react';
import ReactDOM from 'react-dom';
import ClearButton from './clearButton.js'

class OutputTask extends React.Component {
	constructor (props){
		super(props);
		//this.deleteTask=this.deleteTask.bind(this);
		this.chgTask=this.chgTask.bind(this);
	}

	/*deleteTask (e) {
		this.props.dlt(e.target.id);
	}*/

	chgTask (e) {
		this.props.changeTask(e.target.id);
	}

	render () {
		let arrTsk = this.props.taskRender.map((item, index) => {
			if (this.props.selectedTask == index) {
				return (
					<div id={index} key={index} >
						<div style={{ display: 'inline'}}>
							{item}
						</div> 
						<ClearButton dlt={this.props.dlt} ind={index}/>
					</div>
				)
			} else {
			return <div id={index} key={index} onClick={this.chgTask}>{item}</div>
			}
		})
		return (
			<div>
				{arrTsk}
			</div>
			);
	}
}

export default OutputTask;