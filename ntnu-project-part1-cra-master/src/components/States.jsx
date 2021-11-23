import React from 'react';
import PROG2053Models from '../modelData/data';
import './States.css';

/**
 * Define States, a React componment of PROG2053 project part #1 problem #2.  The model
 * data for this view (the state names) is available
 * at PROG2053Models.statesModel().
 */
class States extends React.Component {
	constructor(props) {
		super(props);
		console.log('PROG2053Models.statesModel()', PROG2053Models.statesModel());
	}

	render() {
		return (
			<div>
				Replace this with the code for PROG2053 Part #1, Problem #2
			</div>
		);
	}
}

export default States;
