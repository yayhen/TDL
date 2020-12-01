import React from 'react';
import ReactDOM from 'react-dom';
import ClearButton from './clearButton.js'
	
	const divStyle = {
		width: '500px',
		marginLeft: 'auto',
		marginRight: 'auto'
	}
	
	const noStyle = {
		//display: 'inline',
		margin: '10px',
		borderRadius: '10%',
		border: '1px solid',
		fontSize: '20pt'
	}

	const greenStyle = {
		backgroundColor: '#FFCC00',
		margin: '10px',
		borderRadius: '10%',
		border: '1px solid',
		fontSize: '20pt'
		//display: 'inline',
	}

	const yellowStyle = {
		backgroundColor: '#FF9900',
		margin: '10px',
		borderRadius: '10%',
		border: '1px solid',
		fontSize: '20pt'
		//display: 'inline',
	}

	const redStyle = {
		backgroundColor: '#FF6600',
		margin: '10px',
		borderRadius: '10%',
		border: '1px solid',
		fontSize: '20pt'
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
			<div style={divStyle}>
				{arrTsk}
			</div>
			);
	}
}

export default OutputTask;