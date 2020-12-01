import React from 'react';
import ReactDOM from 'react-dom';
import ClearButton from './clearButton.js'
	

	
	const noStyle = {
		//display: 'inline',
	}

	const greenStyle = {
		backgroundColor: 'green',
		//display: 'inline',
	}

	const yellowStyle = {
		backgroundColor: 'yellow',
		//display: 'inline',
	}

	const redStyle = {
		backgroundColor: 'red',
		//display: 'inline',
	}

	let stylesMap = new Map();
	stylesMap.set('0', noStyle);
	stylesMap.set('low', greenStyle);
	stylesMap.set('normal', yellowStyle);
	stylesMap.set('high', redStyle);




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
					<div id={index} key={index} style={stylesMap.get(this.props.priorityRender[index])} >
						<div style={{display: 'inline'}}>
							{item}
						</div> 
						<ClearButton dlt={this.props.dlt} ind={index} />
					</div>
				)
			} else {
			return <div id={index} key={index} onClick={this.chgTask} style={stylesMap.get(this.props.priorityRender[index])}>{item}</div>
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