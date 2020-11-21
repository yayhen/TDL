import React from 'react';
import ReactDOM from 'react-dom';

class InputTask extends React.Component {
	constructor (props) {
		super(props);
		this.meChange = this.meChange.bind(this);
	}

	meChange (e) {
		this.props.taskChange(e.target.value)
		//console.log(e.target.value)
	}

	render () {
		return (
			<input type="text" onChange={this.meChange} 
			placeholder="Input task" value={this.props.inputText}/>
			);
	}
}

export default InputTask;