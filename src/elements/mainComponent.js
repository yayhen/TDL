import React from 'react';
import ReactDOM from 'react-dom';
import InputTask from './inputTask.js'
import PushTaskButton from './pushTaskButton.js'
import OutputTask from './outputTasks.js'

class MainComponent extends React.Component {

	state = {
		tiPidor : ''
	}

	tiPidorChange = (answer) => {
		this.setState({
			tiPidor: answer
		})
	}

	render () {
		return (
			<div>
				<InputTask />
				<PushTaskButton tiPidor={this.tiPidorChange}/>
				<OutputTask pidor={this.state.tiPidor}/>
			</div>
			);
	}
}

export default MainComponent;