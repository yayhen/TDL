import React from 'react';
import ReactDOM from 'react-dom';

class ClearButton extends React.Component {
	constructor (props) {
		super(props);
		this.meClick = this.meClick.bind(this);
	}

	meClick () {
		this.props.dlt(this.props.ind);
	}

	render () {
		return (
			<button onClick={this.meClick}>X</button>
			);
	}
}

export default ClearButton;