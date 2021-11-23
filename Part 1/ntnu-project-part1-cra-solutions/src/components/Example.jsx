import React from 'react';
import PROG2053Models from '../modelData/data';
import './Example.css';

class Example extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			name: PROG2053Models.exampleModel().name,
			motto: PROG2053Models.exampleModel().motto
		};
	}

	setMotto = (e) => {
		this.setState({
			...this.state,
			motto: e.target.value
		});
	};

	render() {
		return (
			<div className="container Example">
				<h1>PROG2053 Project Part#1 React.js Example</h1>

				<div className="motto-update">
					<div>{PROG2053Models.exampleModel().name}</div>
					<div>{this.state.motto}</div>
					<input value={this.state.motto} onChange={this.setMotto}></input>
				</div>
			</div>
		);
	}
}

export default Example;
