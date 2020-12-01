import React from 'react';
import ReactDOM from 'react-dom';
import InputTask from './inputTask.js'
import PushTaskButton from './pushTaskButton.js'
import OutputTask from './outputTasks.js'
import PriorityCheck from './priorityCheck.js'

class MainComponent extends React.Component {

	state = {
		tiPidor : '',
		listOfTasks: [],
		listOfPriority: [],
		tempTask: '',
		tempPriority: 'low',
		selectedTask: -1,
	}


	componentDidMount() {
		let a = localStorage.getItem("tasks");
		if (a != null) {
			this.setState({
				listOfTasks: a.split("!@##@!")
			});
		}

		let b = localStorage.getItem("priority");
		if (b != null) {
			this.setState({
				listOfPriority: b.split("!@##@!")
			});
		}
	}

	componentDidUpdate() {
		localStorage.setItem("tasks", this.state.listOfTasks.join('!@##@!'));
		localStorage.setItem("priority", this.state.listOfPriority.join('!@##@!'));
	}

	changeTask = (taskNumber) => {
		this.setState({
			selectedTask: taskNumber
		});
	}

	tiPidorChange = (answer) => {
		/*this.setState({
			tiPidor: answer
		})*/
		let a = this.state.tempTask;
		let b = this.state.listOfTasks
		b.push(a);
		console.log(this.state.listOfTasks);
		console.log(a);
		console.log('b=' ,b);
		this.setState({listOfTasks: b});
		this.setState({tempTask: ''});
		/*this.setState(state =>{
			const list = this.state.listOfTasks.push(a);
			return list
		});*/	
		let aa = this.state.tempPriority;
		let bb = this.state.listOfPriority
		bb.push(aa);
		this.setState({listOfPriority: bb});
		this.setState({tempPriority: 'low'});
	}

	addTask = (formValue) => {
		/*this.setState(state =>{
			const list = this.state.listOfTasks.push(formValue);
			return list
		})*/

		this.setState({tempTask: formValue});
	}

	deleteTask = (ind) =>{
		//console.log(ind);
		let newList = this.state.listOfTasks.map(item =>{
			return item
		});
		newList.splice(ind, 1);
		this.setState({
			listOfTasks: newList
		});
		this.setState({
			selectedTask: -1
		});
		newList = this.state.listOfPriority.map(item =>{
			return item
		});
		newList.splice(ind, 1);
		this.setState({
			listOfPriority: newList
		});
	}

	changePriority = (val) => {
		this.setState({
			tempPriority: val
		});
	}

	render () {
		return (
			<div>
				<InputTask taskChange={this.addTask} 
					inputText={this.state.tempTask} />
				<PushTaskButton tiPidor={this.tiPidorChange} />
				<PriorityCheck changePriority={this.changePriority}/>
				<OutputTask taskRender={this.state.listOfTasks} 
					priorityRender={this.state.listOfPriority}
					changeTask={this.changeTask} 
					selectedTask={this.state.selectedTask}
					dlt={this.deleteTask} />
			</div>
			);
	}
}

export default MainComponent;