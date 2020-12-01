import React from 'react';
import ReactDOM from 'react-dom';

class PriorityCheck extends React.Component {
	constructor (props) {
		super(props);
		this.priorChange = this.priorChange.bind(this);
	}

	priorChange = (e) => {
		this.props.changePriority(e.target.value);
	}

	render () {
		return (
			<div onChange={this.priorChange}>
				<input type="radio" name="radioPrior" value="low" checked />low priority&#160;
				<input type="radio" name="radioPrior" value="normal" />normal priority&#160;
				<input type="radio" name="radioPrior" value="high" />high priority<br /><br />
			</div>
			);
	}
}

export default PriorityCheck;