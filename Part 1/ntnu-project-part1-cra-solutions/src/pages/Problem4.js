import React from 'react';
import Example from '../components/Example';
import States from '../components/States';


class Problem4 extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			currentView: 'Example',
			nextView: 'States'
		};
	}

	switchView = () => {
		this.setState({
			currentView: this.state.currentView === 'Example' ?
				'States' :
				'Example',
			nextView: this.state.nextView === 'Example' ?
				'States' :
				'Example'
		});
	};

	render() {
		return <>
			<div>
				<button onClick={this.switchView}>Switch to {this.state.nextView}</button>
			</div>
			{this.state.currentView === 'Example' ?
				<Example/> :
				<States/>
			}
		</>;
	}
}

export default Problem4;
