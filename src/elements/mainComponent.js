import React from 'react';
import ReactDOM from 'react-dom';
import InputTask from './inputTask.js'
import PushTaskButton from './pushTaskButton.js'
import OutputTask from './outputTasks.js'

class MainComponent extends React.Component {

	state = {
		tiPidor : '',
		listOfTasks: ['1','2'],
		tempTask: '',
	}

	tiPidorChange = (answer) => {
		/*this.setState({
			tiPidor: answer
		})*/
		let a = this.state.tempTask;
		let b = this.state.listOfTasks
		let c = b.push(a);
		console.log(this.state.listOfTasks);
		console.log(a);
		console.log('b=' ,b);
		this.setState({listOfTasks: b});
		this.setState({tempTask: ''});
		/*this.setState(state =>{
			const list = this.state.listOfTasks.push(a);
			return list
		});*/	
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
	}

	render () {
		return (
			<div>
				<InputTask taskChange={this.addTask} 
					inputText={this.state.tempTask} />
				<PushTaskButton tiPidor={this.tiPidorChange} />
				<OutputTask taskRender={this.state.listOfTasks} 
					dlt={this.deleteTask}/>
			</div>
			);
	}
}

export default MainComponent;