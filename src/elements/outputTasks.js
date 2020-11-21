import React from 'react';
import ReactDOM from 'react-dom';

class OutputTask extends React.Component {
	constructor (props){
		super(props);
		this.deleteTask=this.deleteTask.bind(this);
	}

	deleteTask (e) {
		this.props.dlt(e.target.id);
		
	}

	render () {
		let arrTsk = this.props.taskRender.map((item, index) => {
			return <div id={index} key={index} onClick={this.deleteTask}>{item}</div>
		})
		return (
			<div>
				{arrTsk}
			</div>
			);
	}
}

export default OutputTask;