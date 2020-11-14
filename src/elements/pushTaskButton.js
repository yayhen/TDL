import React from 'react';
import ReactDOM from 'react-dom';

class PushTaskButton extends React.Component {
	constructor (props) {
		super(props);
		this.meClick = this.meClick.bind(this);
	}

	meClick () {
		this.props.tiPidor('ТЫ ПИДОР')
	}

	render () {
		return (
			<button onClick={this.meClick}>click me!</button>
			);
	}
}

export default PushTaskButton;