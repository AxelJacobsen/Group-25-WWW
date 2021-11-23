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
		this.state = {
			states: PROG2053Models.statesModel().sort(),
			searchValue: '',
			errorMessage: null
		};
	}

	filterStates = (event) => {
		const value = event.target.value;
		const filteredStates = PROG2053Models.statesModel()
			.filter((state) =>
				state.toLocaleLowerCase().includes(value.toLocaleLowerCase())
			);
		this.setState({
			states: filteredStates,
			searchValue: value,
			errorMessage: filteredStates.length === 0 ? 'No matches' : null
		});
	};

	renderResults = () => {
		if (this.state.errorMessage !== null) {
			return <div>{this.state.errorMessage}</div>;
		}

		return (
			<ul>
				{this.state.states.map((state) =>
					<li key={state}>{state}</li>
				)}
			</ul>
		);
	};

	render() {
		return (
			<>
				<input placeholder="Search" value={this.state.searchValue} onChange={(event) => this.filterStates(event)} />
				<div>
					<i>Search value: {this.state.searchValue}</i>
				</div>
				{this.renderResults()}
			</>
		);
	}
}

export default States;
