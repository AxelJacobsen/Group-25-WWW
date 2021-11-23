import React from 'react';
import {Link, withRouter} from 'react-router-dom';
import Example from '../components/Example';
import States from '../components/States';


class Problem5 extends React.Component {
	getNextView = () => {
		return this.props.match.params.page === 'example' ? 'states' : 'example';
	};

	render() {
		console.log(this.props);
		return <>
			<Link to={`/p5/${this.getNextView()}`}>
				<button>Switch to {this.getNextView()}</button>
			</Link>
			{this.props.match.params.page === 'example' ? <Example/> : <States/>}
		</>;
	}
}

export default withRouter(Problem5);
